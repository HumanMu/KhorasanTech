import { Center, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ImageSlider from "../../components/slider/ImageSlider";

const [showImageSlider] = useState(true);

export default function About() {
  return (
    <div>
      {showImageSlider && <ImageSlider />}
      <Center marginBottom={100}>
        <VStack></VStack>
      </Center>
    </div>
  );
}
