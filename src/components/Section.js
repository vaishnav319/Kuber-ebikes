import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightButtonText,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <TextContainer>
        <Fade bottom>
          <ItemText>
            <h1 style={{ fontSize: "2 rem" }}>{title}</h1>
            <p style={{ fontSize: "2 rem" }}>{description}</p>
          </ItemText>
        </Fade>
        <Buttons>
          <Fade bottom>
            <ButtonGroup>
              <LeftButton>{leftBtnText}</LeftButton>
              {rightButtonText ? (
                <RightButton>{rightButtonText}</RightButton>
              ) : (
                ""
              )}
            </ButtonGroup>
          </Fade>
          <DownArrow src="images/down-arrow.svg" />
        </Buttons>
      </TextContainer>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  z-index: 16;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  background-image: ${(props) => `url("images/${props.bgImage}")`};
`;

const TextContainer = styled.div`
  z-index: 0;
  position: absolute;
  right: 0;
  width: 25rem;
  margin-right: 10rem;
  @media (max-width: 768px) {
    position: static;
  }
`;

const ItemText = styled.div`
  padding-top: 15vh;
  margin-bottom: 2rem;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    float: right;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.85;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  margin-left: 50%;
`;

const Buttons = styled.div``;
