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

const HeaderColor = styledComponents.div`
  background-color: #48110e;
  color: #b8f4f8;
`

const BannerColor = styledComponents.div`
  background-color: #444444;
  color: #ef606c;
`

function HomePage() {
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
        <Button />
      </Container>
    </>
  )
}

export default HomePage