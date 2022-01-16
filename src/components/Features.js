import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
const Features = () => {
  return (
    <Wrap>
      <Fade left>
        <Container>
          <h1>Features</h1>
          <TextContainer>
            <Ftimg src="images/feature1.png" />
            <p>Glide at constant speed of 6km/hr at the push of a button.</p>
          </TextContainer>
          <TextContainer>
            <Ftimg src="images/feature2.png" />
            <p>Ecofriendly vehicle, No pollution</p>
          </TextContainer>
          <TextContainer>
            <Ftimg src="images/feature3.png" />
            <p>
              Pedal with upto 90% electric assist. Choose the electric support
              you need out of 3 settings high, medium, low.
            </p>
          </TextContainer>
          <TextContainer>
            <Ftimg src="images/feature4.png" />
            <p>All services available here</p>
          </TextContainer>
        </Container>
      </Fade>
      <Fade right>
        <SideImage src="images/back4.jpg" />
      </Fade>
    </Wrap>
  );
};

export default Features;

const Wrap = styled.div`
  z-index: 16;
  width: 100vw;
  height: 100vh;
  padding: 3rem;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: row;
  }
  h1 {
    text-align: center;
  }
`;
const Container = styled.div`
  z-index: 16;
  padding: 7rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: dashed black 3px;
  border-radius: 15%;

  @media (max-width: 768px) {
    padding: 1rem;
    justify-content: space-between;
    border: none;
    text-align: center;
  }
`;
const TextContainer = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;

  p {
    display: flex;
    padding-left: 3rem;
    margin-top: 10px;

    @media (max-width: 768px) {
      padding-left: 4.5px;
      margin-top: 5px;
      font-size: 1.3rem;
    }
  }
`;
const Ftimg = styled.img`
  z-index: 0;
  padding: 3px;
  border: solid black;
  display: flex;
  height: 4rem;
  width: 4rem;
  border-radius: 20%;
`;
const SideImage = styled.img`
  height: 100%;
  border-radius: 20%;

  @media (max-width: 1120px) {
    display: none;
  }
`;
