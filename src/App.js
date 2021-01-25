import React, {useState} from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Appbar from "./components/Appbar/Appbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Settings from "./components/Settings/Settings";
import Courses from "./components/Courses/Courses";
import TaskChat from "./components/TaskChat/TaskChat";
import Devices from "./components/Devices/Devices";
import ZoomChat from "./components/ZoomChat/ZoomChat";


import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect
} from "react-router-dom";

const routes = [
   {
      path: "/dashboard",
      component: Dashboard,
   },
   {
      path: "/courses",
      component: Courses
   },
   {
      path: "/task",
      component: TaskChat
   },
   {
      path: "/devices",
      component: Devices
   },
   {
      path: "/zoomChat",
      component: ZoomChat
   },
   {
      path: "/settings",
      component: Settings
   }
]

function App() {
   const [menu, setMenu] = useState(true)
   const handleMenuToggle = () => {
      setMenu(!menu);
      console.log(menu)
   }
   return (
      <Router>
         <div className="container-fluid">
            <div className="row">
               <div className={`col2 ${menu === true ? 'sidebarToggle' : null}`}>
                  <Sidebar toggleButton={handleMenuToggle}/>
               </div>
               <div className="col10">
                  <Appbar toggleButton={handleMenuToggle}/>
                  <Switch>
                     <Route exact path="/" render={() => <Redirect to="/dashboard"/>}/>
                     {routes.map((r, i) => (
                        <Route key={i} exact path={r.path} component={r.component}/>
                     ))}
                  </Switch>
               </div>
            </div>
         </div>
      </Router>
   );
}

export default App;
