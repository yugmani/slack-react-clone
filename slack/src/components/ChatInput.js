import React, { useState } from "react";
import styled from "styled-components";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

function ChatInput({ sendMessage }) {
  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!input) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <Container>
      <InputContainer>
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Message here..."
          />
          <SendButton type="submit" onClick={send}>
            <Send />
            {/* <SendOutlinedIcon /> */}
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
`;

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;
  form {
    display: flex;
    padding-left: 10px;
    height: 42px;
    align-items: center;
    justify-content: space-between;

    input {
      flex: 1;
      font-size: 13px;
      border: none;
      :focus {
        outline: none;
      }
    }
  }
`;

const SendButton = styled.button`
  background: #007a5a;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;
  border: none;

  .MuiSvgIcon-root {
    width: 18px;
  }

  :hover {
    background: #148567;
    outline: none;
  }
`;

const Send = styled(SendOutlinedIcon)`
  color: #d9d9d9;
`;
