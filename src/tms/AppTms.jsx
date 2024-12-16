// import "./App.css";
import React from "react";
// import RegistrationComponent from "./components/RegistrationComponent";
// import FooterComponent from "./components/FooterComponent";
// import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import LoginComponent from "./components/LoginComponent";
// import MainPageComponent from "./components/MainPageComponent";
// import UserInfoComponent from "./components/UserInfoComponent";
// import TaskComponent from "./components/TaskComponent";
// import AddTaskComponent from "./components/AddTaskComponent";
// import UserListComponent from "./components/UserListComponent";

import Home from '../componentsInput/Home';
import About from '../componentsInput/About';
import Contact from '../componentsInput/Contact';

// function App() {

//   return (
//     <>
//       <BrowserRouter>
//         <HeaderComponent />
//           <Routes>
//           {/* // http://localhost:3000 */}
//             {/* <Route path='/' element= {<RegistrationComponent />}></Route> */}
//             <Route path='/' element= {<TaskManagementSystem />}></Route>
//             {/* // http://localhost:3000/registration */}
//             {/* <Route path='/registration' element= {<RegistrationComponent />}></Route> */}
//             <Route path='/registration' element= {<TaskManagementSystem />}></Route>
//           </Routes>
//           <FooterComponent />
//       </BrowserRouter>
//     </>
//   )
// }

const AppTms = () => {
  return (
    <>
        {/*<nav>*/}
        {/*    <ul>*/}
        {/*        <li>*/}
        {/*            <Link to='/'>О нас</Link>*/}
        {/*        </li>*/}
        {/*        <li>*/}
        {/*            <Link to='/registration'>Контакты</Link>*/}
        {/*        </li>*/}
        {/*    </ul>*/}
        {/*</nav>*/}

      <BrowserRouter>
        {/*<HeaderComponent />*/}
        <Routes>
          <Route path="/:id" element={<Home />}></Route>
          <Route path="/registration/:id" element={<About />}></Route>

          {/*<Route path="/" element={<MainPageComponent />}></Route>*/}
          {/*<Route path="/registration" element={<RegistrationComponent />}></Route>*/}
          {/*<Route path="/login" element={<LoginComponent />}></Route>*/}
          {/*<Route path="/currentUser" element={<UserInfoComponent />}></Route>*/}
          {/*<Route path="/task" element={<TaskComponent />}></Route>*/}
          {/*<Route path="/addTask" element={<AddTaskComponent />}></Route>*/}
          {/*<Route path="/editTask/:id" element={<AddTaskComponent />}></Route>*/}
          {/*<Route path="/allUsers" element={<UserListComponent />}></Route>*/}
        </Routes>
        {/*<FooterComponent />*/}
      </BrowserRouter>
    </>
  );
};

export default AppTms;
