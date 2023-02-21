import React from 'react'
import styled from 'styled-components';

export default function TecnologySkeleton() {

  return (
    <TecnologyWrapper>
      <div className='img skeleton'/>

      <Info> 
        <span className='title skeleton skeleton-text' />
        <span className='title skeleton skeleton-text' />
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

    & > .img{
      width: 50px;
      height: 50px;
    }

    &:hover{
      transform: scale(1.05);
      box-shadow:
        0 6.7px 5.3px rgba(0, 0, 0, 0.044),
        0 22.3px 17.9px rgba(0, 0, 0, 0.066);
    }

    & .skeleton{
        animation: skeleton-loading 1s infinite alternate;
        opacity: .7;
    }

    & .skeleton-text{
        max-width: 80%;
        height: .5rem;
        border-radius: .125rem;
        margin-bottom: 0.2rem;

        &:last-child{
            max-width: 100%;
        }
    }
    
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 60%;
  color: #616161;
`