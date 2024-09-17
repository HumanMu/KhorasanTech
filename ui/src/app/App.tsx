import { Container } from "@chakra-ui/react";
import LoadingComponents from "./layouts/LoadingComponents";
import { ToastContainer } from "react-toastify";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";


export default function App() {
  return (
    <>
      <Navbar />
      <LoadingComponents />
      <Container  marginTop={0}>
        <Outlet />
      </Container>

      <ToastContainer position='bottom-right' hideProgressBar theme="colored"/>

    </>
  );


}

