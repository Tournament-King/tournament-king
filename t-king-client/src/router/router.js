import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Splash from './../components/User/Splash';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import Landing from './../components/Landing/Landing';
import AccountSettings from './../components/User/AccountSettings';
import TournamentView from './../components/Tournament/TournamentView';
import CreateTournament from './../components/Tournament/CreateTournament';

const RouteWithLayout = ({component, ...rest}) => {
    return (
        <main className="view-wrapper">
                <Header />
                <div className="header-shim"></div>
                <Route {...rest} render={() => React.createElement(component)} />
                <Footer />
        </main>
    )
}

const PageNotFound = () => <h1>Page Not Found</h1>

export default (
    <Switch>
        <Route path="/splash" component={Splash} />
        <RouteWithLayout exact path="/" component={Landing} />
        <RouteWithLayout path="/user/settings" component={AccountSettings} />
        <RouteWithLayout path="/newbracket" component={CreateTournament} />
        <RouteWithLayout path="/tournament/:id" component={TournamentView} />
        <Route path="*" component={PageNotFound} />
    </Switch>
)