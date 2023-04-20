import 'bootstrap/dist/css/bootstrap.min.css';
const Employee = (props) => {
        return (<>
                <table style={{ width: '60%' }} className='table'>
                        <thead className="thead-light">
                                <tr key={props.employees.empId}>
                                        <th>EmpID</th>
                                        <th>Name</th>
                                        <th>Designation</th>
                                </tr>
                        </thead>
                        <tbody>
                                {props.employees.map(employee => {
                                        return (<tr>
                                                <td>{employee.empId}</td>
                                                <td>{employee.name}</td>
                                                <td>{employee.designation}</td>
                                        </tr>)
                                })
                                }
                        </tbody>
                </table><br/><br/>
        </>)
}
export default Employee;
