import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box>
      <Heading content="Not Found">
        <Text>Oops - we've looked everywhere but could not find what you are looking for!</Text>
      </Heading>
      <Box>
        <Button as={Link} to='/login'>
          Return to activities page
        </Button>
      </Box>
    </Box>
  )
}