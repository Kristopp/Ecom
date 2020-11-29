import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { styled } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Logo from "../assets/b0f5ceec-1301-4a9b-b7c0-689ad363218d_200x200.png";
import { useStateValue } from "../state/StateProvider";
import { auth } from "../firebase";

const MainContainer = Styled.div`
height: 60px;
margin: 0px;
display: flex;
align-items: center;
background-color: #131921;
position: sticky;
top: 0;
z-index: 100;
`;

const HeaderLogo = Styled.img`
width: 100px;
object-fit: contain;
margin: 0 20px;
`;

const HeaderSearchContainer = Styled.div`
display: flex;
flex: 1;
align-items: center;
boder-radius: 24px;
`;

const HeaderSearchInput = Styled.input`
height: 12px;
padding: 10px;
border: none;
width: 100%;
`;

const HeaderNavContainer = Styled.div`
display: flex;
justify-content: space-evenly;

`;

const HeaderNavButtons = Styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
margin-right: 10px;
color: white;
`;
const HeaderNavButtonText = Styled.span`
font-size: 15px;
font-wight: 800;
`;

const HeaderIcon = styled(SearchIcon)({
  padding: "5px",
  height: "22px",
  backgroundColor: "#cd9042",
});

const CartContainer = Styled.div`
display: flex;
flex-direction: row;
`;
const ShoppingCartStyled = styled(ShoppingCartIcon)({
  display: "flex",
  alignItems: "center",
  color: "#cd9042",
});
const ShoppingCartCounter = Styled.span`
color: white;
font-size: 15px;
font-wight: 800;
margin: 5px;
`;
function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  const handleAuthentication = () => { 
    if(user) { 
      auth.signOut();
    }
  }
  return (
    <MainContainer>
      <Link to="/">
        <HeaderLogo src={Logo}></HeaderLogo>
      </Link>
      <HeaderSearchContainer>
        <HeaderSearchInput></HeaderSearchInput>
        <HeaderIcon></HeaderIcon>
      </HeaderSearchContainer>
      <HeaderNavContainer>
        <Link to={!user && '/login'}>
          <HeaderNavButtons onClick={handleAuthentication}>
  <HeaderNavButtonText>{user ? 'Sign in' : 'Sign out'}</HeaderNavButtonText>
          </HeaderNavButtons>
        </Link>
        <HeaderNavButtons>
          <HeaderNavButtonText>Orders & returns</HeaderNavButtonText>
        </HeaderNavButtons>
        <HeaderNavButtons>
          <HeaderNavButtonText>Premium</HeaderNavButtonText>
        </HeaderNavButtons>
        <Link to="/checkout">
          <CartContainer>
            <ShoppingCartStyled></ShoppingCartStyled>
            <ShoppingCartCounter>{cart?.length}</ShoppingCartCounter>
          </CartContainer>
        </Link>
      </HeaderNavContainer>
    </MainContainer>
  );
}

export default Header;
