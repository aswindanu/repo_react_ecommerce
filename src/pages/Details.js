import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";


class Details extends Component {
    componentDidMount = () =>{
        this.props.getStuff();
        console.log("this",this.props.listStuff);
    }; 

    putUser = () => {
        this.props.history.replace("/profile/edit");
    };

    buySome = () => {
        this.props.history.replace("/");
    };

    buyStuff = (e) => {
        console.log('test lst user', this.props.listUser)
        this.props.setField(e);
        console.log("id", this.props.id)
        this.props.postCart().then(() => {
        if (this.props.status_cart == 200){
        alert("Sukses");
        this.props.history.push("/");}
        else {
            alert("Coba diulangi");
        }}
)        // })
    };

    render(){
        const style = {
            width:"100%",
            borderRadius:"50%",
            paddingTop:"12%"
        }
        if(this.props.is_login !== true){
            return <Redirect to={{ pathname: "/signin"}}/>;
        } 
        else {        
    return (
        <section className="content" style={{backgroundColor:"black", color:"antiquewhite"}}>
            <div className="row" style={{padding: "10% 0"}}>
                <div className="col-md-3" style={{borderRadius:"50%"}}>
                    <img style={style} src={this.props.Stuff.image} alt="img_teaser" className="img_teaser"/>
                </div>
                <div className="col-md-9 text-center">
                    <h2 className="text-center" style={{backgroundColor:"brown"}}>ID Profile</h2>
                    <h3 style={{ borderBottom:"1px solid lightslategray", backgroundColor:"grey"}}>{this.props.Stuff.barang}</h3><br/>
                    <p>Resi: {this.props.Stuff.resi}</p>
                    <p>Deskripsi: {this.props.Stuff.deskripsi}</p>
                    <p>Jenis: {this.props.Stuff.jenis}</p>
                    <p>Jumlah: {this.props.Stuff.jumlah}</p>
                    <p>Status: {this.props.Stuff.status}</p>
                    {/* <button style={{ margin: "2%" }} onClick={() => this.putUser()} className="btn btn-outline-primary">Edit Profile</button>
                    <button style={{ margin: "2%" }} onClick={() => this.buySome()} className="btn btn-outline-primary">Go Buy Some</button> */}
                <input
                    type="text"
                    name="jumlah_cart"
                    placeholder="Jumlah Beli"
                    onChange={e => this.props.setField(e)} //changeInput
                    />
                      <button style={{ margin: "2%" }} name="id_cart" value={this.props.Stuff.resi} onClick={(e) => this.buyStuff(e)} className="btn btn-outline-primary">Buy</button>
                </div>
            </div>
        </section>
  );
};
}
}

export default connect("Stuff, is_login, status_cart", actions) (withRouter(Details));