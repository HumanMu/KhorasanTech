import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import LoadingComponents from "./layouts/LoadingComponents";
import { ToastContainer } from "react-toastify";
import { useStore } from "../stores/Store";
import { useEffect } from "react";
import Navbar from "./navbar/Navbar";

function App() {
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
