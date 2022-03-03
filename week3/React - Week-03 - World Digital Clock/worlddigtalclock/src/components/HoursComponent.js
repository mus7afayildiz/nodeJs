import React,{useState} from "react";

export default function GetHours() {

    const [clockState, setClockState] = useState();

    useState(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.getHours());
        }, 1000);
    })

    return (
        <div id="clock">{clockState}</div>
    )
}