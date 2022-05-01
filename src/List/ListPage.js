import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import styledComponents from 'styled-components'

import "../customCssReset.scss"
import "./list.scss";

import AddForm from './AddForm';
import List from "./List";

import db from "../firebase";
import { collection, query, onSnapshot, orderBy, where } from "firebase/firestore"; 

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

function ListPage() {
  const [todos, setTodos] = useState([]);

  const location = useLocation();
  const {uid} = location.state;

  // , where('uid', '==', 'Andy0405')
  useEffect(()=> {
    const q = query(collection(db, "todos"), where('uid', '==', uid), orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setTodos(querySnapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    });
  }, [])

  return (
    <>
      {/* <ResetStyle />
      <GlobalStyle /> */}
      <Container>
        <AddForm addData={setTodos} todos={todos} uid={uid} />
      </Container>

      <div className='bb mb-16' />

      <Container>
        <ul>
          {
              todos.map((item, index, array) => {
                return (
                  <>
                    <List key={item.id} todo={item} todos={array} deleteData={setTodos} />
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