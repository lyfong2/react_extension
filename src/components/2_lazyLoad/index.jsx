import React,  {Component, lazy, Suspense} from 'react'
import {Route, Switch, NavLink} from 'react-router-dom';
// import About from './About';                  
// import Home from './Home';               

import Loading from './Loading';

const Home = lazy(()=> import('./Home'))
const About = lazy(()=> import('./About'))




export default class Demo extends Component{
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 在React中靠路由鏈結實現切換組件--編寫路由鏈結 */}
                            <NavLink className="list-group-item" to="/about">About</NavLink>
                            <NavLink className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 註冊路由 */}
                            <Suspense fallback={<Loading/>}>
                                <Switch>
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                </Switch>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

