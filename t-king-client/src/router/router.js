import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './../components/Landing/Landing';
import TournamentView from './../components/Tournament/TournamentView';

export default (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/tournament/:id" component={TournamentView} />
    </Switch>
)