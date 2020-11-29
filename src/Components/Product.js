import React from "react";
import Styled from "styled-components";
import { styled } from "@material-ui/core/styles";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../state/StateProvider";

const ProductContainer = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
margin: 10px;
padding: 20px;
width: 100%;
max-width: 400px;
min-width: 100px;
background-color: white;
z-index: 1;
`;
const ProductInfo = Styled.div`
heigh: 100px;
margin-bottom: 15px;
`;
const ProductPrice = Styled.p`
margin-top: 5px;
`;
const ProductRaiting = Styled.div`
display: flex;
`;
const ProductImg = Styled.img`
max-height: 200px;
width: 100%;
object-fit: contain;
margin-bottom: 15px;
`;
const RatingStar = styled(StarRateIcon)({});

const AddToBasket = Styled.button`
width: 100px;
height: 20px;
background: #f0c14b;
border: 1px solid;
margin-top: 5px;
border-color: #a88734;
color: #111;
`;

//
function Product({ id, title, image, price, raiting }) {
  const [state, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: 1,
        title: title,
        image: image,
        price: price,
        raiting: raiting,
      },
    });
  };

  return (
    <ProductContainer>
      <ProductInfo>
        <p>{title}</p>
        Developers supper Pack
        <ProductPrice>
          <small>$</small>
          <strong>{price}</strong>
        </ProductPrice>
        <ProductRaiting>
          {Array(raiting)
            .fill()
            .map((_, i) => (
              <RatingStar></RatingStar>
            ))}
        </ProductRaiting>
      </ProductInfo>
      <ProductImg src={image}></ProductImg>
      <AddToBasket onClick={addToCart}>Add to cart</AddToBasket>
    </ProductContainer>
  );
}

export default Product;
