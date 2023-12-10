import { Box, HStack, Image, Text  } from "@chakra-ui/react";
import { Activity } from "../../../models/Activity";

interface Props {
  activity: Activity
}

export default function ActivityDetails ({activity} : Props) {

  return(
    <Box>
      <Image src={activity.imageUrl} {...Images}/>
      <HStack>
        <Box>
          <Text>
            {activity.title}
          </Text>
          <Text>
            {activity.description}
          </Text>
        </Box>
      </HStack>
    </Box>
  )
}

const Images =  {
  flex: 1,
  height: '40vh',
}

// For inspiration https://blog.tubikstudio.com/types-of-web-pages/