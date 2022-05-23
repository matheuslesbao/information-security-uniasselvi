import React from 'react'

import './Header.scss'
import { VscListFlat } from 'react-icons/vsc'

const Header = () => {
  return (
    <>
      <header className="header">
        <nav id="navigation">
          <VscListFlat className="icon-nav" />
          <ul className="top-wrapper">
            <li>
              <a href="#">Inicio</a>
            </li>
          </ul>
        </nav>
        <h1>Segurança em Tecnologia da Informação</h1>
      </header>
    </>
  )
}

export default Header
