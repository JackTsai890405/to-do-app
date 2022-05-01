import React from 'react'
import styledComponents from 'styled-components'
import { Link } from "react-router-dom";

const PaddingTop = styledComponents.div`
  padding-top: 16px;
`

function Button({uid}) {

  return (
    <PaddingTop>
      {
        uid && 
        <button>
          <Link to="/list" state={{ uid: uid }}>點此開始</Link>
        </button>
      }

      <button>
        <Link to="/signin" state={{ uid: uid }}>會員登入</Link>
      </button>

      <button>
        <Link to="/signup">會員註冊</Link>
      </button>
    </PaddingTop>
  )
}

export default Button