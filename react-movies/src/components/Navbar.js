
import {NavLink} from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "red" : "black")} to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "red" : "black")} to="/details"> Detalle </NavLink>
        </li>
      </ul>
    </div>
  );
}




