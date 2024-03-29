import React , {useEffect, useState} from 'react'
import styled from 'styled-components';

import Proyect from './Proyect';
import ProyectSkeleton from './ProjectSkeleton';

export default function Proyects() {
  const [proyects, setProyects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://portfolio-api-5v66.onrender.com/api/proyects')
      .then(res => res.json())
      .then(data => {
        setProyects(data);
        setIsLoading(false)
      })
      .catch(function(error){
        console.log(error);
      })

  }, [])
  

  return (
    <ProyectsPage id="proyects">
      <Presentation>
        <span className="title"> Proyectos </span>
        <span className="decoration"> </span>

        <p> A continuación unos pocos de los proyectos personales que más me gustan y con los que más cariño he creado. Tambien puedes echar un vistazo a todos mis proyectos. </p>
      </Presentation>

      <Container>
      { isLoading 
        ?  <>
            <ProyectSkeleton />
            <ProyectSkeleton />
          </>
        : proyects.map((proyect) => 
            <Proyect 
              name={proyect.name}
              image={proyect.img} 
              deploy={proyect.deploy_url} 
              repo={proyect.repo_url} 
              labels={proyect.labels}   
            /> 
          )
      }
      </Container>
    </ProyectsPage>
  )
}


const ProyectsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

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
          line-height: 2.4rem;
        }
    }
`

const Container = styled.div`
  display: grid;
  width: 70%;
  align-self: center;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  position: relative;

  @media screen and (max-width: 1050px){
    width: 90%;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
  }
    
`

