import React from "react";
import styled from "styled-components";
const BikeDescription = (props) => {
  console.log("hii");
  return (
    <Container>
      <Bike src={props.data.imgUrl} />
      <TextContainer>
        <h1>{props.data.name}</h1>
        <h3>{props.data.description}</h3>
        <p>₹ {props.data.price}.00</p>
        <ButtonGroup>
          <LeftButton>Book Now</LeftButton>
          <RightButton>Know More</RightButton>
        </ButtonGroup>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 32rem;
  box-shadow: 7px 7px 5px grey;
  margin: 0rem 1rem;
  background: #f5f5f5;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    margin: 1rem 2rem;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;

  h1 {
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px 0;
  }
  h3 {
    font-weight: 200;
  }
  p {
    font-weight: 100;
    color: grey;
    padding: 1rem 0;
  }
`;

const Bike = styled.img`
  height: 50%;
  width: 100%;
  display: flex;
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
  margin: 3px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.85;
  color: black;
  border: solid black;
`;

export default BikeDescription;
