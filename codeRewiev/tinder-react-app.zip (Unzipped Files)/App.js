import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import FavoriteList from './components/FavoriteList';

function App() {
  const [person, setPerson] = useState({});
  const [favoriteList, setFavoriteList] = useState([]);

  // ilk olarak person nesnesini yüklemeyi tetikle
  useEffect(()=>{
    loadPerson();
  }, [])

  // person nesnesini fetch api ile yükle
  const loadPerson = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const personRemoteData = await response.json();
    setPerson(personRemoteData.results[0]);
  }

  // Event handler: Eger kisi begenilirse listeye koy
  const acceptPerson = (e)=> {
    // add person to favorites
    setFavoriteList([...favoriteList, person])

    // load new person
    loadPerson();
  }

  // Event handler: Kisi bgenilmez ise siradaki kisiye gec
  const rejectPerson = (e)=> {
    // load new person
    loadPerson();
  }

  return (
    <div className="App container">
      <div className="row">

        <div className="col">
          <figure>
            <img src={person?.picture?.medium} alt="season pic" />
            
            <p>
              Hi my name is <h2>{person?.name?.first} {person?.name?.last}</h2>
            </p>

            <button style={{color: "red"}} onClick={rejectPerson}>NOK</button>
            <button style={{color: "green"}} onClick={acceptPerson}>OK</button>
          </figure>
        </div>

        <div className="col">
          <FavoriteList list={favoriteList}/>
        </div>

      </div>
    </div>
  );
}

export default App;
