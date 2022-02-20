import logo from './logo.svg';
import './App.css';
import './function.js';
import FullScreen from './function.js';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <button id="button">Full Screen Button</button>
        <img id="target" src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React;
        </a>
      </header>
    </div>)
    
}
export default App;

FullScreen()