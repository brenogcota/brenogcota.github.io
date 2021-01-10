import styled from 'styled-components';
import { style } from '../../config/style';

export const FooterElement = styled.footer`
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


