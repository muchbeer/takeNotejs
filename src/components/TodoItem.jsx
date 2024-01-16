import React from "react";

function TodoItem(props) {

    
    //this will be called when a click is detected and function related to onChecked will be passed
        // using the id which is passed.
    return <div onClick={ () => {
        props.onChecked(props.id) 
            } 
        }>
        <li>{props.text}</li>
    </div>
    
}

export default TodoItem;