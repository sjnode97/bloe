import React, {Component} from 'react';
import About from "../components/about/index"
import Book from "../components/book/index"
import Details from "../components/details/index"
import Index from "../components/index/index"
import User from "../components/user/index"
import {Route,Switch,Redirect} from "react-router-dom";


class RouterIndex extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path={"/index/:id"} component={Index}/>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/book"} component={Book}/>
                    <Route path={"/detalis"} component={Details}/>
                    <Route path={"/user"} component={User}/>
                    <Redirect from={"/"} to={"/index/all"}></Redirect>
                    <Redirect from={"/index"} to={"/index/all"}></Redirect>

                </Switch>

            </div>
        )
    }
}

export default RouterIndex;