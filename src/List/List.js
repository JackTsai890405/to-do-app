import React from 'react'
import { Link } from "react-router-dom";
import db from '../firebase';
import { doc, deleteDoc } from "firebase/firestore";
import "./list.scss";

function List({todo, deleteData}) {

  function deleteTodo(event) {
    event.preventDefault();

    const todoRef = doc(db, "todos", todo.id);
    deleteDoc(todoRef)
      .then(() => {
        console.log(`刪除成功 : ${todo.id} & ${todo.todo}`);
      })

    deleteData(function (prev) {
      return prev.filter(item => item.id !== todo.id);
    })
  }

  return (
    <>
        <li 
          className="d-flex mb-16"
        >
          {todo.todo}
          <button
            className='ml-16'
            onClick={deleteTodo}
          >
            刪除
          </button>           
        </li>
    </>
  )
}

export default List