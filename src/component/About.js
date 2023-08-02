import React from 'react';
import { useState } from 'react';

export default function About() {
  const [myStyle,setmyStyle]=useState({
    color:"gray",
    backgroundColor:"black"
  })
  const[btnText,setbtnText]=useState("Enable Light mode");

  const toggleStyle=()=>{
    if(myStyle.color=='gray'){
      setmyStyle({
        color:"Black",
        backgroundColor:"gray"
      })
      setbtnText("Enable Dark mode")
    }
    else{
      setmyStyle({
        color:"gray",
        backgroundColor:"black",
        
      })
      setbtnText("Enable Light mode")
    }
  }
//  let  myStyle={
//     color:"gray",
//     backgroundColor:"black"
   
//  }

  return (
    <div className='container' style={myStyle}>
      <h2>About Us</h2>
      <div className='container' style={myStyle}>
     <details><summary>About Us 1</summary>
      <div className='d1' style={myStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquam ea earum! Repellendus aspernatur esse enim, 
      nulla consectetur facilis cupiditate illum qui sapiente aperiam soluta exercitationem autem ipsa itaque eveniet!</div><br/>
      </details>
      <details>
      <summary>About Us 2</summary>
      <div className='d1' style={myStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis laudantium non tenetur maxime, 
      impedit autem ducimus consequatur deserunt ad est commodi quisquam, sit accusantium sed quidem? Temporibus consequuntur aspernatur id.</div><br/>
      </details>
      <details>
      <summary>About Us 3</summary>
      <div className='d1' style={myStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem voluptate veritatis quam libero perspiciatis, 
      expedita velit dolore quisquam corrupti eius rem soluta quod accusantium? Quasi, reprehenderit modi. Laboriosam, voluptatum suscipit?</div>
      </details>
      </div>
      <button type='button' onClick={toggleStyle} className='btn btn-primary' className='b123' style={myStyle}>{btnText}</button>
    </div>
  )
}
