import React,{ Fragment} from 'react'
import Styled from "styled-components";
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../state/StateProvider';
import { getCartTotal } from '../reducer/reducer';

const MainContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 300px;
margin-left: 20px;
height: 100px;
padding: 20px;
background-color: #f3f3f3;
border: 1px solid #dddddd;
border-radius: 3px;
`;
const ProceedCheckOutButton = Styled.button`
width: 100%;
margin-top: 10px;
height: 20px;
border-radius: 2px;
`;


function SubTotal() {
    const [{cart}, dispatch] = useStateValue();
    return (
        <MainContainer>
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                    <p>
                        {`SubTotal (${cart.length})`}: <strong>
                            {value}
                        </strong>
                    </p>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"} >
            </CurrencyFormat>
            <ProceedCheckOutButton>proceed to pay</ProceedCheckOutButton>

        </MainContainer>
    )
}

export default SubTotal
