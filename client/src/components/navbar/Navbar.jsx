import { Link, NavLink } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  return (
    <header className='navbar__wrapper'>
      <Link to='/' className="logo">
        <img src="https://i.imgur.com/J1tFv4l.png" alt="" className='navbar__logoImg' />
        <h3 className='navbar__logoText'>Booking Maze</h3>
      </Link>

      <ul className="menus">
        <li className='menuItem'>
          <NavLink to='/' className='menuLink'>Home</NavLink>
        </li>
        <li className='menuItem'>
          <NavLink to='/hotels' className='menuLink'>Hotels</NavLink>
        </li>
        <li className='menuItem'>
          <button className='menuLink btn'>Logout</button>
        </li>
      </ul>
    </header>
  )
}

export default Navbar