import React, { useEffect, useState } from 'react';

import TopBar from '../../components/TopBar';
import { Container, Section } from './styles';

import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import spotify from '../../assets/spotify.png';
import brazil from '../../assets/brazil.png'

function Main() {
    const [user, setUser] = useState(null);

    useEffect(()=> {
        fetch('https://api.github.com/users/brenogcota')
            .then(response => response.json()) 
            .then( data => {
                setUser(data);
                console.log(data);
            })
            .catch( error => console.error(error));
    }, []);

    return (
        <>
            <Container>
                <TopBar/>
                <Section>
                    <article className="bio">
                        <h2>Hello, humans! 🤘</h2>
                        <div className="desc">
                            <p>I'm a Developer focused on web development.
                                    Graduating in Systems Analysis and
                                    Development from the Federal Institute of
                                    northern Minas Gerais 🎓</p>
                            <p>Currently working at Codeby 💻 ⚡</p>
                            <p>🎸 guitarist in free time</p>
                        </div>
                        
                        <div className="social-media">
                            <a href="https://github.com/brenogcota" target="_blank">
                                <img src={github} alt="github"/>
                            </a>
                            <a href="https://www.instagram.com/dbrno/" target="_blank">
                                <img src={instagram} alt="instagram"/>
                            </a>
                            <a href="https://www.linkedin.com/in/breno-cota-a51711177/" target="_blank">
                                <img src={linkedin} alt="linkedin"/>
                            </a>
                            <a href="https://open.spotify.com/user/brenocota?si=NfTuiWqiQU-kwyXRPHAf0A" target="_blank">
                                <img src={spotify} alt="spotify"/>
                            </a>
                        </div>
                    </article>

                    {
                        user && <div className="user-section">
                            <img className="profile-image" src={user.avatar_url} alt="image-name"/>
                            <h3> {user.name}</h3>
                            <p>{user.bio}</p>
                            <a href={"https://"+user.blog}>🔗 {user.blog}</a>
                            <p>🚀 {user.company}</p>
                            <p className="location"><img src={brazil} />{user.location}</p>
                            <a href={user.repos_url}>⭐ {user.public_repos}</a>
                        </div>
                    }
                </Section>

                {/* <Section>
                    { user && <img src={user.avatar_url} alt="photo"/> }
                    <Link>
                        <a href="https://github.com/brenogcota" target="_blank">Github</a>
                    </Link>
                    <Link>
                        <a href="https://www.instagram.com/dbrno/" target="_blank">Instagram</a>
                    </Link>
                    <Link>
                        <a href="https://www.linkedin.com/in/breno-cota-a51711177/" target="_blank">LinkedIn</a>
                    </Link>
                </Section> */}

            </Container>

            {/*<Footer/>*/}
        </>
    );
}

export default Main;