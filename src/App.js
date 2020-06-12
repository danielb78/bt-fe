import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Weather from './containers/Weather';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" component={Weather}/>
            </Switch>
        </Layout>
    );
}

export default App;
