import React, {useState } from 'react'
/*
-Clock fonksiyonu olusturuldu
-Date nesnesi olusturuldu ve local time alindi
-State ile Data setInterval fonksiyonu icerisinde hersaniyede kullanildi



*/
export default function WorldDigitalClock() {

    const [clockState, setClockState] = useState();

    useState(() => {  
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    })   

  return (
    <div id="clock">{clockState}</div>
  )
}

