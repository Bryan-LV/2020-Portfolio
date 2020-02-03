import React, { useState } from 'react'

export default function Nav(props) {
  const [openNav ,setOpenNav] = useState(false);

  const mobileNavClasses = openNav ? 'open-nav' : '';

  const handleMobileClick = (e) => {
    setOpenNav(!openNav)
  }
  return (
    <header>
      <nav className="nav">
        <h2 className="nav__logo">{`<BA/>`}</h2>

        <ul className="desktop__nav">
          <a className="nav__link" href="/#home">Home</a>
          <a className="nav__link" href="/#work">Work</a>
          <a className="nav__link" href="/">Resume</a>
          <a className="nav__link" href="/#about">About</a>
        </ul> 
        
        <div className="mobile__nav-container" >
          <div className="hamburger" onClick={handleMobileClick}>
            <span className="hamburger__bar"></span>
            <span className="hamburger__bar bar__2"></span>
            <span className="hamburger__bar bar__3"></span>
          </div>
          <div className={`mobile__drawer ${mobileNavClasses}`}>
          <div className="hamburger hamburger__close" onClick={handleMobileClick}>
            <span className="hamburger__bar"></span>
            <span className="hamburger__bar bar__2"></span>
            <span className="hamburger__bar bar__3"></span>
          </div>
            <ul className="mobile__nav">
              <a className="nav__link" href="/#home">Home</a>
              <a className="nav__link" href="/#work">Work</a>
              <a className="nav__link" href="/">Resume</a>
              <a className="nav__link" href="/#about">About</a>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
