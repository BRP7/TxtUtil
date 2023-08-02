import { useState } from "react"
import React from 'react'




export default function Textform(props) {
    const[text,setText]=useState('enter text here:');
    //setText("new Text");
    const handleUP=()=>{
     //setText("you have")
     let n=text.toUpperCase();
     setText(n)
    }
    const lower=()=>{
        //setText("you have")
        let n=text.toLowerCase();
        setText(n)
       }
       const cp=()=>{
        //setText("you have")
        let n=text.split(" ");
        n=n.join(" ");
        setText(n)
       }
   
    const handleonchange=(event)=>{
        setText(event.target.value);

    }
    
    return (
    <div  className="textArea1">
     <div>
    <h2>{props.heading}</h2>
    <textarea rows="5" value={text} onChange={handleonchange} ></textarea>                    
    </div>
     <div>
    <button onClick={handleUP} >Upper Case</button>
    <button onClick={lower}>Lower Case</button>
    <button onClick={cp}>Capital Case</button>
   
    </div> 
    <div>
        <h1>Your text summery:</h1>
        <p>{text.split(" ").length} words and {text.length} Character</p>
        <p>{0.008*text.split(" ").length} Minitus to read</p>
        <h4>Preview</h4>
        <p>{text}</p>

    </div>
    </div>
    
  )
}
