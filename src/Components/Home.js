import React from "react";
import Product from "./Product";
import Styled from "styled-components";
import image from "../assets/wall-wallpaper-concrete-colored-painted-textured-concept_53876-31799.jpg";

const HomeContainer = Styled.div`
display: flex;
justify-content: center;
margin-left: auto;
margin-right: auto;
max-width: 1500px;
/* position: absolute; */
`;
const HomeBackGroundImg = Styled.img`
width: 90%;
z-index: -1;
margin-bottom: -150px;
mask-image: linear-gradient(to bottom , rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
position: absolute;
`;

const ProductRow = Styled.div`
display: flex;
/* justify-content: center; */
z-index: 1;
margin-left: 5px;
margin-right: 5px;
`;

function Home() {
  return (
    <HomeContainer>
        <HomeBackGroundImg src={image}></HomeBackGroundImg>
        <ProductRow>
          <Product
            title="sample title"
            price={29.99}
            image="https://cdn.shopify.com/s/files/1/2177/5447/products/Fitz-Porsche-Ultimate-Series_700x700.jpg?v=1569320737"
            raiting={3}
          ></Product>
          <Product></Product>
        </ProductRow>
        <ProductRow>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </ProductRow>
        <ProductRow>
          <Product></Product>
        </ProductRow>
    </HomeContainer>
  );
}

export default Home;
