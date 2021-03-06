import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/HeaderComponent';
import CardComponent from './components/CardComponent';
import FooterComponent from './components/FooterComponent';

//tag in icerisine render edilecek elemanlar yazilir ve id si root olan div in icerisine render edilir.
ReactDOM.render(
  <React.StrictMode>
    <App/>
    <HeaderComponent/>
    <CardComponent/>
    <FooterComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
