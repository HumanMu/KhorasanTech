import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { Container, VStack } from "@chakra-ui/react";
import LoadingComponents from "./components/layouts/LoadingComponents";

function App() {
  return (
    <>
      <VStack spacing={0}>
        <Navbar />
        <LoadingComponents />
        <Container>
          <Outlet />
        </Container>
      </VStack>
    </>
  );
}

export default App;
