import { Center, VStack, Text } from "@chakra-ui/layout";
import { Box, Flex, HStack, IconButton, Input } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import MessageCard from "../components/MessageCard";
import {
  GetGroupMessages,
  SendGroupMessages,
} from "../services/PublicChatService";
import { useState, useEffect } from "react";
import "../components/stylecss.css";
import agent from "../api/Agent";
import UserCard from "../components/UserCard";
import { User } from "../components/models/User";
import axios from "axios";

const ChatRoom = () => {
  const messageList = GetGroupMessages();
  const [messageIn, setMessage] = useState<string>();
  const [users, setUsers] = useState<User[]>([]);

  const sendMessageToGroup = () => {
    const message = {
      message: "Robot message",
      sender: "human",
    };
    SendGroupMessages("7CMQPXQRERFwuZYuxb8V", message);
  };

  useEffect(() => {
    axios.get<User[]>("http://localhost:5000/api/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <Center>
        <HStack>
          <VStack>
            <Text {...ChatView}>
              {" "}
              {messageList.map((msg, index) => (
                <MessageCard
                  key={index}
                  name={msg.sender}
                  message={msg.message}
                />
              ))}{" "}
            </Text>
            <Box {...MessageArea}>
              <HStack display="flex" alignItems="center">
                <Input
                  //value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  {...MessageInputBox}
                  _hover={{ borderColor: "transparent" }}
                  _focus={{ borderColor: "transparent", boxShadow: "none" }}
                ></Input>
                <IconButton
                  {...SendButton}
                  onClick={sendMessageToGroup}
                  aria-label="Done"
                  icon={<ArrowRightIcon />}
                ></IconButton>
              </HStack>
            </Box>
          </VStack>
          <Flex {...UserListView}>
            {users.map((user, index) => (
              <UserCard key={user.userId} users={users[index]}></UserCard>
            ))}
          </Flex>
        </HStack>
      </Center>
    </>
  );
};

const UserListView = {
  height: "78vh",
  width: "15vw",
  borderWidth: "2px",
  borderColor: "red",
  marginTop: ["0vh", "7vh"],
  borderRadius: "10px",
};

const MessageArea = {
  width: ["100vw", "60vw"],
  height: "50px",
  borderColor: "red",
  borderWidth: "2px",
  borderRadius: "10px",
  padding: "0px",
};

const MessageInputBox = {
  placeholder: "Write your message here",
  borderRadius: "10px",
  margin: 0,
  borderColor: "white",
  padding: "0px",
};

const SendButton = {
  height: "48px",
  colorScheme: "red",
};

const ChatView = {
  height: "70vh",
  width: ["100vw", "60vw"],
  borderWidth: "2px",
  borderColor: "red",
  marginTop: ["0vh", "7vh"],
  borderRadius: "10px",
};

export default ChatRoom;
