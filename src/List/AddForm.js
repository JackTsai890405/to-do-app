import React, { useState } from 'react';

import styledComponents from 'styled-components'
import { ResetStyle, GlobalStyle } from '../reset'
import "../customCssReset.scss"
import "./list.scss";


import db from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

function AddForm() {
    const [input,  setInput] = useState('');

    const addTodo = async(event) => {
        event.preventDefault();

        try {
        await addDoc(collection(db, "todos"), {
            todo: input,
            timestamp: serverTimestamp()
        })
        } catch (error) {
        console.log("Error adding document", e);
        }

        setInput('');
    }
    return (
        <form className='p-32 bb mb-16'>
            <input 
                className='mr-16'
                placeholder='' 
                value={input} 
                onChange={e => setInput(e.target.value)}
            />
            <button 
                disabled={!input} 
                type='submit'
                onClick={addTodo}
            >
                新增紀錄
            </button>
        </form>
    )
}

export default AddForm