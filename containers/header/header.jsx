import React, { Component } from 'react'
import "./header.css"
import { Link } from 'react-router-dom'


export default class header extends Component {
  render() {
   const {isDisplayed} =this.props
    return (
      <div className="header">
    <div className="mobileWrapper">
    <h2 className="header__logo">Logo</h2>
  <div className="header__hanburger" onClick={()=>this.props.handleChecked()}>
<span></span>
  </div>
    </div>
  <div className={isDisplayed ? "header__navbar__displayed" : "header__navbar"} >
  <ul className ="navbar__list" >
  <li className="list__item"><Link to='/'>product</Link></li>
  <li className="list__item"><Link to='/basket'>basket</Link></li>
  <li className="list__item"><Link to='/logIn'>log in</Link></li>
  <li className="list__item" log="Sign Up"><Link to='/signUp'>sign up</Link></li>
  </ul>
  </div>
  </div>
    )
  }
}

