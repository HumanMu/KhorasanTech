import {useEffect, useState} from "react";

interface Message {
  sender: string;
  message: string;
}
export const GetGroupMessages = () => {
  let [messageList, setMessageList] = useState<Message[]>([]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        // Read messages
      } catch (e) {
        console.log('Something went wrong!...', e);
      }
    };

    getMessages();
  }, []);
  return messageList;
};


export const SendGroupMessages = async (_groupId: string, message: Message) => {



  try {
    // Send messages
  } catch (e) {
    console.log('Something went wrong!...', e);
  }
};