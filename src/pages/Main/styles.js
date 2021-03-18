import styled from 'styled-components';
import { style } from '../../config/style';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    //justify-content: center;

`;

export const Link = styled.div`
    border: 2px solid #FFF;
    border-radius: 8px;
    padding: .8rem;
    margin: 5px 0;
    width: 100%;
    max-width: 200px;
    text-align: center;

    a {
        color: #FFF;
    }

    @media(max-width: 30em) {
        & {
            min-width: 90vw;
        }
    }
`;

export const Section = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5rem 10rem;
    

    .bio {
        width: 50%;
        height: 100%;

        h2 {
            font-size: 3.6rem;
            margin: 0 0 2rem;
        }

        .desc {
            margin-bottom: 3rem;
            font-size: 2.6rem;

            p {
                margin-bottom: 0.6rem;
            }
        }

        .social-media {
            
            a {
                margin: 0 1rem;
                :first-child {
                    margin-left: 0;
                }

                img {
                    width: 3.5rem;
                    height: 3.5rem;
                    filter: brightness(0.5);
                    transition: all 0.4s;
                }

                img:hover {
                    filter: brightness(1);
                }
            }

        }

    }

    .user-section {

        .profile-image {
            width: 25rem;
            height: 25rem;
            border-radius: 50%;
            margin: 0 0 3rem;
        }

        h3 {
            margin-bottom: 1rem;
            font-size: 3.6rem;
        }

        p {
            margin: 0.4rem 0;
            font-size: 3rem;
        }

        .location img {
            width: 1.8rem;
            margin-right: 0.5rem;
        }
    }

    @media(max-width: 30em) {
        flex-direction: column-reverse;
        padding: 1rem 2rem;

        .bio {
            width: 100%;
            text-align: center;
        }

        .user-section {
            text-align: center;
            margin-bottom: 5rem;

            .profile-image {
                width: 15rem;
                height: 15rem;
            }
        }

        > img {
            width: 10rem;
            height: 10rem;
        }
        
    }

`;

export const SpotifySection = styled.div`
    padding: 5rem 10rem;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    grid-gap: 2rem;

    h1 span {
        color: red;
    }

    .spotify-card {
        width: 20rem;
        height: 20rem;
        border-radius: 0.5rem;
        padding: 1rem;
        background-size: 100%;
        object-fit: contain;
        filter: grayscale(1);
        color: #EEE;
        cursor: pointer;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        audio {display: none}

        .card-footer {
            opacity: 0;
            display: none;
            transition: all 0.6s ease-out;
        }

    }

    .spotify-card:hover {
        filter: grayscale(0);

        .card-footer {
            opacity: 1;
            display: block;
            animation: show 1s;
        }
    }

    @keyframes show {
        from {
            margin-left: 60%;
            width: 100%;
        }

        to {
            margin-left: 0%;
            width: 100%;
        }
    }
`;


export const Footer = styled.footer`
    position: absolute;
    bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;

    p {
        font-size: 1.6rem;
        color: ${style.colors.light};
        opacity: 0.08;

    }


`;


