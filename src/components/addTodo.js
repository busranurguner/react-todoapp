import React,{useState} from 'react'

function addTodoList(setList,text){
    setList((list => [...list,text]));
}
function AddTodo(props) {
    const {setList} = props;
    const [text,setText] = useState();
    return (
        <div className="todoAdd">
            <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Write do" />
            <button onClick = {() => {addTodoList(setList,text)}}>Add</button>
        </div>
    )
}

export default AddTodo