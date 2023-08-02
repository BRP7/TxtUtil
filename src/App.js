
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
  

function App() {
  const[mode,setMode]=useState('dark');
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      }
    else{
      setMode('light');
  }
}
  
  //const[mode,setMode]=useState('dark');//whether dark mode is enable or not!
  return (
 <>
   
    <Navbar title="Textutils" About="About" home="Home" Contect="Contect" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <Textform heading="Enter Your Text:"/>
    </div>
    <About/>

 </>
 
  );
}

export default App;
