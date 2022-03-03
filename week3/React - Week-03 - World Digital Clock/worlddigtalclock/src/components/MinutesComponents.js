import React,{useState} from "react";

export default function GetMinutes() {

    const [clockState, setClockState] = useState();

    useState(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.getMinutes());
        }, 1000);
    })

    return (
        <div id="clock">{clockState}</div>
    )
}