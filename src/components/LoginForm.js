import { useRef, useState } from "react";
import classes from "./LoginForm.module.css"
import { useContext } from "react";
import LoginContext from "../store/token-context";
import { useNavigate } from "react-router";
import CommonHeader from "./CommonHeader";




const LoginForm=()=>{
    const emailInputRef=useRef();
  const passwordInputRef=useRef();
  const [isLoading,setIsLoading]=useState(false)
  const history=useNavigate();
  const authCtx=useContext(LoginContext)
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    
    const enteredEmail=emailInputRef.current.value
    const enteredPassword=passwordInputRef.current.value
    console.log(authCtx)

    setIsLoading(true)
    let url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAc1hoElOXf55Mb8l-jZ0GVGHn5SWBcndc'
    
    fetch(url,{
      method:'POST',
      body: JSON.stringify({
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken: true,
      }),
      headers :{
        'Content-Type' : 'application/json'
      }
    }).then(res =>{
      setIsLoading(false)
      if(res.ok){
        return res.json();
      }
      else{
        return res.json().then(data=> {
          let errorMessage='Authetication Failed'
           throw new Error(errorMessage);
        });
      }
    }).then(data =>{
        console.log(data)
      authCtx.login(data.idToken)
      history('../store')
    })
    .catch((err)=>{
      alert(err.message)
    })
    console.log(enteredEmail)
    authCtx.addEmail(enteredEmail);
   
    

  }

    return ( <>
        <CommonHeader/>
        <section className={classes.auth}>
          <h1>Login</h1>
          <form onSubmit={handleFormSubmit}>
            <div className={classes.control}>
              <label htmlFor='email'>Your Email</label>
              <input type='email' id='email' required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Your Password</label>
              <input
                type='password'
                id='password'
                required
                ref={passwordInputRef}
              />
            </div>
            <div className={classes.actions}>
              {!isLoading && <button type='submit'>
                Log In
              </button> }
              {isLoading && <p style={{color:'white'}}>Sending request...</p>}
              
            </div>
          </form>
        </section>
        </>
      );
}

export default LoginForm