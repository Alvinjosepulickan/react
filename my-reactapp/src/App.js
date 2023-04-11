import React from 'react'
import logo from './logo.svg';
function App () {
  var x=31;
  var y=30;
  var result='false';
  if(x>y){
    result='true';
  }
  var employees = [
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ];
  return (
    <>
    <h3>ReactJS:</h3>
    <img src={logo} width="120" height="120" />
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
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </>
  );
}
export default App;
