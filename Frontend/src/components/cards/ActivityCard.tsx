import { Box, Text, Heading } from "@chakra-ui/layout";
import { Activity } from "../../models/Activity";
import { HStack, Image, VStack } from "@chakra-ui/react" 
import React from "react";

const ActivityCard = ({ activity }: { activity: Activity }) => {
  return (
    <Box {...CardView}>
      <HStack>
        <Image
          borderRadius='full'
          boxSize='100px'
          src='https://bit.ly/dan-abramov'
          alt={`Image from ${activity.title}`}
        />
        <VStack>
          <Box marginLeft={5}>
            <Heading size={"md"}>{activity.title}</Heading>
            <Text {...cityAndDate}>
              {activity.city} {activity.date}
            </Text>
            <Text>{activity.description}</Text>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ActivityCard;

const CardView = {
  width: "100%",
  paddingLeft: "10px",
  marginBottom: "30px",
};

const cityAndDate = {
  fontSize: "sm",
  textColor: "grey",
};
