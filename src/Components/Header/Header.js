import React from 'react'
import "./Header.css";
import logo from "./asset/logo.png"
import qatar_word from "./asset/qatar-word.png"

function Header() {
  return (
    <React.Fragment>
        <div id="logo-header">
            <img src={logo} alt="logo" id="logo-img" />
        </div>
        <div id="header" style={{"height":"20rem"}} className="bg-primary">
            <div id="header-background">
                <div id="header-title" className="p-5">
                    <h1 >
                        كأس
                    </h1>
                    <h1 >
                        العالم
                    </h1>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center" style={{"marginTop":"30px"}}>
            <img src={qatar_word} alt="qatar word" style={{"width":"400px"}}/>
        </div>
    </React.Fragment>
  )
}

export default Header