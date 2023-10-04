import React from 'react'
import './Contact.css'
import { useState } from "react";
import Footer from './Footer';

const Contact=()=>{
 
  const [name, setName] = useState("");

  return (
    <>
    <h1 className="contact me"><b>CONTACT ME</b></h1>
    <h2 className="details"><b> YOUR DETAILS</b></h2>
    <div className="form">
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="ename">Email Id</label>
    <input type="text" id="ename" name="email" placeholder="Your email id"/>
  
    <input type="submit" value="Submit"></input>
  </form>
  </div>

    <div className="lastpage">
  <h1 className="lasthead"> LET'S CONNECT</h1>
  {/*<img  className="icon1"src="https://imgs.search.brave.com/L6okuc3c98Z3uxIG9fOvUOd80m3NtR-1Nh3tKbEq7s4/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/c3RhZ3JhbV9sb2dv/XzIwMjIuc3ZnLzUx/MnB4LUluc3RhZ3Jh/bV9sb2dvXzIwMjIu/c3ZnLnBuZw"height="30px" width="30px"/>
  <img  className="icon2"src="https://imgs.search.brave.com/0onedxgdJWLsAOrzVTbco23TxXLuDJGb_uBUL74bc7k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"height="30px" width="30px"/>
  <img  className="icon3"src="https://imgs.search.brave.com/jJCoPasn2serH2FU-dHJQycakDfaNS7AZ2vE_CuAUNg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzMyLzIwLzAz/LzM2MF9GXzUzMjIw/MDM1NV9vZEtOOU91/M1dCNmlIV0pURklF/bEZ0SmJUdXpKc3BZ/Ni5qcGc"height="30px" width="30px"/>
  */}
  <Footer/>
  </div>
  </>
  )
}
export default Contact