import React from 'react'
import styledComponents from 'styled-components'
import "./home.scss";

const H1 = styledComponents.h1`
  font-size: 45px;
  line-height: 1.25;
  padding: 32px;
`

function Header() {
  return (
      <H1>練習專案</H1>
  )
}

export default Header