import { Center, VStack, Text, Stack } from "@chakra-ui/react";
import ImageSlider from "../../components/slider/ImageSlider";



const ContactUs = () => {
  return (
    <Center marginBottom={100}>
      <VStack>
        <ImageSlider />
        <Text {...PageHeader} > How to get in touch with us</Text>
        <Stack spacing={7} margin='0 20vw 0 20vw'>
          <Text>
            We'd love to hear from you! At Khorasan Technology, your feedback, questions, and 
            suggestions are incredibly valuable to us. Feel free to reach out through 
            the following channels:

            <Text {...TextHeader}>Customer support</Text>
            Have a question about our platform or need assistance? Our dedicated 
            customer support team is here to help. Reach out to us at:
          </Text>
          <Text fontWeight={"bold"}>Email: <Text fontWeight={'medium'}>kh.techn@gmail.com</Text></Text>
          

        </Stack>
      </VStack>
    </Center>
  );
}

export default ContactUs;

const PageHeader = {
  fontSize: {base: '16px', sm: '25px', md: '35px', lg: '45px'},
  fontWeight: "bold",
}

const TextHeader = {
  fontSize: 'md',
  fontWeight: 'bold',
  marginTop: '20px',
}
