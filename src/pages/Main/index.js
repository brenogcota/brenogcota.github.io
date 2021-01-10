import React from 'react'

import Footer from '../../components/Footer';
import TopBar from '../../components/TopBar';
import { Container, Section } from './styles';


function Main() {

    return (
        <>
            <Container>
                <TopBar/>
                <Section>
                    <article className="bio">
                        <h2>Hello, humans! 🤘</h2>
                        <div className="desc">
                            <p>I'm a web developer focused on backend development.
                                    Graduating in Systems Analysis and
                                    Development from the Federal Institute of
                                    northern Minas Gerais 🎓</p>
                            <p>Currently working at Codeby 💻 ⚡</p>
                            <p>🎸 guitarist in free time</p>
                        </div>
                        
                        <div className="social-media">
                            <a href="https://github.com/brenogcota" target="_blank">Github</a>
                            <a href="https://www.instagram.com/dbrno/" target="_blank">Instagram</a>
                            <a href="https://www.linkedin.com/in/breno-cota-a51711177/" target="_blank">LinkedIn</a>
                        </div>
                    </article>
                            
                    <img src='https://avatars1.githubusercontent.com/u/46490801?s=400&u=06d4c2565950ce04df5aee50db9d66c2ec29ccc0&v=4' alt="photo"/>
                </Section>

            </Container>

            <Footer/>
        </>
    );
}

export default Main;