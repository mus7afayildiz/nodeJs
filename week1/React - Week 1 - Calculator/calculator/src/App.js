import './App.css';
import Bolme from './islemler/bolme';
import Carpma from './islemler/carpma';
import Cikarma from './islemler/cikarma';
import Toplama from './islemler/toplama';
//Tum islemler import edilerek kullanilir

console.log("Bolme Sonucu :" + Bolme(6, 2))
console.log("Carpma Sonucu:" + Carpma(6, 2))
console.log("Cikarma Sonucu :" + Cikarma(6, 2))
console.log("Toplama Sonucu:" + Toplama(6, 2))

function App() {
  return (
    <div className="App">
      <ul>
        <li>{"Bolme : " + Bolme(6, 2)}</li>
        <li>{"Carpma : " + Carpma(6, 2)}</li>
        <li>{"Cikarma : " + Cikarma(6, 2)}</li>
        <li>{"Toplama : " + Toplama(6, 2)}</li>
      </ul>
    </div>
  );
}

export default App;
