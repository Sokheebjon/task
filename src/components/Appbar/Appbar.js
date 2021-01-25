import React from 'react';
import {Link} from "react-router-dom";
import './appbar.css'
import user from "../../assets/user.svg"
import logout from "../../assets/logout.svg"
import bell from "../../assets/bell.svg"
import menuButton from "../../assets/menu-button.svg"
import "../../App.css";

export default function Appbar(props) {
   return (
      <div className="container-fluid mt-4 mb-2">
         <nav className="navbar">
            <button onClick={props.toggleButton} className="menuButton d-block  d-lg-none btn">
               <img width="24" src={menuButton} alt=""/>
            </button>
            <ul className="navbar-nav d-flex flex-row ml-auto">
               <li className="nav-item dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdown"
                          data-toggle="dropdown">
                    <span className="mr-2">Dilshod Mirsoatov</span><div className="img-responsive"><img src={user} alt=""/></div>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown">
                     <li className="dropdown-item">
                        <img className="mr-2" src={user} alt=""/>
                        <Link className="dropdown-link" to="/">Shaxsiy kabinet</Link>
                     </li>
                     <li className="dropdown-item">
                        <img className="mr-2" width={18} src={logout} alt=""/>
                        <Link className="dropdown-link" to="/">Tizimdan chiqish</Link>
                     </li>
                  </ul>
               </li>
               <li className="nav-item">
                  <button className="btn" type="button">
                     <img className="img-responsive" src={bell} alt=""/>
                  </button>
               </li>
            </ul>
         </nav>
      </div>
   )
}