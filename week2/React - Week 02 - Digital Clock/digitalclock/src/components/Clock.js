import React, { useEffect, useState } from 'react'

/*
-Clock fonksiyonu olusturuldu
-Date nesnesi olusturuldu ve local time alindi
-State ile Data setInterval fonksiyonu icerisinde hersaniyede kullanildi



*/
function Clock() {

    const [clockState, setClockState] = useState();

    useEffect(() => {  
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    })   

  return (
    <div id="clock">{clockState}</div>
  )
}

export default Clock