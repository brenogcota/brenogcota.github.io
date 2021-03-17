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
            margin: 0 0 2rem;
        }

        .desc {
            margin-bottom: 3rem;

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
                    width: 2.5rem;
                    height: 2.5rem;
                    filter: brightness(0.7);
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
            width: 15rem;
            height: 15rem;
            border-radius: 50%;
            margin: 0 0 3rem;
        }

        h3 {
            margin-bottom: 1rem;
        }

        p {
            margin: 0.4rem 0;
        }

        .location img {
            width: 1.8rem;
            margin-right: 0.5rem;
        }
    }

    @media(max-width: 30em) {
        flex-direction: column;
        padding: 1rem 2rem;

        .bio {
            width: 100%;
            margin-bottom: 5rem;
            text-align: center;
        }

        .user-section {
            text-align: center;
        }

        > img {
            width: 10rem;
            height: 10rem;
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


