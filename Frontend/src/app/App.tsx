import { Outlet, useLocation } from "react-router-dom";
import { Container, VStack } from "@chakra-ui/react";
import LoadingComponents from "./layouts/LoadingComponents";
import { ToastContainer } from "react-toastify";
import { useStore } from "../stores/Store";
import { Fragment, useEffect } from "react";
import Navbar from "./navbar/Navbar";

function App() {
  const location = useLocation();
  const {commonStore, userStore} = useStore();

  useEffect(() => {
    if(commonStore.token) {
      userStore.getUser().finally(()=> commonStore.setAppLoaded());
    }
    else{
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  
  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar theme="colored"/>
      <Navbar />
      <LoadingComponents />
      <Container >
        <Outlet />
      </Container>
    </>
  );
}

export default App;
