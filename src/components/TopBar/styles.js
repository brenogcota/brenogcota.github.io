import styled from 'styled-components';
import { style } from '../../config/style';

export const TopBarElement = styled.nav`
    display: flex;
    margin: 4rem 10rem 0;

    @media (max-width: 30em) {
        margin: 2rem 4rem;
        justify-content: center;
    }

`;

export const NavItem = styled.div`
    border-bottom: 0.4rem solid ${style.colors.light};
    padding-bottom: 0.4rem;

    :hover {
        border-bottom: 0.4rem solid ${style.colors.primary};
        transition: all .4s;

        a {
            color: ${style.colors.primary};
            transition: all .4s;
        }
    }

    :first-child {
        margin-left: 0;
    }
    a {
        color: ${style.colors.light};
        font-size: 1.8rem;
        margin: 0 1rem;
        white-space: nowrap;

        &.selected {
            color: ${style.colors.primary};
            border-bottom: 0.4rem solid ${style.colors.primary};
            padding-bottom: 0.5rem;
        }
    }

    @media (max-width: 30em) {
        a {
            font-size: 1.6rem;
            &.selected {
                padding-bottom: 0.4rem;
            }
        }
    }

`;


