import React from "react";
import {Route,Switch} from "react-router-dom";

import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Register from '../pages/Register';
// import Romance from '../pages/romance';
import NotMatch from '../pages/NotMatch';
import About from '../pages/About';
import Profile from '../pages/Profile';
import Password from '../pages/Password';
import Admin from '../pages/AdminID';
import Cart from '../pages/Cart';
import Transaction from '../pages/Transaction';
import Paid from '../pages/Paid';
import Edit from '../pages/EditProfile';
import StuffAdd from '../pages/PostStuff';
import BankAdd from '../pages/PostBank';
import CourAdd from '../pages/PostCour';
import Stuffedit from '../pages/PutStuff';

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/admin" component={Admin}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/password" component={Password}></Route>
            <Route exact path="/signin" component={SignIn}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/profile/edit" component={Edit}></Route>
            {/* <Route exact path="/about" component={About}></Route> */}
            <Route exact path="/details" component={Details}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/transaction" component={Transaction}></Route>
            <Route exact path="/paid" component={Paid}></Route>
            <Route exact path="/add/stuff" component={StuffAdd}></Route>
            <Route exact path="/add/bank" component={BankAdd}></Route>
            <Route exact path="/add/courier" component={CourAdd}></Route>
            <Route exact path="/stuff/edit" component={Stuffedit}></Route>
            <Route exact component={NotMatch}></Route>
        </Switch>
    );
}
export default MainRoute;
