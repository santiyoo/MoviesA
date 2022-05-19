// const Navbar = () => {
//     return ( 
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">            
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#.">Navbar</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                 <ul className="navbar-nav">
//                     <li className="nav-item">
//                     <a className="nav-link" aria-current="page" href="index.html">Home</a>
//                     </li>
//                     <li className="nav-item">
//                     <a className="nav-link" href="#.html">Features</a>
//                     </li>
//                     <li className="nav-item">
//                     <a className="nav-link" href="#.">Pricing</a>
//                     </li>
//                 </ul>
//                 </div>
//             </div>
//         </nav>
//         </>
//     );
// }
 
// export default Navbar;

import {NavLink} from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "red" : "black")}
            to="/"
          >
            {" "}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "red" : "black")}
            to="/details"
          >
            {" "}
            Detalle
          </NavLink>
        </li>
      </ul>
    </div>
  );
}


