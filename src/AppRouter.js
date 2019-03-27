import React, {Component} from "react";
import MainRoute from "./Routes/MainRoute";
import {connect} from "unistore/react";
import {actions} from "./store";
import {withRouter} from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

class AppRouter extends Component{
    postSignout = () =>{
        this.props.signOut()
        this.props.history.push("/");
    };
    render(){
        return (
            <div>
                <Header postSignout={this.postSignout}/>
                <MainRoute/>
                <Footer/>
            </div>
        );
    }
}

export default connect("is_login,email,full_name,listNews,listTopNews", actions)(withRouter(AppRouter));