import React from 'react';
import  { useState } from 'react';
import { useHistory } from "react-router-dom";
import {Redirect}from "react-router-dom"

const Login = (authroized) => {
    let history = useHistory();
    if(!authroized){
        return <Redirect to ="/"   />;
    }
    
    const[details,setdetails]=useState({
        email:'',
        password:'',
    })

    const Handleinputs=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setdetails({...details,[name]:[value]})
    }
    const Handlesubmits=(e)=>{
        e.preventDefault();
    }
   const Submitaction=()=>{
    history.push("/home");
   }
  return (<div>
       <form action='' onSubmit={Handlesubmits}>
       <div> <h1>Login Page</h1> </div>
       <div>
       <label>email</label> 
       <input type="text" name='email' value={details.email} onChange={Handleinputs}></input>
        </div>
       <div>
       <label>password</label> 
       <input type="password" name='password' value={details.password} onChange={Handleinputs}></input>
        </div>
      </form>
      <button type='submit ' onClick={Submitaction} >login</button>
  </div>);
};

export default Login;
