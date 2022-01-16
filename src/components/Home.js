import React from "react";
import styled from "styled-components";
import Features from "./Features";
import Section from "./Section";
import Characteristics from "./Characteristics";
import ModalCarousal from "./ModalCarousal";
import Footer from "./Footer";
const Home = () => {
  const battery =
    "The powerhouse of an e-bike, Our Li-ion batteries are BIS certified and IP67 rating makes them water repellent and provides 100% dust protection, to ensure you ride carefree in all weathers.";
  const motor =
    "Our e-bikes come fitted with a high torque, 250W BLDC motor. Highly efficient and more torque per watt. Powerful performance with silent operation and a longer life.";
  const display =
    "Manage all functions of your e-bike with the handy LED display. Switch the battery on-off or toggle between 4 modes, the IP65 rated display does it all eamlessly in all weathers.";
  const gears =
    "Ride the conventional way, all mechanical power. Pure pedaling, no electric support. Save battery.The powerhouse of an e-bike, Our Li-ion batteries are BIS certified and IP67 rating makes them water repellent and provides 100% dust protection";
  const img1 = "images/motor.jpg";
  const img2 = "images/battery.jpg";
  const img3 = "images/back2.jpg";
  const img4 = "images/headlight.jpg";

  return (
    <Container>
      <Section
        title="Kuber"
        description="Our goal is to build a  cleaner and greener future"
        backgroundImg="back5.jpg"
        leftBtnText="Custom Order"
        rightButtonText="Existing inventory"
      />
      <Features />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="back3.jpg"
        leftBtnText="View More"
        rightButtonText="Order Now"
      />
      <Title>Electrifying Characteristics</Title>
      <Characteristics
        title1="Motor"
        title2="Battery"
        text1={motor}
        text2={battery}
        bgImage1={img1}
        bgImage2={img2}
      />
      <Characteristics
        title1="Gears"
        title2="Display"
        text1={display}
        text2={gears}
        bgImage1={img3}
        bgImage2={img4}
      />

      <Title>Elegant Models</Title>
      <ModalCarousal />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;

const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 2rem 0px;
  font-weight: 400;
`;
