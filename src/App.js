import React,{useState,useEffect} from 'react'
import "./App.css";
import Title from "./components/title";
import AddTodo from "./components/addTodo";
import Lists from './components/Lists'

function App() {

  const [List,setList] = useState([]);
  
  useEffect(() => {
    console.log(List);
  },[List])
  
  return (
    <div className="App">
      <div className="container">
        <div className="todos">
          <div className="title">
            <Title title="Todo App" />
            <AddTodo setList={setList} />
            <Lists List={List} setList={setList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;