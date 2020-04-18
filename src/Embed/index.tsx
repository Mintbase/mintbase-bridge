// HelloWorld.js
import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Close } from "@styled-icons/evil/Close";
import * as styles from "../styles";
import MintbaseLogo from "../components/MintbaseLogo";

const Page = styled.div``;

const Container = styled(animated.div)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 100;
  background-color: rgba(60, 60, 60, 0.8);
`;

const Content = styled(animated.div)`
  display: flex;
  flex: 1 0 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 2;
  max-width: 80vw;
  max-height: 89vh;
  @media (max-width: ${styles.GRID_SM}px) {
    max-width: auto;
    max-height: auto;
    max-width: 100vw;
    max-height: 100vh;
  }
`;

const LogoContent = styled(animated.div)`
  display: flex;
  flex: 1 0 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: ${styles.PADDING_XXS};
  top: ${styles.PADDING_XXS};
  text-decoration: none;
  background-color: ${styles.DARK};
  padding: ${styles.PADDING_SM};
  padding-top: ${styles.PADDING_XXS};
  color: ${styles.OFF_WHITE};
  font-size: 1.6em;
  z-index: 101;
  border: 1px solid ${styles.DARK3};
  &:hover {
    cursor: pointer;
  }
`;

export const CloseX = styled(Close)`
  color: ${styles.OFF_WHITE};
  align-self: center;
  width: 45px;
  height: 45px;
`;

const IFrame: any = styled.iframe`
  display: flex;
  flex-grow: 1;
  border: 1px solid ${styles.DARK3};
  background-color: ${styles.DARK_ALPHA};
  -webkit-box-shadow: -2px 10px 18px -4px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: -2px 10px 18px -4px rgba(0, 0, 0, 0.24);
  box-shadow: -2px 10px 18px -4px rgba(0, 0, 0, 0.24);
`;

interface EmbedProps {
  contract: string;
  show: boolean;
  handleClose: (isOpen: boolean) => void;
}

const Embed = ({ contract, show, handleClose }: EmbedProps) => {
  const link = `http://localhost:3000/embed/${contract}?somedata=5&more=bacon&isEmbeded=true`;

  const [loading, setLoading] = useState(true);

  const styleProps = useSpring({
    transform: show ? `scaleX(0px, 0px)` : `translate(${-1200 * 2}px, 0px)`,
    opacity: show ? 1 : 0.7,
  });

  const loadingProps = useSpring({
    transform: !loading ? `scaleX(0px, 0px)` : `scaleX(${-1200 * 2}px, 0px)`,
    opacity: !loading ? 1 : 0.7,
  });

  const loadingLogo = useSpring({
    transform: loading ? `scaleX(0px, 0px)` : `scaleX(${-1200 * 2}px, 0px)`,
    opacity: loading ? 1 : 0.7,
  });

  const handleOnClose = (isOpen: boolean) => {
    handleClose(false);
  };

  return (
    <Page>
      <Container style={styleProps} onClick={() => handleOnClose(false)}>
        <CloseButton onClick={() => handleOnClose(false)}>
          <CloseX size={40} />
        </CloseButton>

        <Content style={loadingProps}>
          <IFrame
            frameBorder="0"
            onLoad={() => setLoading(false)}
            src={link}
            height="100%"
            width="100%"></IFrame>
        </Content>
        <LogoContent style={loadingLogo}>
          <MintbaseLogo width={300} color={styles.OFF_WHITE} />
        </LogoContent>
      </Container>
    </Page>
  );
};
export default Embed;
