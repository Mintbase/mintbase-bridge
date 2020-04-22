// HelloWorld.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import qs from "qs";
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
  background-color: ${({ color }) => (color ? color : styles.DARK_ALPHA)};
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
  right: 0;
  top: 0;
  text-decoration: none;
  background-color: ${({ color }) => color};
  padding: ${styles.PADDING_XXS};
  padding-top: 0;

  color: ${styles.OFF_WHITE};
  font-size: 1.6em;
  z-index: 101;
  border: 1px solid ${styles.FADDED};
  &:hover {
    cursor: pointer;
  }
`;

export const CloseX = styled(Close)`
  color: ${styles.OFF_WHITE};
  margin: 0;
`;

const IFrame: any = styled.iframe`
  display: flex;
  position: relative;
  flex-grow: 1;
  border: 1px solid ${styles.FADDED};
  background-color: ${({ color }) => (color ? color : styles.DARK_ALPHA)};
  -webkit-box-shadow: -2px 10px 18px -4px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: -2px 10px 18px -4px rgba(0, 0, 0, 0.24);
  box-shadow: -2px 10px 18px -4px rgba(0, 0, 0, 0.24);

  @media (max-width: ${styles.GRID_SM}px) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
  }
`;

export enum Network {
  rinkeby = "rinkeby",
  mainnet = "homestead",
}

interface EmbedProps {
  contract: string;
  show: boolean;
  network?: Network;
  handleClose: (isOpen: boolean) => void;
  dark?: string;
  darker?: string;
  darkAlpha?: string;
}

const defaultProps = {
  contract: "0xccf41b9be3860cc0fbe235be59fa622ddf78253c",
  show: false,
  handleClose: () => {},
  dark: styles.DARK,
  darkAlpha: styles.DARK_ALPHA,
  darkest: styles.DARKER,
  network: Network.mainnet,
};

const Embed = (props: EmbedProps = defaultProps) => {
  const { contract, show, handleClose, darkAlpha, darker, dark } = props;
  var str = qs.stringify({ ...props, isEmbeded: true });

  const [screenWidth, setScreenWidth] = useState(3000);

  // const link = `http://localhost:3000/embed/${contract}?${str}`;

  const link = `https://mintbase.io/embed/${contract}?${str}`;
  // https://81bbc3e3.ngrok.io

  const [loading, setLoading] = useState(true);

  const styleProps = useSpring({
    transform: show
      ? `translate(0px, 0px)`
      : `translate(${screenWidth}px, 0px)`,
    opacity: show ? 1 : 0,
  });

  const loadingProps = useSpring({
    transform: !loading
      ? `translate(0px, 0px)`
      : `translate(${screenWidth}px, 0px)`,
    opacity: !loading ? 1 : 0.7,
  });

  const handleOnClose = (isOpen: boolean) => {
    handleClose(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth * 2);
    }
  }, [window]);

  return (
    <Page>
      <Container
        color={darkAlpha}
        style={styleProps}
        onClick={() => handleOnClose(false)}>
        <CloseButton color={darker} onClick={() => handleOnClose(false)}>
          <CloseX size={40} />
        </CloseButton>

        <Content style={loadingProps}>
          <IFrame
            color={dark}
            frameBorder="0"
            onLoad={() => setLoading(false)}
            src={link}
            height="100%"
            width="100%"></IFrame>
        </Content>
      </Container>
    </Page>
  );
};

export default Embed;
