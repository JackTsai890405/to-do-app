import React from 'react'
import styledComponents from 'styled-components'
import "./home.scss";

const Color = styledComponents.div`
  background-color: #48110e;
  color: #b8f4f8;
`

const H1 = styledComponents.h1`
  font-size: 45px;
  line-height: 1.25;
  padding: 32px;
`

function Header() {
  return (
    <Color>
      <H1>練習專案</H1>
    </Color>
  )
}

export default Header