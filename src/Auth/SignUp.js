import React, { useState } from 'react';
import { Container, Input, Button, SpaceButton } from "./AuthComponents.js"

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from 'react-router-dom'

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    let navigate = useNavigate();

    const signupAccount = (event) => {
        event.preventDefault();

        const auth = getAuth();
        console.log('i am here.');
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(`${user}, 使用已註冊`);
            navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage);            
        });
    }

    const goHome = (event) => {
        event.preventDefault();
        navigate('/');
    }

    return (
        <Container>
            <h1>註冊</h1>
            {/* form : 預設 - GET */}
            <form method="get"> 
                <label htmlFor="email">郵件   </label>
                <Input type="email" 
                        id="email" 
                        name="email"
                        placeholder="todo@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                />

                <br />

                <label htmlFor="pwd">密碼   </label>
                <Input type="password" 
                        id="pwd" 
                        name="pwd" 
                        minlength="8" 
                        maxlength="12" 
                        required 
                        autocomplete="off"
                        value={password}
                        onChange={e => setPassword(e.target.value)}                         
                />

                <br />

                <SpaceButton type="submit" value="註冊" onClick={signupAccount}>註冊</SpaceButton>
                <Button type="submit" value="首頁" onClick={goHome}>首頁</Button>
            </form>
        </Container>
    )
}

export default SignUp