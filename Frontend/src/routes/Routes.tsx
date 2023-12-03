import { RouteObject, createBrowserRouter as Router } from "react-router-dom";
import { SignUp } from "../components/authentication/Signup";
import ContactUs from "../features/contactus/ContactUs";
import ChatRoom from "../main_pages/public_room/ChatRoom";
import Login from "../components/authentication/Login";
import Mission from "../features/aboutus/components/Mission";
import Vission from "../features/aboutus/components/Vission";
import AboutUs from "../features/aboutus/components/AboutUs";
import Home from "../main_pages/activities/Home";
import App from "../app/App";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
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
