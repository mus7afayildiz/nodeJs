export default function UserInformation(props) {

    const person = props.person;
    
    return (
      <div className="d-grid gap-2 d-md-flex justify-content-md-left" id="Information">
  
        <ul className="list-group-started list-group-pointed">
          <h3>Your Information</h3>
          <li className="list-item">Username: {person.username}</li>
          <li className="list-item">Email: {person.email}</li>
          <li className="list-item">Password: {person.password}</li>
        </ul>
  
      </div>
    )
  }