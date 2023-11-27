import { Box, HStack, Text } from "@chakra-ui/layout";
import { User } from "../models/User";

const UserCard = ({ users, bg }: { users: User; bg: number }) => {
  let bakcground = bg % 2 === 0 ? "#eb9694" : "#e06f84";
  return (
    <Box {...Card({ b: bakcground })}>
      <HStack>
        <Text>
          {users.imageUrl} {users.firstName} {users.lastName}
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
