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
          contract="0x0223ea957606c8dfac36d9efc6d9ebcb247fb4df"
          show={isOpen}
          handleClose={setIsOpen}
          dark="rgba(204, 15, 67, 1)"
          darker="rgba(126, 0, 48, 1)"
          darkAlpha="rgba(204, 15, 67, 0.8)"
        />
        <Button onClick={() => setIsOpen(true)}>Show Market</Button>
      </header>
    </Container>
  );
}

export default App;
