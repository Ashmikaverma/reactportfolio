//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React,{Component} from 'react'
//import './App.css'
import './Navbar.css'
/*import Image from './Image'
import Header from './Header'
import Paragraph from './Paragraph'
import Typewriter from './Typewriter'
import './Typewriter.css'
import About from './pages/About'
import './pages/Projects.css'*/
import Contact from './Contact'
import Home from './Home'
//import Home from'./Home'
//import { NavLink } from 'react-router-dom'
//import { Link } from 'react-router-dom';
import Topnavbar from './Topnavbar';
import {Routes,Route}from 'react-router-dom';




//import Projects from './pages/Projects'

//import Pagemain from'./pages/Pagemain'
//import About from './pages/About'






  function App(){
  

    
   
  
   
 


/* function Projects(){
  return(
      <>
      <div className="head">
      <h1>PROJECTS</h1>
      <p className="a"> Here are some of my Projects</p>
      </div>
      <br></br><br></br>
      <div className="whole">
      <div className="Project">
          <div className="Crd1">
              <img  className="project1" src="https://imgs.search.brave.com/OcidXZL_2wqhfm1WYc5YmeW2T9xiTqEBTuXssmy2NuU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIxNzE5ODk1L2Mv/MTU2NC8xNTY0LzU0/MS8yMDYvaWwvZDY2/NTFiLzQxMDEzMzQ5/MDkvaWxfNjAweDYw/MC40MTAxMzM0OTA5/X2Y1bzMuanBn" alt="project" height="200px" width="200px"/>
              <p className="cardpara">This is a furniture's static webpage using html css</p>
              <a href="https://github.com/Ashmikaverma/staticwepage1">
              <button className="btn">
        <h3><b>LINK</b></h3>
              </button></a>
            
          </div>
          <div className="crd2">
          <img  className="project2" src="https://imgs.search.brave.com/-41jHSeEEXCm6DCl8WgKkamGgofB92G96fk8tOIdj-g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/NDYzNTk1OTY1LzUx/NjQwNWVmLWZkOWQt/NDZhNi04YTY2LTUx/OTk5OTNjMTQxYg.jpeg "height="200px" width="200px"/>
              <p className="cardpara">This is a basic Javascript Project named DRUMKIT</p>
              <a href="https://github.com/Ashmikaverma/drumkitjs">
              <button className="btn">
        <h3><b>LINK</b></h3>
              </button></a>
            
          </div>
            </div>  
            </div>
      </>
  )
}*/


  return (
   <>
   <Topnavbar/>
   <Routes>
    <Route path="/" element={<Home/>} exact />
    
    <Route path="/contact" element={<Contact/>} />
    
    </Routes>
   
   
   </>
    
  );
}

export default App;