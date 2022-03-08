import React, { useState} from 'react'
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import TableHeadComponent from './components/TableHeadComponent';
import TableBodyComponent from './components/TableBodyComponent';
import ActionLink from './components/exercises'

function App() {
const [personList, setPersonList] = useState([]);

const addPerson = (pNewPerson) => {
  setPersonList([...personList, pNewPerson]);
} 

  return (
    <div className="App">
      <div>
        {HeaderComponent()}
        <div>
          <table>
          {TableHeadComponent()}
          {TableBodyComponent()}
          {ActionLink()}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
