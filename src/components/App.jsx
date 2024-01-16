import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {

  const [items, setItems] = useState([]);

  

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    
  }

  function deleteItem(id) {
    setItems(prevItem => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
   });
   
   console.log(`The id to deleted is : ${id}`);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        onAddItem = { addItem }
      />
      <div>
        <ul>
          {items.map( (todoItem, index) => (
            <TodoItem 
              key = {index}
              id = {index}
              text = {todoItem}
              onChecked = { deleteItem }
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
