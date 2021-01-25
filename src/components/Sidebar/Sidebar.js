import React, {useState} from 'react';
import './sidebar.css';
import {Link, useLocation} from 'react-router-dom'
import logo from '../../assets/pdp.svg'
import '../../App.css'
import dashboard from '../../assets/dashboard.svg';
import courses from '../../assets/courses.svg';
import tasks from '../../assets/taskAndChat.svg';
import devices from '../../assets/devices.svg';
import zoom from '../../assets/zoom.svg';
import settings from '../../assets/settings.svg';
import forward from "../../assets/Path.svg";
import exit from "../../assets/exit.svg";
import removeButton from '../../assets/remove.svg'


const sidebarData = [
   {
      img: dashboard,
      name: "Dashboard",
      link: "dashboard",
      active: "/dashboard"
   },
   {
      img: courses,
      name: "Barcha kurslar",
      link: "courses",
      active: "/courses"
   },
   {
      img: tasks,
      name: "Vazifalar va chat",
      link: "task",
      active: "/task"
   },
   {
      img: devices,
      name: "Qurilmalar",
      link: "devices",
      active: "/devices"
   },
   {
      img: zoom,
      name: "Zoom chat",
      link: "zoomChat",
      active: "/zoomChat"
   },
   {
      img: settings,
      name: "Sozlamalar",
      link: "settings",
      active: '/settings'
   }
]


export default function Sidebar(props) {
   const location = useLocation();
   const [id, setId] = useState(true);
   const handleClick = (i) => {
      setId(id === i ? -1 : i);
      // console.log(id)
   };
   return (
      <div className="w-100">
         <div className="sidebar mt-3">
            <div className="d-flex">
               <Link className="navbar-brand" to="/">
                  <img src={logo} alt=""/>
               </Link>
               <button onClick={props.toggleButton}  className="btn remove-button d-block d-lg-none mt-3">
                  <img width="20" src={removeButton} alt=""/>
               </button>
            </div>
            <ul className="list-unstyled d-block mt-5">
               {sidebarData.map((data, i) => (
                  <li key={i} onClick={() => handleClick(i)}
                      className={location.pathname === data.active ? "activeSidebar" : null}>
                     <Link to={`/${data.link}`} className="d-flex link text-secondary">
                        <img className="mr-3" src={data.img} alt=""/>
                        <p className="my-2">{data.name}</p>
                     </Link>
                  </li>
               ))}
               <li className="nav-item" style={{marginTop: 235}}>
                  <Link to="/home" className="d-flex link text-secondary">
                     <img className="mr-3" src={forward} alt=""/>
                     <p className="my-2">Home pdp.uz</p>
                  </Link>
               </li>
               <li className="nav-item">
                  <Link to="/login" className="d-flex link text-secondary">
                     <img className="mr-3" src={exit} alt=""/>
                     <p className="my-2">Chiqish</p>
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   )
}