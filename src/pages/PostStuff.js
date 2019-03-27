import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";


class PostStuff extends Component {
    componentDidMount = () =>{
        this.props.getUser();
        console.log("this",this.props.listStuff);
    }; 

    postLogin = () => {
        // if (this.props.barang === "" || this.props.barang === null){
        //     alert("Nama Barang wajib diisi")
        // } if (this.props.image_stuff == "" || this.props.image_stuff == null) {
        //     alert("Image wajib diisi")
        // } if (this.props.deskripsi_stuff == "" || this.props.deskripsi_stuff == null) {
        //     alert("Deskripsi wajib diisi")
        // } if (this.props.jenis_stuff == "" || this.props.jenis_stuff == null) {
        //     alert("Jenis barang wajib diisi")
        // } if (this.props.harga_stuff == "" || this.props.harga_stuff == null) {
        //     alert("Harga barang wajib diisi")
        // } if (this.props.jumlah_stuff == "" || this.props.jumlah_stuff == null) {
        //     alert("Jumlah barang wajib diisi")
        // } else {        
        this.props.postStuff().then(() => {
        this.props.history.replace("/admin");
        })   
    };
    // };

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
            <h1 style={{ marginBottom: "2%", paddingTop: "80px" }}>Add More Stuff To Sell:</h1>
            <img src={"http://www.gnet.gr/wp-content/uploads/2015/01/images_game_logos_DOTA2_Logo_Transparent.png"} className="logo-animex"/>
            <div className="row" style={{textAlign:"left"}}>
                <div className="col-md-3">
                </div>
                <div className="col-md-2">
                    <p>Nama Barang : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="barang"
                    placeholder="Nama Barang"
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
                    <p>Image Barang : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="image_stuff"
                    placeholder="Image"
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
                    <p>Deskripsi Barang : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="deskripsi_stuff"
                    placeholder="Deskripsi"
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
                    <p>Jenis Barang : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="jenis_stuff"
                    placeholder="Jenis"
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
                    <p>Harga : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="harga_stuff"
                    placeholder="Harga"
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
                    <p>Jumlah : </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="jumlah_stuff"
                    placeholder="Jumlah Barang"
                    onChange={e => this.props.setField(e)} //changeInput
                />
                </div>
                <div className="col-md-1">
                </div>
            </div>
            <button style={{ marginRight: "2%" }} onClick={() => this.postLogin()} className="btn btn-outline-primary">Register</button>
            <button style={{ marginRight: "2%" }} onClick={() => this.home()} className="btn btn-outline-primary">Back to Admin</button>
        </form>
    </section>
  );
};
}}

export default connect("User, is_login, password, confirm, Stuff", actions) (withRouter(PostStuff));