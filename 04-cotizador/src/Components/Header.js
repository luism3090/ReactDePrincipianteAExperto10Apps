import React from 'react'
import styled from 'styled-components'

const Cabecera = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFF;
`;

const Textoh1 = styled.h1`
    font-size: 2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
  return (
    <Cabecera>
        <Textoh1>{titulo}</Textoh1>
    </Cabecera>
  )
}

export default Header