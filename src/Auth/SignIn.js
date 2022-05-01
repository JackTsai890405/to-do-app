import React, { useEffect, useState } from 'react';
import { Container, Input, Button, SpaceButton } from "./AuthComponents.js"
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { useNavigate } from 'react-router-dom'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  let navigate = useNavigate();

  const signinAccount = (event) => {
    event.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        const uid = user.uid
        console.log(uid);

        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  const signoutAccount = (event) => {
    event.preventDefault();

    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.');
    }).catch((error) => {
      // An error happened.
      console.log('An error happened.');
    });
  }  

  const goHome = (event) => {
    event.preventDefault();
    navigate('/');
  }

  return (
    <Container>
        <h1>登入</h1>
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

            <SpaceButton type="submit" value="登入" onClick={signinAccount}>登入</SpaceButton>
            <SpaceButton type="submit" value="登出" onClick={signoutAccount}>登出</SpaceButton>
            <Button type="submit" value="首頁" onClick={goHome}>首頁</Button>
        </form>
    </Container>
  )
}

export default SignIn