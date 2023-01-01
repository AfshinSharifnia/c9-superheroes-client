import { useState } from "react";
import "./App.css";

function App() {

const [count2, setCount2]= useState(0)


  const [employeeName, SetEmployeeName] = useState("Bob");

  function createNewEmployee() {

    SetEmployeeName("Joe")
  }




  return (

    <div className="App">

      <header className="App-header">

        {employeeName} added
<br/>
<br/>
        <button onClick={createNewEmployee} className="App-header">
          Create New Employee
        </button>

        <select>
          <option> Create Employee</option>
          <option> UPdate Employee</option>
          <option> Read Employee</option>
          <option> Delete Employee</option>
        </select>

      </header>
    </div>
  );
}

export default App;
