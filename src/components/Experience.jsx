import React, {useEffect, useState} from 'react'
import styled from 'styled-components';

export default function Experience({type, name, icon, startDate, endDate, description, tecnologies}) {
    return (
        <Card>
            { type === "job" 
                ?  ( <img src={`https://adrian-vidal-portfolio-api.herokuapp.com/api/get-jobs-image/${icon}`} alt="" /> ) 
                : ( <img src={`https://adrian-vidal-portfolio-api.herokuapp.com/api/get-education-images/${icon}`} alt="" /> )
            }
            <div className="content">
                <span> <p className="name"> {name} </p> <p className="date"> {startDate} - {endDate} </p> </span>

                <p className="spendWork"> {description} </p>
                {
                    tecnologies != '' 
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
        </Card>
    )
}

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