import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
    const[email,setEmail] = useState("");
    const[pswd, setPswd] = useState("");
    const [errorEmail,setErrorEmail] = useState("Invalid Email");
    const [errorPaswd,setErrorPaswd] = useState("Invalid Paswd");
    const [rememberMe, setRememberMe] = useState(false);

    const validation = (email) => {
        const result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return result.test(String(email).toLowerCase());
    }
    const handleEmail = (e)=>{
        //    console.log(validation(e.target.value));
        setEmail(e.target.value);
        if(validation(email)){
           setErrorEmail("Valid Email");
       }
       else{
        setErrorEmail("Invalid Email");
       }
    }
    const handlePaswd = (e)=>{
        setPswd(e.target.value);
        if(pswd.length < 7){
            setErrorPaswd("Invalid Paswd")
        }
        else{
            setErrorPaswd("Valid Paswd");
        }
    }
    const navigate = useNavigate();
    
    const handleSubmit = ()=>{
        if(errorEmail==="Valid Email" && errorPaswd === "Valid Paswd"){
            alert("Successfully Login");
            navigate("/home");
        }
        else{
            alert("Failed to Login.")
        }
    }

    if(rememberMe){
        localStorage.setItem('email',email);
        localStorage.setItem('paswd',pswd);
    }
    else{
        localStorage.setItem('email',email);
        localStorage.removeItem('paswd');
    }
  return (
    <>
    <div>LoginForm</div>
    <div>
    <label htmlFor="email">Email:</label>
    <input type="email" value={email} onChange={handleEmail}/> <br/>
    <span>{errorEmail}</span><br />
    <label htmlFor="paswd">Password:</label>
    <input type="password" value={pswd} onChange={handlePaswd}/><br/>
    <span>{errorPaswd}</span><br />
    <input type="checkbox" onClick={()=>setRememberMe(!rememberMe)} />
    <label htmlFor="remember">Remember Me!</label> <br />
    <button type='submit' onClick={handleSubmit} >Login</button>
    </div>
    </>
  )
}

export default LoginForm