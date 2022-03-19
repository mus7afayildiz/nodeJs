import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
  
  return (
    <Router>
      <nav className="headerSection">
            <div className="headerSelection">
                <div className="header"><Link to="/">HOME</Link></div>
                <div className="header"><Link to="/about">ABOUT</Link></div>
                <div className="header"><Link to="/contact">CONTACT</Link></div>
            </div>
            <div>
            </div>
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </Router>
  );
}

export default App;
