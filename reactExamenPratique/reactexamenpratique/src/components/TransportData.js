
import React, { useEffect, useState } from 'react'

const TransportData = () => {

  useEffect(() => {
    GetDataOfTransport();
  }, []);

  const [locationCurrent, setLocationCurrent] = useState({});
  const [locationList, setLocationList] = useState({});


  const GetDataOfTransport = async () => {

    const apiUrl = "http://transport.opendata.ch/v1/stationboard?station=Lausanne&limit=10";

    const response = await fetch(apiUrl);
    const list = await response.json();
    setLocationList(list)
    setLocationCurrent(list.station.name)
    
  }
  console.log(locationCurrent)

  const a = locationList.stationboard
  console.log(a)


  return (<div>

    <div>{locationCurrent}</div>
    <div>{locationList.stationboard}</div>

  </div>

  )
}

export default TransportData;



