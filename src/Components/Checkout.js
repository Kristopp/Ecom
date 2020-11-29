import React from 'react'
import Styled from "styled-components";
import { useStateValue } from '../state/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal'

const CheckOutContainer = Styled.div`
display: flex;
padding: 20px;
background-color: white;
height: max-content;
`;
const CheckOutLeft = Styled.div`
`;
const CheckOutRight = Styled.div``;
const TitleContainer = Styled.div``;
const CheckOutAd = Styled.img`
width: 100%;
margin-bottom: 10px;
`;
const CheckOutTitle = Styled.h2`
font-size: 17px;
font-wight: 800;
`;

function Checkout() {
    const [{cart, user}, dispatch] = useStateValue();
    console.log(user)
    return (
        <CheckOutContainer>
           <CheckOutLeft>
               <CheckOutAd />
               <TitleContainer>
    <h3>{user?.email}</h3>
                   <CheckOutTitle>
                       Your shop cart!
                   </CheckOutTitle>
               </TitleContainer>
               {cart.map(item => ( 
                   <CheckoutProduct
                   id={item.id}
                   title={item.title}
                   image={item.image}
                   price={item.price}
                   raiting={item.raiting}
                   />
                   ))}
           </CheckOutLeft>
                   <SubTotal></SubTotal>
           <CheckOutRight>
           </CheckOutRight>
        </CheckOutContainer>
    )
}

export default Checkout
