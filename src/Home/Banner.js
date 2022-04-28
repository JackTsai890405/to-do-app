import React from 'react'
import styledComponents from 'styled-components'

const H3 = styledComponents.h3`
  font-size: 30px;
  line-height: 1.25;
  padding: 48px;
`

function Banner() {
  return (
      <H3>歡迎光臨我的頁面</H3>
  )
}

export default Banner