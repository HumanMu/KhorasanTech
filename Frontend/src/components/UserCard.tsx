import { Box, HStack, Text } from "@chakra-ui/layout";
import { User } from "./models/User";

const UserCard = ({ users }: { users: User }) => {
  return (
    <Box {...Card}>
      <HStack>
        <Text>
          {users.imageUrl} {users.firstName}
        </Text>
      </HStack>
    </Box>
  );
};

export default UserCard;

const Card = {
  bg: "red.100",
  height: "25px",
  borderRadius: "7px",
  margin: "3px",
};
