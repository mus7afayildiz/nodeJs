import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div classNameName="App">
      <main>
        <div id="signUpContainer">


          <h1>SIGN UP</h1>
          <div className="mb-3">

            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Username" />
          </div>
          <div className="mb-3">

            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
          </div>
          <div className="mb-3">

            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
          </div>
          <div className="mb-3">

            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Password repeat" />
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary me-md-2" type="button">SIGN UP</button>

          </div>
        </div>

        <div id="Information">
          <div>
            <ul className="list-group-started list-group-pointed">
              <h3>Your Information</h3>
              <li className="list-item">Username:</li>
              <li className="list-item">Email:</li>
              <li className="list-item">Password:</li>

            </ul>
          </div>
        </div>


      </main>

    </div>
  );
}

export default App;
