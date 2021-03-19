import React from 'react'

const deleted = (setList,todoList,index) => {
    todoList.splice(index,1);
    setList(todoList => [...todoList]);
}

export default function Lists(props) {
    const [list, setList] = React.useState(props.List);
    return (
        <div className="containerList">
            <ul className ="theList">
                {
                    props.List.map((list,index) => {
                        return (
                            <li key={index}>{list}
                                <button onClick = {() => {deleted(setList,props.List,index)}}> Delete</button>
                            </li>
                        )                  
                   })
                }
            </ul>
        </div>

    )
}