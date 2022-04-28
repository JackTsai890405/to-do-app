import React from 'react'
import styledComponents from 'styled-components'
import { Link } from "react-router-dom";

const Color = styledComponents.div`
  background-color: #48110e;
  color: #b8f4f8;
`

const PaddingTop = styledComponents.div`
  padding-top: 16px;
`

function Button() {
  return (
    <PaddingTop>
      <button>
        <Link to="/list">點此開始</Link>
      </button>
    </PaddingTop>
  )
}

export default Button