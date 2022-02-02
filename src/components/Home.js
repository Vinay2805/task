
import {Redirect}from "react-router-dom"
function Home(authroized) {
    if(!authroized){
        return <Redirect t0 ='/login'/>
    }
  return (
  <div>
   <h3>This is Home page </h3> 
  </div>);
}

export default Home;
