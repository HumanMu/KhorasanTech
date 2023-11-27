import { RouteObject, createBrowserRouter as Router } from "react-router-dom";
import { Login } from "../components/authentication/Login";
import { SignUp } from "../components/authentication/Signup";
import App from "../App";
import ContactUs from "../contactus/ContactUs";
import AboutUs from "../main_pages/aboutus/components/AboutUs";
import ChatRoom from "../main_pages/public_room/ChatRoom";
import Mission from "../main_pages/aboutus/components/mission";
import Vission from "../main_pages/aboutus/components/vission";
import Home from "../main_pages/home/Home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <SignUp /> },
      { path: "mission", element: <Mission /> },
      { path: "vission", element: <Vission /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "contactus", element: <ContactUs /> },
      { path: "chatroom", element: <ChatRoom /> },
      { path: "home", element: <Home /> },
    ],
  },
];

export const router = Router(routes);
