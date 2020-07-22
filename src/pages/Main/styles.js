import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 92vh;
    width: 100vw;

    
`;

export const Section = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10rem 10rem;
    width: 80%;
    height: 80vh;

    div {
        width: 50%;

        h2 {
            margin-bottom: 2rem;
        }

        img {
            width: 4rem;
            height: 4rem;
            border-radius: 0;
            margin: 5rem 0.6rem;
        }

        img:hover {
            opacity: 0.4;
            transition: 0.3s;
        }
    }

    
    img {
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
    }
      

`;


export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30vh;
    width: 100vw;

    p {
        margin: 1rem;
    }

`;


