import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { useEffect, useState } from 'react';
import PersonList from './components/PersonList';

/*
-person and personlist must be created with state
-create save and list person functions
-it must be submit when clicked the submit button.
-render submitted person under the list
*/
function App() {
  const [person, setPerson] = useState({});
  const [personList, setPersonList] = useState([]);

  useEffect(()=>{
    getListOfPerson();
  }, []);

  const savePerson = async (pPerson) => {
    await fetch('http://localhost:3000/people', {
        method:'POST',
        body: JSON.stringify(pPerson),
        headers: { 'Content-Type':'application/json' },
      });
  }

  const getListOfPerson = async () => {
    const response = await fetch('http://localhost:3000/people');
    const list = await response.json();

    setPersonList(list);
    console.log(list)
  }

  const submit = e => {
    e.preventDefault();
    
    savePerson(person);
    getListOfPerson();
    console.log(person.firstName)
  }
  
  return (
    <div className="App">
      <main>
        <section className="addPerson container-sm col-3">
          <div className="header container-fluid"><h2>ADD PERSON</h2></div>
          <form onSubmit={submit}>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" name="person[firstName]" value={person.firstName}
                onChange={e => setPerson({ ...person, firstName: e.target.value })}/>
            </div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Last Name" aria-label="First Name" aria-describedby="basic-addon1" name="person[lastName]"
                value={person.lastName}
                onChange={e => setPerson({ ...person, lastName: e.target.value })}/>
            </div>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" aria-label="First Name" aria-describedby="basic-addon1" name="person[email]"
                value={person.email}
                onChange={e => setPerson({ ...person, email: e.target.value })} />
            </div>
            <div className="input-group mb-3">
              <input type="current-password" className="form-control" placeholder="Password" aria-label="First Name" aria-describedby="basic-addon1" name="person[password]"
                value={person.password}
                onChange={e => setPerson({ ...person, password: e.target.value })}/>
            </div>
            <div className="input-group">
              <textarea className="form-control" placeholder="About" aria-label="About" name="person[about]"
                value={person.about}
                onChange={e => setPerson({ ...person, about: e.target.value })}></textarea>
            </div>
            <button type="submit" className=" buttonAdd btn btn-success mt-3" name="Sign Up">Add</button>
          </form>
        </section>
        <section className="personList container-fluid">
          <div className="header container-fluid"><h2>PERSON LIST</h2></div>
          <div>
          <PersonList list={personList} />
          </div>
        </section>
      </main>

    </div>
  );
}

export default App;
