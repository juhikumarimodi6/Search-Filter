import React from "react"
import './App.css';
import JSON from "./MOCK_DATA.json"

function App() {

  const [name, setName] = React.useState("")

  function enteredName(event) {
    setName(() => {
      return event.target.value;
    })
  }
  return (
    <div className="App">
      <input type="text" id="mySearch" placeholder="Search..." className="inputbox" onChange={enteredName}></input>
        {JSON.filter(user => user.first_name.toLowerCase().includes(name.toLowerCase())).map(user => {
          return <li className="list" key = {user.id}>{user.first_name}</li>
        })}
    </div>
  );
}

export default App;
