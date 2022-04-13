import React , {useEffect, useState} from 'react'
import styled from 'styled-components';

export default function Proyects() {
  const [proyects, setProyects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://adrian-vidal-portfolio-api.herokuapp.com/api/proyects')
      .then(res => res.json())
      .then(data => {
        setProyects(data);
        setIsLoading(false)
        
      })
      .catch(function(error){
        console.log(error);
      })

  }, [])
  
  const openAccordion = (e) => {
    console.log(e.target)
    e.target.parentElement.classList.toggle('active')
  }

  return (
    <ProyectsPage id="proyects">
      <Title onClick={openAccordion}> Projectos </Title>

      <Container>
      {console.log(proyects)}
      {proyects.map((proyect) => 
        <Proyect onClick={openAccordion}>
          <Photo img={`https://adrian-vidal-portfolio-api.herokuapp.com/api/get-proyect-images/${proyect.img}`}/>
          {console.log(`https://adrian-vidal-portfolio-api.herokuapp.com/api/get-proyect-images/${proyect.img}`)}
          <Card>
            <h1> {proyect.name} </h1>

            <div className='links'>
              <a href={proyect.deploy_url}> 
                <i class="fa-solid fa-arrow-pointer"></i> Ver despliegue
              </a>
              <a href={proyect.repo_url}>  
                <i className="fa-brands fa-github"></i> Ver repositorio 
              </a>
            </div>
            <span/>
            <div className='labels'>
              {proyect.labels.split(',').map((label) => <p> {label}</p>)}
            </div>
          </Card>
        </Proyect>
      )
      }
      </Container>

    </ProyectsPage>
  )
}


const ProyectsPage = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 8.3rem;
  color: hsl(0, 90%, 65%);
  opacity: 0.7;
  font-family: 'Grape Nuts', cursive;
`


const Container = styled.div`
  display: grid;
  width: 70%;
  align-self: center;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  position: relative;
  top: -8rem;
`

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
  }
`

const Proyect = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 400px;

  &.active {
    ${Photo}{
      transform: translateY(-10%);
    }
    
    ${Card} {
      height: 16rem;
    }
  }
`

