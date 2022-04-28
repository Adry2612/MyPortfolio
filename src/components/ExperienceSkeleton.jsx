import React, {useEffect, useState} from 'react'
import styled from 'styled-components';

export default function ExperienceSkeleton() {
    return (
        <Card>
            <div className='img skeleton' />
            <div className="content">
                <div className='text'> 
                    <span className="skeleton skeleton-text" />
                    <span className="skeleton skeleton-text" /> 
                </div>


                <div className='description'>
                    <span className="skeleton skeleton-text" />
                    <span className="skeleton skeleton-text" />
                </div>
                
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
    transition: 0.3s all ease;

    & > .img{
        width: 6rem;
        height: 6rem;
        margin: 0 2rem 0 1rem;
        background-color: red;
    }

    & > .content{
        display: flex;
        flex-direction: column;

        & > .text{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content:space-between;
            gap: 6rem;
            font-size: 1rem;    
            

        }

        & > .description{
            width: 100%;
            height: 2rem;
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
        }
    }
    
    & .skeleton{
        animation: skeleton-loading 1s infinite alternate;
        opacity: .7;
    }

    & .skeleton-text{
        width: 100%;
        height: .5rem;
        border-radius: .125rem;
        margin-bottom: 0.2rem;

        &:last-child{
            width: 15rem;
        }
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

    @media screen and (max-width: 500px){
        width: 80vw;
        padding: 1rem;
        flex-direction: column;

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