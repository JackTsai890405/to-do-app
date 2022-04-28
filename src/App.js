import React from "react";

import styledComponents from 'styled-components'
import { ResetStyle, GlobalStyle } from './reset'

import "./customCssReset.scss";

import HomePage from './Home/HomePage'

function App() {
  return (
      <>
        {/* <ResetStyle />
        <GlobalStyle />  */}
        <HomePage />
      </>
 )
}

export default App