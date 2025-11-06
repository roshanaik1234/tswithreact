import React, { useState } from 'react';

function TodoList() {
  const [todoList, setTodoList] = useState<string>("");   
  const [todo, setTodo] = useState<string[]>([]);  
   const [editIndex, setEditIndex] = useState<number | null>(null);  

  const addTodo = () => {
    if (todoList.trim() === '') return;

    if (editIndex !== null) {
      const updatedTodos = [...todo];
      updatedTodos[editIndex] = todoList;
      setTodo(updatedTodos);
      setEditIndex(null); 
    } else {
      setTodo([...todo, todoList]);
    }
setTodoList(''); 
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todo.filter((_, i) => i !== index); 
    setTodo(updatedTodos);
  };

//  const editButton=()=>{

//  }

 const editTodo = (index: number) => {
    setTodoList(todo[index]); // put selected todo text in input box
    setEditIndex(index);      // store index for updating
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="To do list"
          value={todoList}
          className='inputBox'
          onChange={(e) => setTodoList(e.target.value)}
        />
        <button onClick={addTodo} className='ButtonBox'>ADD TO LIST</button>

        {/* <ul>
          {todo.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul> */}

        <table>
          <thead>
            <th>Sr. No.</th>
            <th>Do To</th>
            <th>Action</th>
          </thead>
          <tbody>
            {todo.map((item, index) => (
              <tr>                
                <td>{index}</td>
                <td>{item}</td>
                <td>
                  <button onClick={() => deleteTodo(index)} className='deletebutton'>Delete</button>
                  <button onClick={() => editTodo(index)}>Edit</button>
                </td>
              </tr>
            // <li key={index}>
            //   {item}{" "}
            //   <button onClick={() => deleteTodo(index)}>Delete</button>
            // </li>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TodoList;

