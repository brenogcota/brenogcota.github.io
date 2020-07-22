import React from 'react'

import { Container, Section, Footer } from './styles';

import photo from '../../assets/profile.png';
import gitico from '../../assets/github.png';
import instaico from '../../assets/insta.png';
import linkedico from '../../assets/linkedin.png';

function Main() {
    return (
        <>
            <header></header>
            <Container>
                <Section>
                    <div>
                        <h2>Breno Cota</h2>
                        <p>Olá, meu nome é Breno, tenho 21 anos e sou Desenvolvedor de Software

                        </p>

                        <a href="https://github.com/brenogcota" target="_blank"><img src={ gitico } alt="github"/></a>
                        <a href="https://www.instagram.com/dbrno/" target="_blank"><img src={ instaico } alt="instagram"/></a>
                        <a href="https://www.linkedin.com/in/breno-cota-a51711177/" target="_blank"><img src={ linkedico } alt="linkedin"/></a>

                    </div>
                            
                    <img src={ photo } alt="photo"/>
                     
                </Section>
                
            </Container>

            <Footer>
                <a href="https://api.whatsapp.com/send?phone=5533999078935&text=Oi" target="_blank"><p>(33) 999078935 </p></a>
                <p> © Copyright 2020. </p>
            </Footer>
        </>
    );
}

export default Main;