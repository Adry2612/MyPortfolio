import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import geotap from '../assets/work/geotap.svg';
import botet from '../assets/work/logo.svg';

export default function AboutMe() {
    // const [educations, setEducations] = useState([]);    
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // fetch("https://adrian-vidal-portfolio-api.herokuapp.com/api/education")
        //     .then(res => res.json())
        //     .then(data => setEducations(data))

        fetch("https://adrian-vidal-portfolio-api.herokuapp.com/api/jobs")
            .then(res => res.json())
            .then(data => setJobs(data))
    
        setIsLoading(false);
    }, [])
    
  return (
    <AboutMeContainer id="about">
        <Presentation>
            <span className="title"> Sobre mi </span>
            <span className="decoration"> </span>

            <p> Tengo 23 años y soy amante del desarrollo web, el diseño y la seguridad informática. Aunque con poca trayectoria profesional, mi objetivo es no parar de aprender y ser un mejor desarrollador.</p>
        </Presentation>

        <Content>
            <ExperienceBox className='Work'>
                <span className="title">
                Trayectoria Profesional
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                </svg>
                </span>
                <span className="decoration"> </span>

                {isLoading ? 
                <p> Mal </p>
                :
                jobs.map((job) => (
                    <Card>
                        <img src={geotap} alt="" />

                        <div className="content">
                            <span> <p className="name"> {job.name} </p> <p className="date"> {job.startDate} - {job.endDate} </p> </span>

                            <p className="spendWork"> {job.description} </p>
                            <ul>
                                <li> Flutter </li>
                                <li> Python </li>
                                <li> ColdFusion </li>
                                <li> Angular </li>
                            </ul>
                        </div>
                    </Card>

                ))}
            </ExperienceBox>

            <ExperienceBox className='Education'>
                <span className="title">
                    Estudios
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-book-fill" viewBox="0 0 16 16">
                    <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                    </svg>
                </span>
                <span className="decoration"> </span>

                <Card>
                    <img src={botet} alt="" />

                    <div className="content">
                        <span> <p className="name"> IES José Rodrigo Botet </p> <p className="date"> Septiembre 2018 - Junio 2021 </p> </span>

                        <p className="spendWork"> Tecnico en Desarrollo de Aplicaciones Web </p>
                    </div>
                </Card>

                <Card>
                    <img src={botet} alt="" />

                    <div className="content">
                        <span> <p className="name"> IES José Rodrigo Botet </p> <p className="date"> Septiembre 2016 - Junio 2018 </p> </span>

                        <p className="spendWork"> Tecnico en Sistemas Microinformartícos y Redes </p>
                    </div>
                </Card>
            </ExperienceBox>
        </Content>
    </AboutMeContainer>
  )
}

const AboutMeContainer = styled.div`
    width: 100vw;
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
const Content = styled.div`

    & > .title{
        color: black;
        font-size: 1.6rem;
        font-weight: bold;
        align-content: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        align-self: flex-start;

        & > svg{
            color: black;
            font-size: 1.6rem;
            font-weight: bold;
        }
    }

    & > .decoration{
        color: black;
        width: 280px;
        align-self: flex-start;
        z-index: -3;
    }

    @media screen and (max-width: 1050px){

    }   
`
const Card = styled.div`
    width: 60%;
    margin-top: 2rem;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #EDF2F7;
    border-radius: 5px;
    color: #616161;

    & > img{
        width: 6rem;
        height: 6rem;
        margin: 0 2rem 0 1rem;
    }

    & > .content{
        display: flex;
        flex-direction: column;

        & > span{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content:center;
            gap: 6rem;
            font-size: 1rem;

            & > .name{
                color: hsl(0, 90%, 65%);
                font-size: 1.6rem;
                text-align: left;
            }
        }

        & > ul {
            display: flex;
            justify-content: space-evenly;
            list-style-type: none;

            & > li{
                padding: 0.3rem;
                color: white;
                background-color: hsl(0, 90%, 65%);
                border-radius: 5px;
                margin-left: 5px;
            }
        }

        & > .spendWork{
            font-size: 1rem;
            align-self: flex-start;
            justify-self: flex-start;
            margin-top: -1rem;
        }
    }
    
    @media screen and (max-width: 1050px){
        width: 80%;
        padding: 1rem;

        & > img{
            width: 4rem;
            height: 4rem;
            margin: 0 2rem 0 1rem;
        }

        & > .content{
            & > span{
                gap: 1rem;
                font-size: 1rem;
            }

            & > ul{
                display: flex;
                justify-content: space-evenly;
                flex-flow: row wrap;
                gap: 0.5rem;

                & > li{
                    padding: 0.3rem;
                    color: white;
                    background-color: hsl(0, 90%, 65%);
                    border-radius: 5px;
                }
            }
        }
    }
    
`

const ExperienceBox = styled.div`
    width: 80vw;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
    & > .title{
        color: black;
        width: 1000px;
        align-self: left;
        font-size: 1.6rem;
        text-align: left;

        & > svg{
            margin-left: 16px;

        }
    }
    & > .decoration{
        color: black;
        width: 500px;
        align-self: flex-start;

        & > span{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content:center;
            gap: 6rem;
            font-size: 1rem;

                & > .title{
                    color: hsl(0, 90%, 65%);
                    font-size: 1.6rem;
                    text-align: left;
                }
        }
    }

    & > .spendWork{
        font-size: 1rem;
        align-self: flex-start;
        justify-self: flex-start;
        margin-top: -1rem;
    }

    @media screen and (max-width: 1050px){
        & > .title{
        text-align: center;
    }
    }
`
