import { useState } from "react";

function HelloWorld({firstName, lastName, age}){
    return(
      <h1>Hello {firstName} {lastName}</h1>
    )
  }
  
  function App() {
  
    const [personList, setPersonList] = useState([
      {
        firstName: "Hi", 
        lastName: "Coders!"
      },
      {
        firstName: "Suat", 
        lastName: "Ogul"
      },
      {
        firstName: "Umut", 
        lastName: "Güngör",
        age: 32
      }
    ]);
  
  
    return (
      <div className="App container">
        { personList.map((person, index)=>
          <HelloWorld firstName={person.firstName} 
                      lastName={person.lastName}
                      key={index}
                      />
        )
          
        }
      </div>
    );
  }