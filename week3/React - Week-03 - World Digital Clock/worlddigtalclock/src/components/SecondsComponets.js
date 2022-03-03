import React,{useState} from "react";

export default function GetSeconds() {

    const [clockState, setClockState] = useState();

    useState(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.getSeconds());
        }, 1000);
    })

    return (
        <div id="clock">{clockState}</div>
    )
}
