import React from 'react'
import styled from 'styled-components'
import image from '../assets/photo.jpeg';
export default function Presentation() {
  return (
    <Content id="presentation">
        <img className="image" src={image} width="200" height="200" alt="" />

        <Description>
            <span id="sayhi">
                Hola! 👋
            </span>
            <span className='decoration'> </span>
            <br />

            <Hi>
                Me llamo <span className='myName'> Adrián Vidal </span> y soy un desarrollador web junior y amante de la
                tecnología ubicado en Valencia <span className='country'> ES </span> .
            </Hi>

            <Hi>
                Este es mi portfolio, el lugar donde escribo acerca de mis proyectos y
                las cosas que he aprendido. 😀
            </Hi>

            <a href="/files/curriculum.pdf" download="Curriculum de Adrián Vidal">
                <DownloadButton>
                    Descarga mi CV
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-download"
                        viewBox="0 0 16 16"
                    >
                        <path
                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                        />
                        <path
                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                        />
                    </svg>
                </DownloadButton>
            </a>
        </Description>
  </Content>
  )
}

const Content = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: black;

    & > .image{
        background-color: grey;
        width: 25rem;
        height: 25rem;
        object-fit: cover;
        border-radius: 5px;
        margin-left: 2rem;
    }

    @media screen and (max-width: 1050px){
        & > .image{
            width: 14rem;
            height: 14rem;
            margin-left: 2rem;
        }
    }

    @media screen and (max-width: 800px){
        flex-direction: column;
    
        & > .image{
            width: 16rem;
            height: 16rem;
            margin: 18rem 0 2rem 0;
        }
    }

    @media screen and (max-width: 800px) and (max-height: 700px){
        flex-direction: row;

        & > .image{
            width: 16rem;
            height: 16rem;
            margin: 18rem 0 2rem 0;
        }
    }

    @media screen and (max-width: 600px){
        & > .image{
            width: 14rem;
            height: 14rem;
            margin-top: 8rem;
        }
    }
`;

const Description = styled.div`
    width: 35rem;
    text-align: left;
    text-justify: left;
    font-size: 1.6rem;
    text-size-adjust: auto;
    display: flex;
    flex-direction: column;
    color: #242424;
    margin: 0 2rem 0 2rem;

    & > #sayHi{
        font-size: 2rem;
        font-weight: bold;
    }

    & > .decoration{
        height: 1px;
        width: 80px;
        margin-top: 5px;
        background-color: #616161;
        opacity: 0.2;
        z-index: -1;
    }

    & > a{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

    @media screen and (max-width: 1050px){
        margin-top: -1rem;
        & > #sayHi{
            font-size: 1.6rem;
        }

        & > .decoration{
            width: 65px;
        }
    }

    @media screen and (max-width: 800px){
        font-size: 1.6rem;
        width: 70vw;
        margin: 2rem;

        & > #sayHi{
            font-size: 1.8rem;
        }
    }
`;

const Hi = styled.div`
    margin-top: 1rem;

    & > .myName{
        font-weight: bold;
    }

    & > .country{
        letter-spacing: 3px;
    }

    @media screen and (max-width: 1050px){
        font-size: 1.2rem;
        width: 80vw;

        & > button{
            font-size: 1rem;
            padding: 1.2rem;
            margin-top: 1rem;
        }
    }

    @media screen and (max-width: 800px){
    
    }
`;

const DownloadButton = styled.button`
    align-self: center;
    font-size: 1.2rem;
    padding: 1.4rem;
    margin-top: 2rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 0.2s all ease;
    box-shadow:
        0 6.7px 5.3px rgba(0, 0, 0, 0.028),
        0 22.3px 17.9px rgba(0, 0, 0, 0.042),
        0 100px 80px rgba(0, 0, 0, 0.07);

        & > svg{
            margin-left: 0.6rem;
        }

        &:hover{
            background-color: hsl(0, 90%, 65%);
            color: white;
        }
`;
