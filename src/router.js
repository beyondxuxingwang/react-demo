import React from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from './App';
import Admin from './admin';
import Logo from './pages/Logo/index';
import Home from './pages/Home/index';
import Buttons from './pages/Ui/button';
import Table1 from './pages/table/table1';
import Table2 from './pages/table/table2';




export default class IRouter extends React.Component {


    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>

                        <Route
                            path="/"
                            render={() => (
                                <Admin>
                                    <Switch>
                                        <Route path="/logo" component={Logo}/>
                                        <Route path="/home" component={Home} />
                                        <Route path="/ui/buttons" component={Buttons}/>
                                        <Route path="/table/table1" component={Table1}/>
                                        <Route path="/table/table2" component={Table2}/>

                                    </Switch>
                                </Admin>
                            )}
                        />
                    </Switch>

                </App>

            </HashRouter>


        )
    }

}