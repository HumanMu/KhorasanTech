import { Outlet } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import { Container, VStack } from "@chakra-ui/react"


function App() {

  return (
    <>
      <VStack spacing={0}>
        <Navbar/>
        <Container>
          <Outlet />
        </Container>
      </VStack>
    </>

  )
}

export default App
