import { Router, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import * as Pages from '../pages';
import { AtlassianIcon } from "@atlaskit/logo";


export function AllRoutes() {
    return <Switch>
        <Route path="/" exact>
            <Pages.Dashboard />
        </Route>
    </Switch>
}