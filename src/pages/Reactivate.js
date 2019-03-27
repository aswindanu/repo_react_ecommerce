import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";


class Reactivate extends Component {
    componentDidMount = () =>{
        this.props.getStuff();
        this.props.history.replace("/admin")
        console.log("this",this.props.listStuff);
    }; 

    putStuff = () => {
        // if (this.props.password == this.props.confirm){
        this.props.putStuff();
        console.log("iki barang e",this.props.Stuff)
        // this.props.history.replace("/profile");
    // }
    };

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
            <div style={{ marginBottom: "2%" }}>
                <input
                    type="text"
                    name="barang"
                    placeholder={this.props.Stuff.barang}
                    onChange={e => this.props.setField(e)} //changeInput
                />
                <br /> <br />
                <input
                    type="text"
                    name="image_stuff"
                    placeholder={this.props.Stuff.image}
                    onChange={e => this.props.setField(e)} //changeInput
                />
                <br /> <br />
                <input
                    type="text"
                    name="deskripsi_stuff"
                    placeholder={this.props.Stuff.deskripsi}
                    onChange={e => this.props.setField(e)} //changeInput
                />
                <br /> <br />
                <input
                    type="text"
                    name="jenis_stuff"
                    placeholder={this.props.Stuff.jenis}
                    onChange={e => this.props.setField(e)} //changeInput
                />
                <br /> <br />
                <input
                    type="text"
                    name="harga_stuff"
                    placeholder={this.props.Stuff.harga}
                    onChange={e => this.props.setField(e)} //changeInput
                />
                <br /> <br />
                <input
                    type="text"
                    name="jumlah_stuff"
                    placeholder={this.props.Stuff.jumlah}
                    onChange={e => this.props.setField(e)} //changeInput
                />
            </div>
            <button style={{ marginRight: "2%" }} onClick={() => this.putStuff()} className="btn btn-outline-primary">Edit Stuff</button>
        </form>
    </section>
  );
};
}}

export default connect("User, is_login, password, confirm, Stuff, resi_stuff", actions) (withRouter(Reactivate));