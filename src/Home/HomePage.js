import React, {useEffect, useState} from "react";

import styledComponents from 'styled-components'
import { ResetStyle, GlobalStyle } from '../reset'
import "../customCssReset.scss"

import Header from './Header';
import Banner from './Banner';
import Button from './Button';

import { getAuth, onAuthStateChanged } from "firebase/auth";

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const HeaderColor = styledComponents.div`
  background-color: #48110e;
  color: #b8f4f8;
`

const BannerColor = styledComponents.div`
  background-color: #444444;
  color: #ef606c;
`

function HomePage() {
  const [uid, setUid] = useState('');

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https:firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setUid(uid)
      } else {
        // User is signed out
        // ...
        console.log('User is signed out');
      }
    });
  }, [])

  return (
    <>
      {/* <ResetStyle />
      <GlobalStyle /> */}
      <HeaderColor>
        <Container>
          <Header />
        </Container>
      </HeaderColor>

      <BannerColor>
        <Container>
          <Banner />  
        </Container>
      </BannerColor>
      
      <Container>
        <Button uid={uid} />
      </Container>
    </>
  )
}

export default HomePage