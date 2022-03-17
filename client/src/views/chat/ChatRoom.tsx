// TODO; remove this rule
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { User } from '@firebase/auth/dist/auth-public';
import { useMutation, useQuery } from '@apollo/client';
import { AddMessageMutation, AddMessageMutationVariables, GetMessagesQuery } from '../../graphql/types';
import { ADD_MESSAGE, GET_MESSAGES } from '../../graphql/queries';
import MessageInput from './MessageInput';
import Messages from './Messages';
import SendMessage from './SendMessage';

interface ChatRoomProps {
  user: User;
}

function ChatRoom({ user }: ChatRoomProps) {
  const [message, setMessage] = useState('');

  const { data } = useQuery<GetMessagesQuery>(GET_MESSAGES);
  const messages = data?.messages ?? [];

  const [addMessage] = useMutation<AddMessageMutation, AddMessageMutationVariables>(ADD_MESSAGE, {
    refetchQueries: [
      {
        query: GET_MESSAGES,
      },
    ],
  });

  const handleTypeMessage = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(evt.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim().length > 0) {
      addMessage({
        variables: {
          input: {
            sender: user.displayName ?? 'unknown',
            content: message,
          },
        },
      });
    }
    setMessage('');
  };

  return (
    <>
      <div>test</div>
      <SendMessage message={message} onKeyPress={handleTypeMessage} onSend={handleSendMessage} />
      {/* {messages && messages.map((msg) => {})} */}
      {/* <Messages recipient={conversation.recipient} />
      <MessageInput messageContent={conversation.content} onKeyPress={handleTypeMessage} onSend={handleSendMessage} /> */}
    </>
  );
}

export default ChatRoom;
