import React from 'react'
import "./Header.css";
import logo from "./asset/logo.png"
function Header() {
  return (
    <React.Fragment>
        <div id="logo-header">
            <img src={logo} alt="logo" id="logo-img" />
        </div>
        <div id="header" style={{"height":"20rem"}} className="bg-primary">
            <div id="header-background">

            </div>
        </div>
    </React.Fragment>
  )
}

export default Header