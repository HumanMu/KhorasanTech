import { Center, VStack, Text, Stack } from "@chakra-ui/react";
import ImageSlider from "../../../components/slider/ImageSlider";

export default function Vission() {
  return (
    <Center marginBottom={100}>
      <VStack>
        <ImageSlider />
        <Text {...PageHeader}>Our Mission</Text>
        <Stack spacing={7} margin="0 20vw 0 20vw">
          <Text>
            At Khorasan Technology (KT), our vision propels us towards a future
            where digital connections transcend boundaries, creating a global
            tapestry of shared experiences and lasting relationships. We
            envision a platform that goes beyond the virtual realm, becoming a
            vibrant hub where individuals not only connect through chat and
            games but also grow together, learn from one another, and celebrate
            the richness of human diversity.
            <Text marginBottom={"20px"} />
            In our vision, KT is more than a website—it's a catalyst for
            positive change in the online landscape. We see a community that
            values inclusivity, respects differences, and embraces the unique
            qualities each member brings. Our aim is to redefine the way people
            perceive online interactions, turning the digital space into a
            source of inspiration, joy, and personal growth.
            <Text marginBottom={"20px"} />
            As we look ahead, we envision KT as a cornerstone of the internet—a
            place where users forge bonds that extend beyond the screen, where
            friendships formed in our virtual spaces transcend the digital
            divide and influence the broader world positively.
            <Text marginBottom={"20px"} />
            Join us on this visionary journey. Let's shape a digital future
            where connections are meaningful, games are shared adventures, and
            every individual has a place to belong. At KT, our vision is to be
            the catalyst that transforms online interactions into transformative
            and enduring connections. Welcome to a future where the
            possibilities are as boundless as the connections we create.
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
