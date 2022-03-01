import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCardComponent from './Components/PersonCardComponent';
import PersonHeaderComponent from './Components/PersonHeaderComponent';
import ChildrenCardComponent from './Components/ChildrenCardComponent';
import ChildrenHeaderComponent from './Components/ChildrenHeaderComponent';
import FriendsCardComponent from './Components/FriendsCardComponent';
import FriendsHeaderComponent from './Components/FriendsHeaderComponent';

const PersonIndex = 6
function App() {

  return (
    <div className="App">
      <div className="row">

        <div className="col-3">
          {PersonHeaderComponent(PersonIndex)}
          {PersonCardComponent(PersonIndex)}
        </div>

        <div className="col-8">

          <div className="row">
            {ChildrenHeaderComponent(PersonIndex)}
            <div className="">

              <div className="col-3 wrap">
                {ChildrenCardComponent(PersonIndex)}
              </div>
            </div>
          </div>

          <div className="row">
            {FriendsHeaderComponent(PersonIndex)}
            
            <div className="col-3">
                {FriendsCardComponent(PersonIndex)}
            </div>   
              
            
          </div>

        </div>

        <div />
      </div>
    </div>
  );
}

export default App;
