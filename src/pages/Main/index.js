import React, { useEffect, useState } from 'react';

import TopBar from '../../components/TopBar';
import { Container, Section, SpotifySection } from './styles';

import { auth } from '../../config/auth';
import storaged from '../../config/recents.json';

import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import spotify from '../../assets/spotify.png';
import brazil from '../../assets/brazil.png'

function Main() {
    const [user, setUser] = useState(null);
    const [recents, setRecent] = useState(null);

    useEffect(()=> {
        fetch('https://api.github.com/users/brenogcota')
            .then(response => response.json()) 
            .then( data => {
                setUser(data);
            })
            .catch( error => console.error(error));
    }, []);

    useEffect(() => {

        let headers = new Headers({
                                "Accept": "application/json",
                                "Content-Type": "Content-Type: application/json",
                                "Authorization": `Bearer ${auth.token}`
                            });

        const options = { 
                method: 'GET',
                headers,
            };
        fetch('https://api.spotify.com/v1/me/player/recently-played?limit=11', options)
            .then(response => response.json()) 
            .then( data => {
                console.log(data.items);
                data.items ? setRecent(data.items) : setRecent(storaged);
            })
            .catch( error => console.error(error));
        
    }, []);

    const playSound = (e) => {
        if(e.target.dataset && e.target.dataset.id) {
            document.getElementsByClassName(`${e.target.dataset.id}`)[0].play();
        }
    }

    const stopSound = (e) => {
        if(e.target.dataset && e.target.dataset.id) {
            document.getElementsByClassName(`${e.target.dataset.id}`)[0].pause();
            document.getElementsByClassName(`${e.target.dataset.id}`)[0].currentTime = 0;
        }
    }

    return (
        <>
            <Container>
                <TopBar/>
                <Section>
                    <article className="bio">
                        <h2>Hello, humans!</h2>
                        <div className="desc">
                            <p>I'm a Developer focused on web development.
                                    Graduating in Systems Analysis and
                                    Development from the Federal Institute of
                                    northern Minas Gerais</p>
                            <p>Currently working at Codeby</p>
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
                                    <p className="location"><img src={brazil} />{user.location}</p>
                                    <a href={"https://"+user.blog}>🔗 {user.blog}</a>
                                </div>
                    }
                </Section>

                <SpotifySection>
                    {
                        <h1>Recently <span>played</span> songs</h1>
                    }
                    {
                        recents && recents.map(recent => {
                                        return (
                                            <div key={recent.track.id} data-id={recent.track.id} onMouseEnter={(e) => { playSound(e) }} onMouseOut={(e) => { stopSound(e) }} className="spotify-card" style={{backgroundImage: `url(${recent.track.album.images[0].url})`}} target="_blank">
                                                <audio controls className={recent.track.id}>
                                                    <source src={recent.track.preview_url} type="audio/mpeg" />
                                                </audio>
                                                <a href={recent.track.external_urls.spotify} className="card-footer">
                                                    <h5>{recent.track.name}</h5>
                                                    <h6>{recent.track.artists[0].name}</h6>
                                                </a>
                                            </div>
                                        )
                                    })
                    } 
                </SpotifySection>

            </Container>
        </>
    );
}

export default Main;