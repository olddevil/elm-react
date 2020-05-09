import React, {Component} from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../pages/home/home';
import Order from '../pages/order/order';
import Center from '../pages/center/center';

class RouterConfig extends Component {
    render() {
        return (
            <div>
            <Router>
                <Switch>
                    <Route path='/center' component={Center} />
                    <Route path='/order' component={Order} />
                    <Route exact path='/' component={Home} />
                </Switch>
            </Router>
            </div>
        );
    }
}

export default RouterConfig