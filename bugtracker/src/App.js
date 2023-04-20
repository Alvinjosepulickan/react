import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

var priorityList=["All","high","Medium","Low"];
var categoryList=["All","Bug","Feature"];

const defaultPriority = priorityList[0];
function App() {
  return (
    <>
    <div style={{ textAlign: 'center',paddingLeft:10,border: '2px solid black'}}>
      <h3>Defect Tracker</h3>
      <a href="" style={{color:"blue" }}>Logout</a>
      <br/>
      <a href=""style={{color:"blue"}}>Add Defect</a><a href=""style={{color:"blue"}}>View Defects</a>
      <div style={{ textAlign: 'center',paddingLeft:10,border: '2px solid black'}}>
        <h2>Fillter Details</h2>
        Priority
        <Dropdown options={priorityList}  value={defaultPriority} placeholder="Select an option" />
      </div>
    </div>
    </>
  );
}

export default App;
