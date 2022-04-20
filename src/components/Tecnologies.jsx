import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Tecnology from './Tecnology';

export default function Tecnologies() {
  const [tecnologies, setTecnologies] = useState([]);
  const [selectedTecnologies, setSelectedTecnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    fetch('https://adrian-vidal-portfolio-api.herokuapp.com/api/tecnologies')
      .then(res => res.json())
      .then(data => {
        setSelectedTecnologies(data);
        setTecnologies((data.filter((tecnology) => tecnology.state === 'Learned')));
        setIsLoading(false)
        
      })
      .catch(function(error){
        console.log(error);
      })

  }, [])

  const selectCategory = (event) => {
    let buttons = document.querySelectorAll('button');
    for (var i = 0; i<buttons.length; i++){
      if (buttons[i].classList.contains('selected')) {
        buttons[i].classList.remove('selected')
      }
    }
    event.target.classList.add('selected')

    if (event.target.getAttribute('id') !== "learning"){
      setTecnologies(selectedTecnologies.filter(tecnology => 
        tecnology.category === event.target.getAttribute('id') && tecnology.state === "Learned"))
    }

    if (event.target.getAttribute('id') === "learning"){
      setTecnologies(selectedTecnologies.filter(tecnology => 
        tecnology.state === "Learning" ))
    }

    if (event.target.getAttribute('id') === "all"){
      setTecnologies(selectedTecnologies.filter(tecnology => 
        tecnology.state === "Learned" ));
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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-fill" viewBox="0 0 16 16"> <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/></svg>
        Todo
      </button>
      <button id="front" onClick={selectCategory}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
        </svg>
        Desarrollo Front-End
      </button>
      <button id="back" onClick={selectCategory}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
        <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
        </svg>
        Desarrollo Back-End
      </button>
      <button id="others" onClick={selectCategory}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
        Otros
      </button>
      <button id="learning" onClick={selectCategory}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd"><path d="M7.902 14c-1.722-1.39-2.902-3.968-2.902-6.037 0-3.094 2.158-4.89 4.187-4.961.841-.013 1.729.199 2.394.57-.175-1.278-.747-2.259-1.344-2.958l1.367-.614c.283.407.572 1.129.761 1.979.383-.695.848-1.262 1.475-1.628.669-.391 1.778-.412 2.518-.272-.187.658-.577 1.513-1.491 2.075-.562.345-1.467.522-2.384.453.042.283.073.574.087.867.682-.364 1.44-.484 2.243-.472 2.029.071 4.187 1.867 4.187 4.961 0 2.069-1.18 4.647-2.902 6.037h6.902v2h-19.5c-.276 0-.5.224-.5.5s.224.5.5.5h19.5v2h-18.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5h18.5v2h-18.5c-1.932 0-3.5-1.568-3.5-3.5 0-.83.29-1.593.773-2.193-.476-.455-.773-1.097-.773-1.807 0-1.38 1.12-2.5 2.5-2.5h4.402zm15.098 7h-18v-1h18v1zm-10.986-15c-.663-.552-1.435-1.066-2.836-.996-1 .07-2.264 1.102-2.174 3.162.072 1.682 1.25 3.751 2.473 4.504.997.626 1.711.269 2.523-.214l.038.023c.796.471 1.504.807 2.485.191 1.223-.753 2.401-2.822 2.473-4.504.09-2.06-1.174-3.092-2.174-3.162-1.226-.062-2.02.43-2.808.996zm1.75.548c1.172 1.323.973 2.565-.16 4.907 1.07-.441 2.009-1.907 2-2.933-.011-1.246-.887-2.03-1.84-1.974z"/>
        </svg>
        Aprendiendo actualmente
        </button>
    </ControlButtons>

    <AllTecnologies>
      { isLoading ? 
      <p> Aqui no hay na </p>
      : (
          tecnologies.map((tecno) => 
            <Tecnology key={tecno.name}
              nombre={tecno.name}
              description={tecno.description} 
              learned={tecno.state} 
              category={tecno.category} 
              icon={tecno.icon}  /> 
          )
        )
      }
    </AllTecnologies>
  </TecnologiesContainer>
)}

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
  font-size: 8.3rem;
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
        font-size: 1.4rem;
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
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      box-shadow:
      0 6.7px 5.3px rgba(0, 0, 0, 0.028),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042),
      0 100px 80px rgba(0, 0, 0, 0.07);
      transition: all 0.5s ease;

      &.selected{
        background-color: hsl(0, 90%, 65%);
        color: #fff;
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
