import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CardComponent from './components/CardComponent';

//Card component olusturulur ve export edilir
function App() {
  return ( 
    <div>
      <div>{HeaderComponent}</div>
      <div>{CardComponent}</div>
      <div>{FooterComponent}</div>
    </div>
  )
}

export default App;
