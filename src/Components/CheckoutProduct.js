import React from "react";
import Styled from "styled-components";
import { styled } from "@material-ui/core/styles";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../state/StateProvider";

const CheckOutContainer = Styled.div`
`;
const CheckOutProduct = Styled.div`
display: flex;
margin-top: 20px;
margin-bottom: 20px;

`;
const CheckOutProductImg = Styled.img`
object-fit: contain;
width: 180px;
height: 180px;
`;
const CheckOutProductInfo = Styled.div`
padding-left: 20px;
`;
const CheckOutProductTitle = Styled.p`
font-size: 17px;
font-weight: 700;
letter-spacing: 1px;
`;
const CheckOutProductPrice = Styled.p``;
const CheckOutProductRaiting = Styled.p`
display: flex;
`;
const RatingStar = styled(StarRateIcon)({});
const CheckOutButton = Styled.button`
width: 100px;
height: 20px;
background: #f0c14b;
border: 1px solid;
margin-top: 10px;
border-color: #a88734;
color: #111;
`;

function CheckoutProduct({ id, image, title, price, raiting }) {
    const [state, dispatch] = useStateValue();
    const removeItemCart = () => { 
        dispatch({ 
            type: "REMOVE_ITEM_FROM_CART",
            id: id,
        })
    }
  return (
    <CheckOutContainer>
      <CheckOutProduct>
        <CheckOutProductImg src={image} />
        <CheckOutProductInfo>
          <CheckOutProductTitle>{title}</CheckOutProductTitle>
          <CheckOutProductPrice>{price}</CheckOutProductPrice>
          <CheckOutProductRaiting>
            {Array(raiting)
              .fill()
              .map((_, i) => (
                <RatingStar></RatingStar>
              ))}
          </CheckOutProductRaiting>
        <CheckOutButton onClick={removeItemCart}>remove item</CheckOutButton>
        </CheckOutProductInfo>
      </CheckOutProduct>
    </CheckOutContainer>
  );
}

export default CheckoutProduct;
