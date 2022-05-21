import React from 'react'

import './Header.scss'
/* import { iconMenu } from '../../assets/Buttons/MenuIcon.svg' */

const Header = () => {
  return (
    <>
      <header className='header'>
        <nav id="navigation">
          <div className="wrapper">
            <div className="menu">
              {/* <img src={iconMenu} alt="" /> */}
              </div>
                <ul>
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Unidade 1</a></li>
                  <li><a href="#">Unidade 2</a></li>
                </ul>         
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header