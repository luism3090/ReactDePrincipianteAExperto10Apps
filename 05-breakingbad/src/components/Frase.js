import React from 'react'
import styled from 'styled-components';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:800px;
    margin-top: 10rem;

    @media (min-width: 992px) {
        margin-top: 10rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -3rem;
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        font-weight:bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

export const Frase = (props) => {

    const { quote, author} = props.frase;

  return (
    <ContenedorFrase>
        <h1>{quote}</h1>
        <p>- {author}</p>
    </ContenedorFrase>
  )
}
