import React from 'react'
import { NavLink } from 'react-router-dom'

import { TopBarElement, NavItem } from './styles';


function TopBar() {

    return (
        <TopBarElement>
            <NavItem>
                <NavLink exact to="/" activeClassName="selected">About me</NavLink>
            </NavItem>

            <NavItem>
                <NavLink to="/experience" activeClassName="selected">Experience</NavLink>
            </NavItem>

            <NavItem>
                <NavLink to="/skills" activeClassName="selected">Skill's</NavLink>
            </NavItem>
        </TopBarElement>
    );
}

export default TopBar;