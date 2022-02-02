import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


function Sign() {
    let history = useHistory();
    const [register,setregister]=useState({
        username:" ",
        email:" ",
        phonenumber:" ",
        password:" ",
    });
  const  HandleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setregister({...register,[value]:[name]});

  }
  const Handlesumbit=(e)=>{
      e.preventDefault();
  }
  const Handlebutton=()=>{
    history.push("/login");  
  }

  return (
  <div>
    <form action=" " onSubmit={Handlesumbit}>
      <div><h1>Registration</h1> </div>  
      <div>
      <label>Username</label>
      <input type="text" name="username" value={register.username}  onChange={HandleInput}/>
      </div>
      <div>
      <label>Email</label>
      <input type="text" name="email" value={register.email}  onChange={HandleInput}/>
      </div>
      <div>
      <label>Phonenumber</label>
      <input type="number" name="phonenumber" value={register.phonenumber}   onChange={HandleInput}/>
      </div>
      <div>
      <label>password</label>
      <input type="password" name="password" value={register.password}  onChange={HandleInput}/>
      </div>
      <button type="submit"  onClick={Handlebutton}>Registeration</button> 

      </form>
  </div>);
  
}

export default Sign;
