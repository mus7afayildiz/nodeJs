import { useEffect, useState } from 'react';

import data from './data'


function App() {
  const [url, setUrl] = useState("");
  const [month, setMonth] = useState("");

  const changeSeason = (e)=> {
    const selectedDate = new Date(e.target.value); // "2022-01-01"
    const selectedMonth = selectedDate.getMonth(); // JS Date utility function
    //e.target.value.substring(5,7)

    // find month and url    
    const result = data.find((month) => month.id === selectedMonth);

    setUrl(result.img);
    setMonth(result.mount)
  }

  return (
    <div className="App">
      <input onChange={changeSeason} type="date"/>
      <figure>
        <img src={url} alt="season pic" style={{width:100}}/>
        <figurecaption>{month}</figurecaption>
      </figure>
    </div>
  );
}

export default App;
