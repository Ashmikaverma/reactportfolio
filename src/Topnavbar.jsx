//import { NavLink } from 'react-router-dom'
import './Navbar.css'
import{Link} from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'

//import { ReactComponent as Brand } from '../../assets/icons/logo.svg'


const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <ul>
      <li>
      <Link to="/">Home </Link>
      
      </li>
      <li>
      <Link to="/contact">Contact Me </Link>
      
      </li>
      </ul>
        
        
      
    </nav>
      
<div className="Port">
  <h2>Portfolio.</h2>
</div>
   
   
   
   </>
   
    
   
  
   
 
);
  
}

export default Navbar
    