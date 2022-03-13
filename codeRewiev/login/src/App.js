import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({});
  const [submited, setSubmited] = useState(false);

  const runValidations = ()=>{
    if(user.password !== user.passwordrepeat){
      return false;
    }
    if(user.username.trim() === ''){
      return false;
    }

    return true;
  }

  const submit = e => {
    e.preventDefault();
    // validations
    if(runValidations()){ // yup
      setSubmited(!submited);
    }   
  }


  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          placeholder='Username'
          name="user[username]"
          value={user.username}
          onChange={e => setUser({ ...user, username: e.target.value })}
        />
        <br/>
        <input
          placeholder='Email'
          name="user[email]"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
        />
        <br/>
        <input
          placeholder='Password'
          type="password"
          name="user[password]"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
        />    
        <br/>
        <input
          placeholder='Repeat Password'
          type="password"
          name="user[passwordrepeat]"
          value={user.passwordrepeat}
          onChange={e => setUser({ ...user, passwordrepeat: e.target.value })}
        />  
        <br/>

        <button>submit</button>
      </form> 

      {
        submited ? <UserInfo user={user} /> : 'Please enter proper info!'
      }
    </div>
  );
}

export default App;



function UserInfo(props){
  const user = props.user;
  return (
    <section>
            <h1>Your Information</h1>
            <ul>
              <li>Username: {user.username}</li>
              <li>Email: {user.email}</li>
              <li>Password: {user.password}</li>
              <li>Password Repeat: {user.passwordrepeat}</li>
            </ul>
          </section>
  )
}