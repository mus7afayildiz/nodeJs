
import './App.css';
import TravelInformation from './components/TravelInformation';
import SearchComponent from './components/SearchComponent';
import { useEffect, useState } from 'react';


function App() {

  const [locationCurrent, setLocationCurrent] = useState({});
  const [locationObject, setLocationObject] = useState({});
  const [departure, setDeparture] = useState({})
  const [arrival, setArrival] = useState({})
  const a = locationObject.stationboard

  useEffect(() => {

    const GetDataOfTransport = async () => {

      const apiUrl = "http://transport.opendata.ch/v1/connections?from=Basel&to=Zurich";

      const response = await fetch(apiUrl);
      const dataTransport = await response.json();
      console.log(dataTransport)

      setLocationObject(dataTransport)

      setDeparture(locationObject.from)
      setArrival(locationObject.to)
    }

    GetDataOfTransport();
  }, []);

  console.log(locationObject)
  console.log(departure)
  console.log(arrival) 
  return (
    <div className="App">
      <SearchComponent/>
      <TravelInformation locationObject={locationObject}/>
    </div>
  );
}

export default App;
