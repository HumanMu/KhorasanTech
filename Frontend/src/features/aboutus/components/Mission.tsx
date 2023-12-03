import { Center, VStack, Text, Stack } from "@chakra-ui/react";
import ImageSlider from "../../../components/slider/ImageSlider";

export default function Mission() {
  return (
    <Center marginBottom={100}>
      <VStack>
        <ImageSlider />
        <Text {...PageHeader}>Our Mission</Text>
        <Stack spacing={7} margin="0 20vw 0 20vw">
          <Text>
            At Khorasan Technology (KT), our mission is simple yet profound: to
            foster genuine connections and create a digital space where
            individuals can come together, share experiences, and build
            meaningful relationships. In a world that can sometimes feel
            isolating, we believe in the power of conversation and shared
            activities to bridge gaps and cultivate a sense of community.
            <Text marginBottom={"20px"} />
            Our commitment extends beyond just providing a platform—it's about
            creating an inclusive environment where people from diverse
            backgrounds feel welcome. We aspire to be more than just a chat room
            and gaming space; we aim to be a catalyst for friendships, laughter,
            and moments that make our digital community feel like a second home.
            <Text marginBottom={"20px"} />
            Join us on this mission to break down barriers, forge new
            connections, and make every interaction count. Together, let's build
            a community that thrives on the simple yet profound act of bringing
            people closer, one chat and game at a time. Welcome to KT, where our
            mission is to connect hearts and minds in the vast landscape of the
            digital world.
          </Text>
        </Stack>
      </VStack>
    </Center>
  );
}

const PageHeader = {
  fontSize: { base: "16px", sm: "25px", md: "40px", lg: "56px" },
  fontWeight: "bold",
};
