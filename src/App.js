
import './App.css';
import {Routes,Route,Link}from "react-router-dom"
import Sign from './components/Sign';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
     <Routes>
       < Route exact path="/" component={Sign}/>
       <Route exact path ="/login" component={()=><Login authroized={false}/>}/>
       <Route exact path ="/home" component={Home}/>
       <div>
       <Link to="/" >sign</Link>
       <Link to="/login">Login</Link>
       <link to ="/home">Home</link>
       </div>
     </Routes>
    </div>
  );
}

export default App;
