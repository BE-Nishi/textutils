import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import React, { useState } from 'react'
import Alert from './Component/Alert';
import About from './Component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  
  const darkMode = () =>{
    
  if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#0d0d0d';
      showAlert("Dark mode is set", "success")
    }
   else{
     setMode('light')
     document.body.style.backgroundColor = 'white'

     showAlert("Light mode is set", "success")
      }
  }
  const secondaryMode = () => {
    if(mode === "light"){
      setMode('secondary');
      document.body.style.backgroundColor = '#a6a6a6'
      showAlert("Gray mode is set", "success")
    }
     else{
       setMode('light')
       document.body.style.backgroundColor = 'white'
       showAlert("Light mode is set", "success")
           }
  }
  const greenMode = () => {
    if(mode === "light"){
      setMode('success');
      document.body.style.backgroundColor = '#ccffdd'
      showAlert("Green mode is set", "success")
    }
     else{
       setMode('light')
       document.body.style.backgroundColor = 'white'
       showAlert("Light mode is set", "success")
      }
  }
  const infoMode = () => {
    if(mode === "light"){
      setMode('info');
      document.body.style.backgroundColor = '#ccffff'
      showAlert("Teal mode is set", "success")
    }
     else{
       setMode('light')
       document.body.style.backgroundColor = 'white'
       showAlert("Light mode is set", "success")
     }
  }
  const redMode = () => {
    if(mode === "light"){
      setMode('danger');
      document.body.style.backgroundColor = '#ff6666'
      showAlert("Red mode is set", "success")
    }
     else{
       setMode('light')
       document.body.style.backgroundColor = 'white'
       showAlert("Light mode is set", "success")
     }
  }
  const yelloMode = () => {
    if(mode === "light"){
      setMode('warning');
      document.body.style.backgroundColor = '#ffe680'
      showAlert("Yellow mode is set", "success")
    }
     else{
       setMode('light')
       document.body.style.backgroundColor = 'white'
       showAlert("Light mode is set", "success")
     }
  }
 
  return (
    
   <>
 <Router>
 <Navbar title="TextUtils" mode={mode}  darkmode={darkMode} secondarymode={secondaryMode} greenmode={greenMode} infomode={infoMode} redmode={redMode} yellowmode={yelloMode}/>
   
   
   <Alert alert={alert}/>     
            <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <Textform mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
 </Router>
   
           
          
     
   </>
  );
}

export default App;
