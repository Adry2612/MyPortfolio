import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-scroll'

import logo from '../assets/logo.png';

export default function Header() {

    function activeMenu(e){
        const menu = document.querySelector('#menu');
        menu.classList.toggle('active')

        const icon = document.querySelector('#menuIcon');
        icon.classList.toggle('active');
    }

    function closeMenu(e){
        const icon = document.querySelector('#menuIcon');
        icon.classList.toggle('active');

        const menu = document.querySelector('#menu');
        menu.classList.remove('active')
    }


    return (
        <HeaderWrapper>
            <Logo>
                <img src={logo} alt="Logo de Adrián" />
            </Logo>

            <div id="menuIcon" onClick={activeMenu}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <Links id="menu">
                <Link to="presentation" spy={true} offset={-80} smooth={true} duration={0} onClick={closeMenu}> Presentación </Link>
                <Link to="about" spy={true} offset={-80} smooth={true} duration={0} onClick={closeMenu}> Sobre mi</Link>
                <Link to="proyects" spy={true} offset={-80} smooth={true} duration={0} onClick={closeMenu}> Proyectos</Link>
                <Link to="tecnologies" spy={true} offset={-80} smooth={true} duration={0} onClick={closeMenu}> Tecnologías </Link> 
            </Links>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
        0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
        0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
        0 100px 80px rgba(0, 0, 0, 0.07);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    backdrop-filter: blur(12px);
    z-index: 9999;

    & > #menuIcon{
        display: none;
        width: 60px;
        height: 24px;
        position: relative;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
    
        & > span {
            display: block;
            position: absolute;
            height: 2px;
            width: 60%;
            background: #d3531a;
            border-radius: 9px;
            opacity: 1;
            right: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            -moz-transition: .25s ease-in-out;
            -o-transition: .25s ease-in-out;
            transition: .25s ease-in-out;
        }

        & span:nth-child(1) {
            top: 0px;
        }
    
        & > span:nth-child(2), span:nth-child(3) {
            top: 12px;
        }
        
        & > span:nth-child(4) {
            top: 24px;
        }

        &.active{
            & > span:nth-child(1) {
                top: 18px;
                width: 0%;
                left: 50%;
            }

            & > span:nth-child(2) {
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                transform: rotate(45deg);
            }

            & > span:nth-child(3) {
                -webkit-transform: rotate(-45deg);
                -moz-transform: rotate(-45deg);
                -o-transform: rotate(-45deg);
                transform: rotate(-45deg);
            }

            & > span:nth-child(4) {
                top: 18px;
                width: 0%;
                left: 50%;
            }
        }

        @media screen and (max-width: 1050px){
            display: block;
        } 
    }

`
const Logo = styled.div`
    width: 10%;
    grid-template: "logo";
    
    & > img{
        width: 4.5rem;
    }
`
const Links = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > a{
        font-size: 1.1rem;
        text-decoration: none;
        padding: 10px;
        transition: all 0.3s ease;
        color: hsl(0, 90%, 65%);
        cursor: pointer;

        &.active{
            background-color: hsl(0, 90%, 65%);
            color: white;
            border-radius: 5px;
        }

        &:hover{
            border-bottom: 1px hsl(0, 90%, 65%) ;
        }
    }

    @media screen and (max-width: 1050px){
        width: 100vw;
        height: 40vh;
        position: fixed;
        align-self: center;
        transition: 1s transform ease;
        transform: translateY(-100%);
        display: flex;
        flex-direction: column;
        background-color: white;
        color: hsl(0, 90%, 65%);
        justify-content: space-around;
        align-items: center;
        border-radius: 0 0 15px 15px;
        z-index: -9999;
        box-shadow:
            6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
            22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
            100px 100px 80px rgba(0, 0, 0, 0.07);
        
        &.active{
            transform: translateY(23vh);
        }
    }
`
