import TransportData from "./TransportData";

export default function TravelInformation(props) {

 /*render user information component*/   
    return (
      <div className="d-grid gap-2 d-md-flex justify-content-md-left" id="Information">
  
        <ul className="list-group-started list-group-pointed">
          <h3>Your Travel Information</h3>
          <li className="list-item">Departure: {props.from} </li>
          <li className="list-item">Arrival: {props.to}</li>
          <li className="list-item">Arrival Time: </li>
          
        </ul>
  
      </div>
    )
  }