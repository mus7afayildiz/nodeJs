import React, { useState } from 'react'
import UserInformation from "./UserInformation";


/*
export default function UserInformation(props) {

    const person = props.person;
 //render user information component
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

*/




/*Sign up component is created*/
const SignUpComponent = () => {

/*Sstates are created*/
    const [person, setPerson] = useState({});
    const [submited, setSubmited] = useState(false);

/*VAlidation control*/
    const runValidations = () => {
        if (person.password !== person.repeatPassword) {
            alert("Password and Password repeat are not same")
            return false;
        }
        if (person.username.trim() === '') {
            return false;
        }

        return true;
    }
/*Submit control*/
    const submit = e => {
        e.preventDefault();

        if (runValidations()) {
            setSubmited(!submited);
        }
    }

/*Render Sign up component and user information component*/
    return (
        <div className="container">
            <div id="signUpContainer">

                <form onSubmit={submit}>
                    <h1>SIGN UP</h1>
                    <div className="mb-3">

                        <input
                            type="name"
                            value={person.username}
                            onChange={e => setPerson({ ...person, username: e.target.value })}
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Username" />
                    </div>
                    <div className="mb-3">

                        <input
                            type="email"
                            value={person.email}
                            onChange={e => setPerson({ ...person, email: e.target.value })}
                            className="form-control"
                            id="exampleFormControlInput2"
                            placeholder="Email" />
                    </div>
                    <div className="mb-3">

                        <input
                            type="password"
                            value={person.password}
                            onChange={e => setPerson({ ...person, password: e.target.value })}
                            className="form-control"
                            id="exampleFormControlInput3"
                            placeholder="Password" />
                    </div>
                    <div className="mb-3">

                        <input
                            type="password"
                            value={person.repeatPassword}
                            onChange={e => setPerson({ ...person, repeatPassword: e.target.value })}
                            className="form-control"
                            id="exampleFormControlInput4"
                            placeholder="Password repeat" />
                    </div>
                    <div
                        className="d-grid gap-2 d-md-flex justify-content-md-end">

                        <button
                            className="btn btn-primary me-md-2"
                            type="submit">SIGN UP
                        </button>
                    </div>

                </form>

            </div>

            {submited ? <UserInformation person={person} /> : 'Please enter your informations!'}

        </div>

    )
}

export default SignUpComponent;

