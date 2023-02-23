import React, {useEffect, useState} from 'react'
import styled from 'styled-components';

export default function Experience({type, name, icon, startDate, endDate, description, tecnologies}) {
    return (
        <Card>
            { type === "job" 
                ?  ( <img src={`https://portfolio-api-5v66.onrender.com/api/get-jobs-image/${icon}`} alt="" /> ) 
                : ( <img src={`https://portfolio-api-5v66.onrender.com/api/get-education-images/${icon}`} alt="" /> )
            }
            <div className="content">
                <span> <p className="name"> {name} </p> </span>

                <p className="spendWork"> {description} </p>
                {
                    tecnologies !== '' 
                    ? (
                        <ul>
                            { tecnologies.map((tecno) => 
                                <li> {tecno} </li>
                            )}
                        </ul>
                            
                    ) 
                    : ''
                } 
            </div>

            <span className='timeline'/>
            <span className='time'>
                {startDate}
            </span>
            
            { 
                endDate ? (
                <span className='time endDate'>
                    {endDate}
                </span>
                ) : ''
            }
            
        </Card>
    )
}

const Card = styled.div`
    width: 60%;
    margin-top: 2rem;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #EDF2F7;
    border-radius: 5px;
    color: #616161;
    position: relative;

    & > .timeline {
        content: "";
        display: block;
        width: 0;
        height: 100%;
        border: 1px solid hsl(0, 90%, 65%);
        position: absolute;
        left: -50px;

        &:after {
            content: "";
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 20%;
            background: white;
            border: 2px solid hsl(0, 90%, 65%);
            position: absolute;
            left: -17.5px;
        }

        &:before {
            content: "";
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 20%;
            background: white;
            border: 2px solid hsl(0, 90%, 65%);
            position: absolute;
            left: -17.5px;
            top: -34px;
        }

        &:after {
            top: 100%;
            z-index: 5;
        }
    }

    & > .time {
        width: 4rem;
        position: absolute;
        left: -150px;
        color: hsl(0, 90%, 65%);
        font-size: 80%;
        font-weight: bold;
        top: 100%;
        text-align: end;

    }
    
    & .endDate{
        top: -25px;
        width: 4rem;
    }

        & > img {
            width: 7rem;
            height: 7rem;
            align-self: center;
            justify-self: center;
        }
    

    & > .content {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 50%;

        & > span {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content:center;
            gap: 6rem;
            font-size: 1rem;

            & > .name {
                color: hsl(0, 90%, 65%);
                font-size: 1.6rem;
                text-align: left;
            }
        }

        & > ul {
            display: flex;
            justify-content: space-evenly;
            list-style-type: none;
            width: 80%;
            flex-wrap: wrap;
            gap: .5rem;


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
            align-self: center;
            justify-self: center;
            margin-top: -1rem;
        }
    }
    
    @media screen and (max-width: 1050px){
        width: 60%;
        padding: 1rem;
        right: -3rem;

        & > img{
            width: 5rem;
            height: 5rem;
        }

        & > .content{
            
            & > span{
                gap: 1rem;
                font-size: 1rem;
            }

            & > ul{
                display: flex;
                justify-content: space-evenly;
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

    @media screen and (max-width: 500px){
        width: 45vw;
        padding: 1rem;
        flex-direction: column;

        & > img{
            width: 4rem;
            height: 4rem;
        }

        & > .content{
            & > span{
                gap: 1rem;
                font-size: 1rem;
            }

            & > .name {
                text-align: center;
            }

            & > ul{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0;

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