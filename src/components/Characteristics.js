import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Characteristics = (props) => {
  return (
    <Wrap>
      <Fade right>
        <Container>
          <Text>
            <h3>{props.title1}</h3>
            {props.text1}
          </Text>
          <CharImg src={`${props.bgImage1}`} />
        </Container>
      </Fade>
      <Fade left>
        <Container1 className="direction">
          <CharImg src={`${props.bgImage2}`} />
          <Text>
            <h3>{props.title2}</h3>
            {props.text2}
          </Text>
        </Container1>
      </Fade>
    </Wrap>
  );
};
const Wrap = styled.div`
  z-index: 16;
  height: 100vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1120px) {
    padding: 1rem;
  }
`;
const Container = styled.div`
  padding: 4rem 10rem;
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 1rem 3rem;
  }
`;
const Container1 = styled.div`
  padding: 4rem 10rem;
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 3rem;
  }
`;

const Text = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  justify-content: center;
  font-size: 1.3rem;

  h3 {
    text-align: center;
    padding-bottom: 5px;
    border-bottom-style: solid;
    border-bottom-width: 6px;
    border-bottom-color: #d3d3d3;
    width: fit-content;
  }
  @media (max-width: 1120px) {
    padding: 0rem;
  }
`;
const CharImg = styled.img`
  width: 50%;
  height: 110%;
  display: flex;
`;
export default Characteristics;
