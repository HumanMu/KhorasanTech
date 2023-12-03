import { Box, Text } from '@chakra-ui/layout';
import React from 'react';



const MessageCard = ({ name, message }: { name: string; message: string }) => {
  return (
    <Box {...MsgCard}>
      <Text> {name}: {message} </Text>
    </Box>
  );
};

const MsgCard =  {
  bg: 'red.100',
  height: '25px',
  borderRadius: '7px',
  margin: '3px',
};

export default MessageCard;
