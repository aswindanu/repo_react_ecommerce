import React, { Component } from "react";
import "../styles/style.css";
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
import {Link} from "react-router-dom";

class SignIn extends Component {
    // auth login admin & client
    postLogin = () => {
        this.props.signIn().then(() => {
        if (this.props.status_code === 200){
            if (this.props.type === 'admin' || this.props.type === 'superadmin'){
                this.props.history.push("/admin");    
        }
        if (this.props.type === 'client'){
            this.props.history.push("/profile");    
        }}
        else{
            alert("Username atau Password Salah")
        }
        })
    };

    // get all user (admin)
    Register = () => {
        this.props.history.replace("/register"); 
    };

    Password = () => {
        this.props.history.replace("/password");
    };

    // get all user (admin)
    getAll = () => {
        this.props.getAll().then(() => {
        console.log("this", this);
        })
    };

    render() {
        console.log("state", this.props.username);
        return (
            <section className="content signin text-center" style={{paddingBottom:'18%', backgroundColor:"black", color:"burlywood"}}>
                <form onSubmit={e => e.preventDefault()} className="formsignin">
                <Link to="/"><img style={{ paddingTop: "40px" }} src={"http://www.gnet.gr/wp-content/uploads/2015/01/images_game_logos_DOTA2_Logo_Transparent.png"} className="logo-animex"/></Link>
                    <h1 style={{ marginBottom: "2%", paddingTop: "60px" }}>Sign In</h1>
                    <div className="row" style={{textAlign:"left"}}>
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-2">
                            <p>User Name : </p>
                        </div>
                        <div className="col-md-7" style={{ marginBottom: "2%" }}>
                            <input
                                style={{width:"70%"}}
                                type="text"
                                name="username"
                                placeholder="Username"
                                onChange={e => this.props.setField(e)} //changeInput
                            />
                        </div>
                        <div className="col-md-1">
                        </div>
                    </div>
                    <div className="row" style={{textAlign:"left"}}>
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-2">
                            <p>Password : </p>
                        </div>
                        <div className="col-md-7" style={{ marginBottom: "2%" }}>
                            <input
                                style={{width:"70%"}}
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={e => this.props.setField(e)} //changeInput
                            />
                        </div>
                        <div className="col-md-1">
                        </div>
                    </div>
                    <button style={{ marginRight: "2%", backgroundColor:"black", color:"white" }} onClick={() => this.postLogin()} className="btn btn-outline-primary">Sign In</button>
                    <button style={{ marginRight: "2%", backgroundColor:"white", color:"black" }} onClick={() => this.Register()} className="btn btn-outline-primary">Register</button>
                </form>
            </section>
        );
    }
}
export default connect("username, password, confirm, token_admin, token_client, status_code, type", actions)(withRouter(SignIn));