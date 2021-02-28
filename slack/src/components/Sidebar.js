import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItems } from "../data/SidebarData";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import { useHistory } from "react-router-dom";

function Sidebar(props) {
  // console.log(props);

  const history = useHistory();

  const goToChannel = (id) => {
    if (id) {
      console.log(id);
      history.push(`/room/${id}`);
    }
  };

  const addChannel = () => {
    const promptName = prompt("Enter channel Name");
    // console.log(promptName);
    if (promptName) {
      db.collection("rooms").add({
        name: promptName,
      });
    }
  };

  return (
    <Container>
      <WorkspaceContainer>
        <Name>CleverProgrammer</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {sidebarItems.map((item) => (
          <MainChannelItem key={item.id}>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon onClick={addChannel} />
        </NewChannelContainer>
      </ChannelsContainer>
      <ChannelsList>
        {props.rooms.map((item) => (
          <Channel key={item.id} onClick={() => goToChannel(item.id)}>
            # {item.name}
          </Channel>
        ))}
      </ChannelsList>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #3d0c3c;
  color: rgb(188, 171, 199);
`;

const WorkspaceContainer = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 18px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 19px;
  padding-right: 12px;
  height: 28px;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;
