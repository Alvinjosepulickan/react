import React from 'react'
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Typography from "@mui/material/Typography";
import MaterialButton from "@mui/material/Button";
import {useState} from 'react';
import axios from 'axios';
function App () {
  var x=31;
  var y=30;
  const [name,setName] = useState("Jack")
  const handleChange = ({name}) => {
    if(name==="Jack")
      setName("Jill")
    }
  var result='false';
  if(x>y){
    result='true';
  }
  const baseURL = "https://www.google.com";
  axios.get(' http://www.google.com')
        .then(result => 
            console.log("result.data")
        )
        .catch(error => 
            this.setState({
                error,
                isLoading: false
            })
        );
  debugger;
  var  j
  return (
    <>
    <div>
      Your Name is: {name}<br/>
      <button onClick={()=>handleChange({name})}>Change</button>
    </div>
    <h3>ReactJS:</h3>
    <img src={logo} width="120" height="120" />
    <h1 style={{ color: "green", fontFamily: "verdana" }}>
        Welcome to React
      </h1>
      {/*inline*/}
      <button className="button">Submit</button>
      {/*boostrap*/}
      <button className="btn btn-success">Submit</button>
      {/*react-booytstrap*/}
      <Button variant="">Submit</Button>
      {/*material-ui */}
      <Typography variant="h4" gutterBottom>
        Welcome to React
      </Typography>
      <MaterialButton variant="contained" color="primary">
        Submit
      </MaterialButton>

    <p>
        {" "}
        React is a JavaScript library for creating User Interfaces, open sourced
        to the world by Facebook and Instagram team in 2013.
        <br />
        React’s main goal is to make development of UI components easy and
        modular. It is intended to ease the process of building
        <br /> large applications using data that changes over time.
      </p>
      <h3>Evaluating expression:</h3>
      <h2>{x}{">"}{y} {result}</h2>
      <table>
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
      </table>
      
    </>
  );
}
export default App;
