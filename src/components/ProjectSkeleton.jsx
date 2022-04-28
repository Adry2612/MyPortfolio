import React from 'react'
import styled from 'styled-components';

export default function ProyectSkeleton() {
    
  return (
    <ProyectContent>
        <Photo className='skeleton'/>
    </ProyectContent>
  )
}

const Photo = styled.div`
  background-size: cover;
  border-radius: 15px;
  width: 100%;
  height: 200px;
  transition: all ease 1s;
  box-shadow:
    2.1px 2px 28.7px rgba(0, 0, 0, 0.02),
    5.1px 4.7px 39.1px rgba(0, 0, 0, 0.028),
    9.6px 8.9px 44px rgba(0, 0, 0, 0.035),
    17.2px 15.9px 47.6px rgba(0, 0, 0, 0.042),
    32.2px 29.7px 53.7px rgba(0, 0, 0, 0.05),
    77px 71px 80px rgba(0, 0, 0, 0.07);

    &.skeleton{
        animation: skeleton-loading 1s infinite alternate;
        opacity: .7;
    }


    @keyframes skeleton-loading {
        0%{
            background-color: hsl(200, 20%, 70%);
        }
        100%{
            background-color: hsl(200, 20%, 95%);
        }
    }

    @media screen and (max-width: 1050px){
        width: 100%;
        background-position: center;
    }

`

const ProyectContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 400px;
  z-index: 9998;

  @media screen and (max-width: 1050px){
    width: 70vw;
  }
  @media screen and (max-width: 500px){
    width: 90vw;
  }
`