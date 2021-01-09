import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Main from './pages/Main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main} />
            </Switch>
        </BrowserRouter>
    );
}