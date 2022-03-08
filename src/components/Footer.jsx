import React from 'react'
import styled from 'styled-components';
// import twitter from '../assets/social/twitter.svg';
import github from '../assets/social/github.svg';
import infojobs from '../assets/social/infojobs.svg';
import linkedin from '../assets/social/linkedin.svg';
import email from '../assets/social/email.svg';

export default function Footer() {
  return (
    <FooterWrapper>
        <span> © 2021 Adrián Vidal López </span>
        <div class="social">
            <a href="https://github.com/Adry2612">
                <img src={github} alt="Github" />
            </a>
            <a href="https://linkedin.com/in/adrian-vidal-lopez-812b4b187">
                <img src={linkedin} alt="Linkedin" />
            </a>

            <a href="https://www.infojobs.net/candidate/my-infojobs.xhtml?dgv=1856105975303444127">
                <img src={infojobs} alt="Infojobs" />
            </a>

            <a href="mailto:adrianvidal2612@gmail.com">
                <img src={email} alt="Email" />
            </a>
        </div>
  </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15rem 1rem 15rem;
    margin-top: 5rem;
    
    & > span{
        color: #616161;
    }

    & > .social{
        width: 30%;
        display: flex;
        justify-content: space-evenly;

        & > a > img{
            width: 25px;
            height: 25px;
        }
    }

    @media screen and (max-width: 800px) {
        padding: 2rem 4rem 2rem 4rem;

        & > span{
            margin: 0 4rem 0 0;
        }
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > span{
            margin-left: 2.5rem;
        }
        
        & > .social{
            justify-content: center;
            margin-top: 0.6rem;

            & > a > img{
                justify-content: center;
                margin-top: 0.6rem;
                width: 50px;
            }
        }
        
    }
`