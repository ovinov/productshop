import React from "react"
import "./auth.css"

const Auth =({log})=>(
  <div className="auth">
  <h1 className="auth__brand">{log}</h1>
  <form className="auth__form">
  <input type="text" placeholder="MAIL" className="form__mail"/>
  <input type="password" placeholder="PASSWORD" className="form__password" />
  <input type="submit" value="sand"  className="form__btn"/>
</form>
  </div>
)

export default Auth
