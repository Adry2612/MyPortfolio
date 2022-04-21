import React from 'react'
import styled from 'styled-components';

export default function Tecnology({nombre, description, learned, category, icon}) {

  return (
    <TecnologyWrapper>
      <img src={`https://adrian-vidal-portfolio-api.herokuapp.com/api/get-image/${icon}`} alt="" />

      <Info> 
        <span className='title'> {nombre} </span>
        <span className='description'> {description}</span>
      </Info>
    </TecnologyWrapper>
  )
}

const TecnologyWrapper = styled.div`
    background-color: #fff;
    border: 1px solid #EDF2F7;
    width: 20rem;
    height: 5rem;
    border-radius: 5px;
    margin: 1rem 0 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.3s ease;

    & > img{
      width: 50px;
      height: 50px;
    }

    &:hover{
      transform: scale(1.05);
      box-shadow:
        0 6.7px 5.3px rgba(0, 0, 0, 0.044),
        0 22.3px 17.9px rgba(0, 0, 0, 0.066);
    }
    
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 60%;
  color: #616161;

  & > .title{
    color: hsl(0, 90%, 65%);
    font-size: 1rem;
    font-weight: bold;
  }
`