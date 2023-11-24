import {RouteObject, createBrowserRouter as Router} from "react-router-dom";
import { Login } from '../components/authentication/Login';
import {SignUp} from "../components/authentication/Signup";
import App from "../App";
import  Vission  from "../aboutus/vission";
import Mission from "../aboutus/mission";
import AboutUs from "../aboutus/AboutUs";
import ContactUs from "../contactus/ContactUs";
import ChatRoom from "../public_room/ChatRoom";



export const routes: RouteObject[] =[
  {
    path: "/", 
    element: <App/>,
    children: [
      { path: "", element: <Login/> },
      { path: "login", element: <Login/> },
      { path: "register", element: <SignUp/> },
      { path: "vission", element: <Vission/> },
      { path: "mission", element: <Mission/> },
      { path: "aboutus", element: <AboutUs/> },
      { path: "contactus", element: <ContactUs/> },
      { path: "chatroom", element: <ChatRoom/> },
    ] 
  }
]

export const router = Router(routes);