import React,{Component} from 'react';
import Home from './components/Home';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
class App extends Component{
  render(){
    return(
      <>
      <Router>
        <Routes>
            <Route path="/"  element={<Login/>}></Route>
            <Route path="/home"  element={<Home/>}></Route>
        </Routes>
      </Router>
      </>
    )
    }
}


export default App;