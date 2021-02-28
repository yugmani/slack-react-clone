import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import db from "./firebase";
import { auth, provider } from "./firebase";

function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      // console.log(snapshot.docs);
      setRooms(
        snapshot.docs.map((doc) => {
          // console.log(doc.data());
          // return doc.data();
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  const signOut = () => {
    localStorage.removeItem("user");
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  // console.log("User in App state:", user);
  // console.log(rooms);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header signOut={signOut} user={user} />
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user} />
                </Route>
                <Route path="/">Select or Create Channel</Route>
              </Switch>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
