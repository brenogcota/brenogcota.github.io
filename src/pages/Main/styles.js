import styled from 'styled-components';
import { style } from '../../config/style';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    //justify-content: center;

`;


export const Section = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10rem;
    

    .bio {
        width: 50%;
        height: 100%;

        h2 {
            margin: 5rem 0 2rem;
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
            }
        }

    }

    
    > img {
        width: 25rem;
        height: 25rem;
        border-radius: 50%;
        box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.2);
    }

    @media(max-width: 30em) {
        & {
            flex-direction: column-reverse;
            align-items: center;
            text-align: center;
            padding: 5rem;
        }

        .bio {
            width: 100%;
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


