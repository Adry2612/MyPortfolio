import React from 'react'
import styled from 'styled-components';

export default function Proyect({name, image, deploy, repo, labels}) {
    const openAccordion = (e) => {
        e.target.parentElement.classList.toggle('active')
    }

  return (
    <ProyectContent onClick={openAccordion}>
        <Photo img={`https://portfolio-api-one.vercel.app/api/get-proyect-images/${image}`}/>

        <Card>
            <h1> {name} </h1>

            <div className='links'>
            {deploy != '' ? (
                <a href={deploy}> 
                    <i className="fa-solid fa-arrow-pointer"></i> Ver despliegue
                </a>
            ) : '' }
            {repo != '' ? (
                <a href={repo}>  
                    <i className="fa-brands fa-github"></i> Ver repositorio 
                </a>
            ) : '' }
            </div>

            <span/>
            
            <div className='labels'>
                {labels.split(',').map((label) => <p> {label} </p>)}
            </div>
        </Card>
    </ProyectContent>
  )
}

const Photo = styled.div`
  background-image: url(${props => props.img});
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

  @media screen and (max-width: 1050px){
    width: 100%;
    background-position: center;
  }

`
const Card = styled.div`
  background-color: hsl(0, 90%, 65%);
  border-radius: 0 0 15px 15px;
  height: 0;
  padding: 0em;
  transition: all ease 1s;
  color: white;
  overflow: hidden;
  position: relative;
  top: -35px;
  z-index: -5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & >span{
    content: "";
    width: 80%;
    border: .5px solid white;
    color: white;
    margin: 20px;
    
  }
  & >.links{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    & >a{
      text-decoration: none;
      border-radius: 5px;
      border: none;
      margin: 0 20px;
      padding: 5px 10px;
      background-color: hsl(0, 40%, 55%);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      cursor: pointer;

      & > i{
        margin: 5px;
        font-size: 16px;
      }
    }
  }

  & >.labels{
    display: flex;
    flex-direction: row;  
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    
    & >p{
      border: 1px solid white;
      background-color: white;
      color: hsl(0, 90%, 65%);
      padding: 5px;
      margin: 3px 5px;
      border-radius: 20px;
    }

    @media screen and (max-width: 1050px){
      width: 100%;
    }
  }
`

const ProyectContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 400px;
  z-index: 9998;

  &.active {
    ${Photo}{
      transform: translateY(-10%);
    }
    
    ${Card} {
      height: 16rem;
    }
  }

  @media screen and (max-width: 1050px){
    width: 70vw;
  }
  @media screen and (max-width: 500px){
    width: 90vw;
  }
`