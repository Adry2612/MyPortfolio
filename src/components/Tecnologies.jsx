import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Tecnology from './Tecnology';
import TecnologySkeleton from './TecnologySkeleton';
export default function Tecnologies() {
  const [tecnologies, setTecnologies] = useState([]);
  const [selectedTecnologies, setSelectedTecnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    fetch('https://portfolio-api-5v66.onrender.com/api/tecnologies')
      .then(res => res.json())
      .then(data => {
        setSelectedTecnologies(data);
        setTecnologies((data.filter((tecnology) => tecnology.state === 'Learned')));
        setIsLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      })

  }, [])

  const selectCategory = (event) => {
    let buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].classList.contains('selected')) {
        buttons[i].classList.remove('selected')
      }
    }
    event.target.classList.add('selected')

    if (event.target.getAttribute('id') !== "learning") {
      setTecnologies(selectedTecnologies.filter(tecnology =>
        tecnology.category === event.target.getAttribute('id') && tecnology.state === "Learned"))
    }

    if (event.target.getAttribute('id') === "learning") {
      setTecnologies(selectedTecnologies.filter(tecnology =>
        tecnology.state === "Learning"))
    }

    if (event.target.getAttribute('id') === "all") {
      setTecnologies(selectedTecnologies.filter(tecnology =>
        tecnology.state === "Learned"));
    }
  }

  return (
    <TecnologiesContainer id="tecnologies">
      <Presentation>
        <span className="title"> Tecnologías </span>
        <span className="decoration"> </span>

        <p> Una lista de todas mis tecnologías favoritas y con las que suelo trabajar. También se pueden ver las que estoy aprendiendo actualmente. </p>
      </Presentation>

      <ControlButtons>
        <button id="all" className="selected" onClick={selectCategory}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-fill" viewBox="0 0 16 16"> <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" /></svg>
          Todo
        </button>
        <button id="front" onClick={selectCategory}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
          </svg>
          Desarrollo Front-End
        </button>
        <button id="back" onClick={selectCategory}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
            <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
          </svg>
          Desarrollo Back-End
        </button>
        <button id="others" onClick={selectCategory}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          Otros
        </button>
        <button id="learning" onClick={selectCategory}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>

          Aprendiendo actualmente
        </button>
      </ControlButtons>

      <AllTecnologies>
        {isLoading ?
          <>
            <TecnologySkeleton />
            <TecnologySkeleton />
          </>
          : (
            tecnologies.map((tecno) =>
              <Tecnology key={tecno.name}
                nombre={tecno.name}
                description={tecno.description}
                learned={tecno.state}
                category={tecno.category}
                icon={tecno.icon}
              />
            )
          )
        }
      </AllTecnologies>
    </TecnologiesContainer >
  )
}

const TecnologiesContainer = styled.div`
    width: 100vw;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
`;

const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    & > .title{
      font-size: clamp(5rem, 2.5vw, 7rem);
      color: hsl(0, 90%, 65%);
      opacity: 0.7;
      font-family: 'Grape Nuts', cursive;
      font-weight: bold;
    }

    & > .decoration{
        background-color: #616161;
        height: 1px;
        opacity: 0.2;
        margin-top: 5px;
        width: 160px;
        z-index: -1;
    }

    & > p{
        width: 80%;
        color: hsl(216, 15%, 52%);
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        line-height: 2.3rem;
    }

    @media screen and (max-width: 1050px){
        & > p{
            font-size: 1.2rem;
            line-height: 2.4rem;
        }
    }
`
const ControlButtons = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row wrap;
    cursor: pointer;

    & > button{
      width: 10rem;
      height: 2rem;
      border: none;
      border-radius: 5px;
      margin: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      box-shadow:
      0 6.7px 5.3px rgba(0, 0, 0, 0.028),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042),
      0 100px 80px rgba(0, 0, 0, 0.07);
      transition: all 0.5s ease;

      & > svg{
        width: 16px;
        height: 16px;
      }

      &.selected{
        background-color: hsl(0, 90%, 65%);
        color: #fff;

        & > svg{
          fill: #fff;
        }
      }

      &:hover{
        background-color: hsl(0, 90%, 65%);
        color: #fff;
        fill: #fff;

        & > img{
          fill: #fff;
        }
        
      }

      @media screen and (max-width: 1050px){
        justify-content: center;
        align-items: center;
        gap: 1.5rem;

      }
    }
`;

const AllTecnologies = styled.div`
    margin-top: 2rem;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 0 1rem 0 1rem;
    margin-bottom: 1rem;


    @media screen and (max-width: 1050px){
      margin-top: 2rem;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
`
