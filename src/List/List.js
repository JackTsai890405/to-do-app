import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import db from '../firebase';
import { doc, deleteDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import "./list.scss";

function List({todo, todos, deleteData}) {
  function deleteTodo(event) {
    event.preventDefault();
    // 沒有資料庫時的操作方法
    // let filterData = todos.filter(item => (
    //   item.id !== todo.id
    // ))
    // deleteData(filterData)
    // 有資料庫時的操作方法
    const todoRef = doc(db, "todos", todo.id);
    deleteDoc(todoRef)
      .then(() => {
        console.log(`刪除成功 : ${todo.id} & ${todo.todo}`);
      })
  }


  return (
    <>
        <li 
          key={todo.id}
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