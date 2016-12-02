import React from 'react'
import ReactDOM from 'react-dom'


import { Router, Route, hashHistory ,browserHistory,IndexRoute,Redirect,Link,IndexLink} from 'react-router';

const App = React.createClass({
    render:function () {
        return (
            <div>App


                <ul role="nav">
                    <li><Link activeStyle={{color: 'red'}} to="app/about2">About2</Link></li>
                    <li><Link activeStyle={{color: 'red'}} to="app/repos2">Repos2</Link></li>
                    <li><IndexLink  activeStyle={{color: 'red'}} to="">index</IndexLink></li>
                </ul>
                <div>
                    {this.props.children}
                </div>

            </div>
        )
    }
})

const Repos = React.createClass({
    render:function () {
        return (
            <div>repos
                <p>{this.props.params.git}
                </p>
            </div>
        )
    }
})

const About = React.createClass({
    render:function () {
        return (
            <div>About
                <p>{this.props.params.name}</p>
            </div>
        )
    }
})

const R = React.createClass({
    render(){
        return (
            <Router history={hashHistory}>
                <Route path='app' component={App}>
                    <Route path='repos/:git' component={Repos}/>
                    <Route path='about/:name' component={About}/>
                </Route>

            </Router>
        )
    }
})


const Repos2 = React.createClass({
    render:function () {
        return (
            <div>repos


            </div>
        )
    }
})

const About2 = React.createClass({
    render:function () {
        return (
            <div>About
            </div>
        )
    }
})

const Index = React.createClass({
    render:function () {
        return (
            <div>
                index
            </div>
        )
    }
})

var R2 = React.createClass({
    render:function () {
        return (
            <Router history={hashHistory}>
                <Route path="/app" component={App}>
                    <IndexRoute component={Index}/>
                    <Route path="index" component={Index}/>
                    <Route path="repos2" component={Repos2}/>
                    <Route path="about2" component={About2}/>

                    <Redirect from='error' to="index"/>

                </Route>
            </Router>
        )
    }
})


const RouteStudy = React.createClass({
    render:function () {
        return(
            <div>
                <h3>react-router</h3>
                <R2/>
            </div>
        )
    }
})

export default RouteStudy