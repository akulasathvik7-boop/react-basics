import React from 'react'
import "./register.css"
const Register = () => {
  return (
    <>
      <div className="container">
    <h1 className="login-title">Register</h1>
    <label for="">Username:</label><br />
      <input type="text" className="username" placeholder="Enter the username" /> <br />
      <label for="">Email:</label><br />
      <input type="password" className="username" placeholder="Enter the email" /> <br />
      <label for="">Password:</label><br />
      <input type="password" className="username" placeholder="Enter the password " /><br />
      <label for="">Mobile Number:</label><br />
      <input type="text" className="username" placeholder="Enter the mobile number" /><br />
      <div className="forget-pass">
        
        <a className="account" href="">Do you have an account?</a>
        <a href="">Login</a>
        
      </div>
     <button className="submit">Submit</button>

  
  </div>
    
    </>
  )
}

export default Register