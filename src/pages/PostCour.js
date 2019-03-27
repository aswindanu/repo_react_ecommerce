import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";


class PostCour extends Component {
    componentDidMount = () =>{
        this.props.getUser();
        console.log("this",this.props.listStuff);
    }; 

    postCour = () => {
        if (this.props.nama_kurir === "" || this.props.nama_kurir === null){
            alert("Nama Kurir wajib diisi")
        } if (this.props.mode_pengiriman == "" || this.props.mode_pengiriman == null) {
            alert("Mode Pengiriman wajib diisi")
        } else {
            this.props.postCour().then(() => {
                alert("Add data Kurir sukses")
                this.props.history.replace("/admin");
            })
        }
    };

    home = () => {
        this.props.history.replace("/admin")
    }

    render(){
        const style = {
            width:"100%",
            borderRadius:"50%"
        }       
        if(this.props.is_login != true){if(this.props.type != 'admin' || this.props.type != 'superadmin'){
            return <Redirect to={{ pathname: "/signin"}}/>;
        }} 
        else {        
    return (
        <section className="content signin text-center" style={{marginBottom:'10%'}}>
        <form onSubmit={e => e.preventDefault()} className="formsignin">
            <h1 style={{ marginBottom: "2%", paddingTop: "80px" }}>Add More Courier To Connect:</h1>
            <img src={"http://www.gnet.gr/wp-content/uploads/2015/01/images_game_logos_DOTA2_Logo_Transparent.png"} className="logo-animex"/>
            <div className="row" style={{textAlign:"left"}}>
                <div className="col-md-3">
                </div>
                <div className="col-md-2">
                    <p>Nama Kurir : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="nama_kurir"
                    placeholder="Nama Kurir"
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
                    <p>Mode Pembayaran : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="mode_pengiriman"
                    placeholder="Mode Pengiriman"
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
                    name="image_cour"
                    placeholder="Image Courier"
                    onChange={e => this.props.setField(e)} //changeInput
                />
                </div>
                <div className="col-md-1">
                </div>
            </div>
            <button style={{ marginRight: "2%" }} onClick={() => this.postCour()} className="btn btn-outline-primary">Register</button>
            <button style={{ marginRight: "2%" }} onClick={() => this.home()} className="btn btn-outline-primary">Back toAdmin</button>
        </form>
    </section>
  );
};
}}

export default connect("User, is_login, password, confirm, nama_kurir, mode_pengiriman, image_cour", actions) (withRouter(PostCour));