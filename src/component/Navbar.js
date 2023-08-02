import React from 'react'
import PropTypes from 'prop-types'
 
export default function Navbar(props) {
  let  myStyle={
    color:"gray",
    backgroundColor:"black"
 }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className={`c1  navbar-${props.mode} bg-${props.mode}`} style={myStyle}>
    <header>{props.title}</header>
    <ul type="none" className='list-items'>
      <li>{props.home}</li>
     <li>{props.About}</li>
      <li>{props.Contect}</li>
     
      </ul>
    <div className='form-check form-switch text-light'>
      <input className='form-check-input' onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
      <label className='form-check-label' htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
    
   
  
    </div>
      </nav>

   
 
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired,
     about:PropTypes.string,
     home:PropTypes.string,
     Contect:PropTypes.string
}
Navbar.defaultProps={
  title:"set title here",
  about:"About Us here",
  Contect:"set contect here",
  home:"set home button here"
}
