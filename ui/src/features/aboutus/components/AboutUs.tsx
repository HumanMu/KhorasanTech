import { Center, Stack, Text, VStack } from "@chakra-ui/react";
import ImageSlider from "../../../components/slider/ImageSlider";

export default function AboutUs() {
  return (
    <>
      <Center marginBottom={100}>
        <VStack>
          <ImageSlider />
          <Text {...PageHeader}>About Khorasan Technology</Text>
          <Stack spacing={7} margin="0 20vw 0 20vw">
            <Text>
              Welcome to Khorasan Technology (KT), where connections flourish
              and friendships bloom! Our platform is designed with one simple
              yet powerful mission in mind: to bring people together through the
              magic of conversation and shared experiences. At KT, we believe in
              the transformative power of meaningful connections. In a world
              that sometimes feels increasingly disconnected, we strive to
              create a digital space where individuals from all walks of life
              can come together, engage in lively conversations, and forge
              lasting bonds.
              <Text fontSize={"lg"} fontWeight={"bold"} marginTop={"50px"}>
                What Sets Us Apart:
              </Text>
              <Text {...TextHeader}>Dynamic Public Chat Rooms</Text>
              Immerse yourself in vibrant and diverse chat rooms that cater to a
              wide range of interests. Whether you're a passionate gamer, a
              bookworm, or someone who simply loves to chat, there's a room for
              you. Connect with like-minded individuals who share your passions
              and curiosities.
              <Text {...TextHeader}>Multiplayer Games (soon)</Text>
              Elevate your interaction by playing engaging multiplayer games
              right within our platform. Break the ice, challenge friends, or
              make new ones as you embark on virtual adventures together. From
              casual games to competitive challenges, there's something for
              every gaming enthusiast.
              <Text {...TextHeader}>User-Friendly Interface</Text>
              We understand the importance of a seamless and enjoyable user
              experience. Our platform boasts an intuitive interface that makes
              navigation a breeze whether you are a celephone, or computer user
              or you're a tech-savvy user or new to online communities, you'll
              find our platform welcoming and easy to use.
              <Text {...TextHeader}>Safe and Inclusive Environment</Text>
              Creating a positive and inclusive digital space is at the core of
              our values. We've implemented robust measures to ensure a safe and
              respectful environment for all users. Our commitment to fostering
              a community that embraces diversity is unwavering.
            </Text>
          </Stack>
        </VStack>
      </Center>
    </>
  );
}

const PageHeader = {
  fontSize: { base: "16px", sm: "25px", md: "40px", lg: "56px" },
  fontWeight: "bold",
};

const TextHeader = {
  fontSize: "md",
  fontWeight: "bold",
  marginTop: "20px",
};
