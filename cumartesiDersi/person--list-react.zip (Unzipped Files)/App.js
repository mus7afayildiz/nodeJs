import './App.css';

import PersonList from './components/./person/PersonList';
import datalist from './data.json'


function App() {
  return (
    <div className="App">
        <PersonList list={datalist}/>
    </div>
  );
}

export default App;
