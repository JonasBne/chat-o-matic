import React from 'react';
import styled from '@emotion/styled';
import { Send } from '@emotion-icons/boxicons-solid/Send';
import FlexBox from '../../components/FlexBox';

interface MessageInputProps {
  onSend: (message: string) => void;
}

const Wrapper = styled(FlexBox)({
  justifyContent: 'space-around',
});

const SendIcon = styled(Send)({
  background: '#1DA1F2',
  color: 'white',
  borderRadius: '50%',
  padding: '16px',
  margin: '48px auto auto auto',
});

const Input = styled.textarea({
  display: 'block',
  margin: '48px auto 0 auto',
  width: '80%',
  resize: 'none',
  borderRadius: '12px',
  padding: '12px',
});

function MessageInput({ onSend }: MessageInputProps) {
  const handleSendMessage = (evt: React.KeyboardEvent) => {
    if (evt.key === 'Enter') {
      const target = evt.target as HTMLTextAreaElement;
      onSend(target.value.trim());
    }
  };

  return (
    <Wrapper>
      <Input id="message-input" name="message-input" onKeyUp={handleSendMessage} />
      <SendIcon size="24" />
    </Wrapper>
  );
}

export default MessageInput;
