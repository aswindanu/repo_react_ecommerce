import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";


class Profile extends Component {
    componentDidMount = () =>{
        this.props.getUser();
        console.log("this",this.props.listStuff);
    }; 

    putUser = () => {
        this.props.putUser();
        this.props.history.replace("/profile");
    };

    render(){
        const style = {
            width:"100%",
            borderRadius:"50%"
        }       
        if(this.props.is_login !== true){
            return <Redirect to={{ pathname: "/signin"}}/>;
        } 
        else { 
    return (
        <section className="content signin text-center" style={{marginBottom:'10%'}}>
        <form onSubmit={e => e.preventDefault()} className="formsignin">
            <h1 style={{ marginBottom: "2%", paddingTop: "80px" }}>Edit Your Data</h1>
            <img src={"http://www.gnet.gr/wp-content/uploads/2015/01/images_game_logos_DOTA2_Logo_Transparent.png"} className="logo-animex"/>
            <div className="row" style={{textAlign:"left"}}>
                <div className="col-md-3">
                </div>
                <div className="col-md-2">
                    <p>Username : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
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
                    type="password"
                    name="password"
                    placeholder="Password"
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
                    <p>Fullname : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="fullname"
                    placeholder={this.props.User.fullname}
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
                    <p>Address : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="address"
                    placeholder={this.props.User.address}
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
                    <p>Zip Code : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="zip_code"
                    placeholder={this.props.User.zip_code}
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
                    <p>Image : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="image_user"
                    placeholder={this.props.User.image}
                    onChange={e => this.props.setField(e)} //changeInput
                />
                </div>
                <div className="col-md-1">
                </div>
            </div>
            <button style={{ marginRight: "2%" }} onClick={() => this.putUser()} className="btn btn-outline-primary">Update Profile</button>
        </form>
    </section>
  );
};
}
}

export default connect("User, is_login, password", actions) (withRouter(Profile));