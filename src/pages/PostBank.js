import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";


class PostBank extends Component {
    componentDidMount = () =>{
        this.props.getUser();
        console.log("this",this.props.listStuff);
    }; 

    postBank = () => {
        if (this.props.nama_bank === "" || this.props.nama_bank === null){
            alert("Nama Bank wajib diisi")
        } if (this.props.no_rek == "" || this.props.no_rek == null) {
            alert("No. Rekening wajib diisi")
        } if (this.props.owner == "" || this.props.owner == null) {
            alert("Nama Pemilik wajib diisi")
        } if (this.props.image_bank == "" || this.props.image_bank == null) {
            alert("Image wajib diisi")
        } else {
            this.props.postBank().then(() => {
                alert("Add data Bank sukses")
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
            <h1 style={{ marginBottom: "2%", paddingTop: "80px" }}>Add More Bank To Pay:</h1>
            <img src={"http://www.gnet.gr/wp-content/uploads/2015/01/images_game_logos_DOTA2_Logo_Transparent.png"} className="logo-animex"/>
            <div className="row" style={{textAlign:"left"}}>
                <div className="col-md-3">
                </div>
                <div className="col-md-2">
                    <p>Nama Bank : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="nama_bank"
                    placeholder="Nama Bank"
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
                    <p>Nomor Rekening : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="no_rek"
                    placeholder="Nomor Rekening"
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
                    <p>Pemilik : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="owner"
                    placeholder="Pemilik Nasabah"
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
                    name="image_bank"
                    placeholder="Image Bank"
                    onChange={e => this.props.setField(e)} //changeInput
                />
                </div>
                <div className="col-md-1">
                </div>
            </div>
            <button style={{ marginRight: "2%" }} onClick={() => this.postBank()} className="btn btn-outline-primary">Register Bank</button>
            <button style={{ marginRight: "2%" }} onClick={() => this.home()} className="btn btn-outline-primary">Back to Admin</button>
        </form>
    </section>
  );
};
}}

export default connect("Bank, is_login, password, confirm, listBank, image_bank, owner, no_rek, nama_bank", actions) (withRouter(PostBank));