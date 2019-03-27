import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";


class Profile extends Component {
    componentDidMount = () =>{
        this.props.getUser();
        // console.log("this",this.props.listStuff);
    }; 

    putPass = () => {
        this.props.putUserPass();
        this.props.history.replace("/profile");
    };

    render(){
        const style = {
            width:"100%",
            borderRadius:"50%"
        }       
    return (
        <section className="content signin text-center" style={{marginBottom:'10%'}}>
        <form onSubmit={e => e.preventDefault()} className="formsignin">
            <img src={"http://www.gnet.gr/wp-content/uploads/2015/01/images_game_logos_DOTA2_Logo_Transparent.png"} className="logo-animex"/>
            <h1 style={{ marginBottom: "2%", paddingTop: "80px" }}>Change Password</h1>
            <div style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={e => this.props.setField(e)} //changeInput
                />
                <br /> <br />
                <input
                    type="password"
                    name="password"
                    placeholder="New Password"
                    onChange={e => this.props.setField(e)} //changeInput
                />
                <br /> <br />
                <input
                    type="password"
                    name="confirm"
                    placeholder="Confirm Password"
                    onChange={e => this.props.setField(e)} //changeInput
                />
            </div>
            <button style={{ marginRight: "2%" }} onClick={() => this.putPass()} className="btn btn-outline-primary">Change Password</button>
        </form>
    </section>
  );
};
}

export default connect("User, is_login, password, confirm", actions) (withRouter(Profile));