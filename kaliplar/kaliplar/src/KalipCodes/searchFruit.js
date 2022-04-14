import { useState } from "react";

function App() {

    const [meyveListesi, setMeyveListesi] = useState([
      "portakal",
      "elma",
      "armut",
      "karpuz",
      "kavun",
      "kivi",
      "cilek",
    ]);
  
    const [secilenMeyveler, setSecilenMeyveler] = useState([]);
  
    function handleChange(searchTerm) {
      const filterResults = meyveListesi.filter((meyve) =>meyve.includes(searchTerm.toLowerCase()));
       setSecilenMeyveler(filterResults);
    }
  
    return (
      <div className="App container">
        <input type="search" onChange={(e) => handleChange(e.target.value)} />
        <p> 
          {
            secilenMeyveler.map((meyve) => 
              <div>{meyve}</div>
            )
          }
        </p>
      </div>
    );
  }