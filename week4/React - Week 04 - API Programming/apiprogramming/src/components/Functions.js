import React, { useEffect, useState } from 'react';

/*Component content is created*/
const Functions = () => {

/*Setting usestate*/    
    const [chuck, setChuck] = useState({});

/*Getting data from Api with useEffect and Async function */ 
    useEffect(() => {

        async function getData() {

            const api = "https://api.chucknorris.io/jokes/random";

            const response = await fetch(api);
            const info = await response.json();
            setChuck(info)

        }
        getData();

    }, [])

/*Reload page function*/ 
    function Git() {
        window.location.reload();
    }

/*Rendering Component*/ 
    return (
        <div>
            <h1>Chuck Norris Facts</h1>
            <img className='image' alt="chuckIcon" src={chuck.icon_url}></img>
            <div id="container">
                <p>
                    {chuck.value}
                </p>
            </div>
            <button onClick={Git}> Degistir</button>
        </div>
    )

}

/*Exporting component*/ 
export default Functions;