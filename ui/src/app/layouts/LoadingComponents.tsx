import { Box, Center, Spinner } from "@chakra-ui/react";
import agent from "../../api/Agent";
import { useEffect, useState } from "react";

const loadingService = agent.loadingService;

export default function LoadingComponents() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const subscription = loadingService.isLoading$.subscribe((newIsLoading) => {
      setIsLoading(newIsLoading);
    });

    return () => subscription.unsubscribe();
  }, [loadingService]);
  return (
    <Box {...Style} display={isLoading ? "flex" : "none"}>
      <Center>
        <Spinner
          position={"relative"}
          thickness="50px"
          alignSelf="50%"
          speed="0.65s"
          emptyColor="red.300"
          color="red"
          size="xl"
        ></Spinner>
      </Center>
    </Box>
  );
}

const Style = {
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vh",
};
