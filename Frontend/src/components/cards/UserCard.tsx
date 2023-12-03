import { Box, HStack, Text } from "@chakra-ui/layout";
import { User } from "../../models/User";

interface Props {
  user: User,
  bg?: string,
}

const UserCard = ({ user } : Props) => {
  //let bakcground = user % 2 === 0 ? "#eb9694" : "#e06f84";
  return (
    <Box {...Card}>
      <HStack>
        <Text>
          {user.imageUrl}
        </Text>
      </HStack>
    </Box>
  );
};

export default UserCard;

const Card = ({ b }: { b: string }) => ({
  bg: b,
  height: "40px",
  width: "13vw",
  borderRadius: "7px",
  margin: "2px",
  padding: "3px",
});
