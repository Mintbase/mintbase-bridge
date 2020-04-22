import React, { useState } from "react";
import "./App.css";
import Embed from "./Embed";
import styled from "styled-components";
import * as styles from "./styles";

const Container = styled.div`
  display: flex;
  background-image: url("./background.png");
`;

const Button = styled.button`
  display: flex;
  background-color: ${styles.DARK};
  color: ${styles.OFF_WHITE};
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container className="App">
      <header className="App-header">
        <Embed
          contract="0x202d2f33449bf46d6d32ae7644ada130876461a4"
          show={isOpen}
          handleClose={setIsOpen}
        />
        <Button onClick={() => setIsOpen(true)}>Show Market</Button>
      </header>
    </Container>
  );
}

export default App;
