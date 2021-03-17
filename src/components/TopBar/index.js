import React from 'react'

import { TopBarElement } from './styles';

import {ReactComponent as Logo} from '../../assets/icon.svg'

function TopBar() {

    return (
        <TopBarElement>
            <Logo />
        </TopBarElement>
    );
}

export default TopBar;