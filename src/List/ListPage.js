import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import styledComponents from 'styled-components'
import { ResetStyle, GlobalStyle } from '../reset'
import "../customCssReset.scss"
import "./list.scss";

import AddForm from './AddForm';
import List from "./List";

import db from "../firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore"; 

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

function ListPage(props) {
  const [todos, setTodos] = useState([]);


  useEffect(()=> {
    const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setTodos(querySnapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    });
  }, [])

  return (
    <>
      {/* <ResetStyle />
      <GlobalStyle /> */}
      <Container>
        <AddForm addData={setTodos} todos={todos} />
      </Container>

      <div className='bb mb-16' />

      <Container>
        <ul>
          {
              todos.map((item, index, array) => {
                return (
                  <>
                    <List todo={item} todos={array} deleteData={setTodos} />
                  </>
                )
              })
          }
        </ul>

        <button>
          <Link to="/home">返回首頁</Link>
        </button>
      </Container>

    </>
  )
}

export default ListPage