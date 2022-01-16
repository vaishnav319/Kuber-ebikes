import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <Logo src="images/icon4.png" />
      <Menu>
        <a>Home</a>
        <a>About Us</a>
        <a>Shop</a>
        <a>Become a Dealer</a>
      </Menu>
      <RightMenu>
        <UserImg src="https://avatars.githubusercontent.com/u/68817230?s=400&u=3014ff3829d06fd5d1451ab4a756933f2548150e&v=4" />
        <BurgerrNav
          onClick={() => setBurgerStatus(true)}
          src="images/burgerNav.png"
        />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>

        <li>
          <a>Model X</a>
        </li>
        <li>
          <a>Model X</a>
        </li>
        <li>
          <a>Model X</a>
        </li>

        <li>
          <a href="#">Existing inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-Inn</a>
        </li>
        <li>
          <a href="#">CyberTruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Existing inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 120px;
  padding: 4px 0;
  @media (max-width: 768px) {
    padding: 0px 1px;
  }
`;
const Menu = styled.div`
  display: flex;
  padding-left: 3rem;
  flex: 1;

  a {
    letter-spacing: 2px;
    color: white;
    text-transform: uppercase;
    padding: 0 12px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    color: white;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  color: #f4b400 !important;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  text-align: start;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0px 15px;
  @media (max-width: 768px) {
    margin-right: 13px;
  }
`;
const BurgerrNav = styled.img`
  width: 30px;
  height: 28px;
  margin: 0px 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0px 1px;
  }
`;
