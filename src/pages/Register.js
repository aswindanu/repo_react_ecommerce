import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";


class Profile extends Component {
    componentDidMount = () =>{
        this.props.getUser();
        console.log("this",this.props.listStuff);
    }; 

    backLogin = () => {
        // if (this.props.password == this.props.confirm){
        // this.props.postUser();
        this.props.history.replace("/signin");
    // }
    };

    postRegis = () => {
        if (this.props.password != this.props.confirm){
            alert("Password tidak sama")
        }
        if (this.props.password == this.props.confirm){
     if (this.props.username == "" || this.props.username == null) {
        alert("Username wajib diisi")
    } if (this.props.address == "" || this.props.address == null) {
        alert("Address wajib diisi")
    } if (this.props.fullname == "" || this.props.fullname == null) {
        alert("Full Name wajib diisi")
    } if (this.props.zip_code == "" || this.props.zip_code == null) {
        alert("Zip Code wajib diisi")
    } if (this.props.image_user == "" || this.props.image_user == null) {
        alert("Image wajib diisi")
    } else {
        this.props.postUser();
        alert("Register Berhasil")
        this.props.history.replace("/profile");
    }
    }
    };

    render(){
        const style = {
            width:"100%",
            borderRadius:"50%"
        }       
    return (
        <section className="content signin text-center" style={{marginBottom:'10%'}}>
        <form onSubmit={e => e.preventDefault()} className="formsignin">
            <h1 style={{ marginBottom: "2%", paddingTop: "80px" }}>Register Yourself</h1>
            <Link to="/"><img style={{ paddingTop: "40px" }} src={"http://www.gnet.gr/wp-content/uploads/2015/01/images_game_logos_DOTA2_Logo_Transparent.png"} className="logo-animex"/></Link>
            <div className="row" style={{textAlign:"left"}}>
                <div className="col-md-3">
                </div>
                <div className="col-md-2">
                    <p>User Name: </p>
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
                    <p>Password: </p>
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
            <div className="row" style={{textAlign:"left"}}>
                <div className="col-md-3">
                </div>
                <div className="col-md-2">
                    <p>Confirm Password: </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                    <input
                        style={{width:"70%"}}
                        type="password"
                        name="confirm"
                        placeholder="Confirm Password"
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
                    <p>Full Name: </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                    <input
                        style={{width:"70%"}}
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
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
                    <p>Address: </p>
                </div>
                    <div className="col-md-7" style={{ marginBottom: "2%" }}>
                    <input
                        style={{width:"70%"}}
                        type="text"
                        name="address"
                        placeholder="Address"
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
                    <p>Zip Code: </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    style={{width:"70%"}}
                    type="text"
                    name="zip_code"
                    placeholder="Zip Code"
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
                    <p>Image: </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    style={{width:"70%"}}
                    type="text"
                    name="image_user"
                    placeholder="Image Upload"
                    onChange={e => this.props.setField(e)} //changeInput
                />
                </div>
                <div className="col-md-1">
                </div>
            </div>
            <button style={{ marginRight: "2%", backgroundColor:"black", color:"white" }} onClick={() => this.backLogin()} className="btn btn-outline-primary">Back to Sign In</button>
            <button style={{ marginRight: "2%", backgroundColor:"white", color:"black" }} onClick={() => this.postRegis()} className="btn btn-outline-primary">Register</button>
        </form>
    </section>
  );
};
}

export default connect("User, is_login, password, confirm, username, fullname, address, zip_code, image_user", actions) (withRouter(Profile));