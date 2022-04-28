import React from "react";

import styledComponents from 'styled-components'
import { ResetStyle, GlobalStyle } from '../reset'
import "../customCssReset.scss"

import Header from './Header';
import Banner from './Banner';
import Button from './Button';

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

function HomePage() {
  return (
    <>
      {/* <ResetStyle />
      <GlobalStyle /> */}
      <Container>
        <Header />
        <Banner />  
        <Button />
      </Container>
    </>
  )
}

export default HomePage