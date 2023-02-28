import React from 'react'
import styled from 'styled-components'

    const CoinContainer = styled.div`

        height: 300px;
        width: 400px;
        background: #f0f0f0;
        margin-bottom: 20px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 3px 8px rgba(0,0,0,0.2);
        padding-top: 10px;
        padding: 38px 0;


    `;

    const Img = styled.img`

        width: 64px;
        height: 64px;

    `;

    const Button = styled.button`

        padding: 15px 35px;
        border-radius: 10px;
        border: none;
        background: rgb(48,48,252);
        color: #fff;
        cursor: pointer;
        box-shadow: 3px 5px 15px grey;
    `;

    const Pfooter = styled.p`

        color: grey;
        font-size: 12px;
        

    `;

    const StyledH2 = styled.h2`
    
        text-shadow: 3px 5px 15px grey;

    `;

//1. propok felvétele
const Coin = ({name, symbol, icon, price}) => {
  return (
    <CoinContainer>
        <StyledH2>Név: {name}</StyledH2>
        <Img src={icon} alt={name}/>
        <h3>Ár: {Math.ceil(price*356)} HUF</h3>
        <h3>Icon: {symbol}</h3>
        <Button>Vétel</Button>
        <Pfooter>&copy; Created by Somossy László</Pfooter>
    </CoinContainer>
  )
}

export default Coin