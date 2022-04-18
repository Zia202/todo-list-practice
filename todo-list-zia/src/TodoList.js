import React from "react";
import './App.css';
const TodoList=(props)=>{
    return(
    <>
 
    <button className="del-btn" 
       onClick={()=>{props.onSelect(props.id);}}>
       &#10006;</button>
        <li className="list">{props.text}</li>
    </>
)
}

export default TodoList;