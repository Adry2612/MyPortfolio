import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-scroll'

import logo from '../assets/logo.png';

export default function Header() {

    function activeMenu(e){
        const menu = document.querySelector('#menu');
        menu.classList.add('active')

        const icon = document.querySelector('#close');
        icon.classList.add('active');
    }

    function closeMenu(e){
        const closeIcon = document.querySelector('#close');
        closeIcon.classList.add('active');

        const menu = document.querySelector('#menu');
        menu.classList.remove('active')
    }


    return (
        <HeaderWrapper>
            <Logo>
                <img src={logo} alt="" />
            </Logo>

            <i class="fa-solid fa-bars" onClick={activeMenu} id="menuIcon"></i>

            <Links id="menu">
                <Link to="presentation" spy={true} offset={0} smooth={true} duration={0} onClick={closeMenu}> Presentación </Link>
                <Link to="about" spy={true} offset={-100} smooth={true} duration={0} onClick={closeMenu}> Sobre mi</Link>
                <Link to="proyects" spy={true} offset={-100} smooth={true} duration={0} onClick={closeMenu}> Proyectos</Link>
                <Link to="tecnologies" spy={true} offset={-100  } smooth={true} duration={0} onClick={closeMenu}> Tecnologías </Link> 
                <i class="fa-solid fa-xmark" id="close" onClick={closeMenu}></i>
            </Links>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: #fff;
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

    & > i{
        display: none;
        font-size: 2rem;
        color: hsl(0, 90%, 65%);
    }

    @media screen and (max-width: 1050px){
        height: 8vh;

        & > i{
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

    & > #close{
        display: none;
        position: absolute;
        top: 20px;
        right: 46px;    
        font-size: 38px;
    }

    &.active > #close{
        display: block;
    }

    @media screen and (max-width: 1050px){
        display: none;
        width: 100vw;
        height: 101vh;
        position: fixed;
        transition: 4s transform ease;
        transform: translateY(-100%);
        
        &.active{
            display: flex;
            flex-direction: column;
            background-color: white;
            color: hsl(0, 90%, 65%);
            justify-content: space-around;
            align-items: center;
            top: 0rem;
            position: fixed;
            overflow: hidden;
            transform: translateY(0);
        }
    }
`
