import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
import ListCartId from '../components/ListCardId';


class Cart extends Component {
    componentDidMount = () =>{
        this.props.getCart();
        this.props.getUser();
        // console.log("this",this.props.listStuff);
    }; 

    handleOnClick = e => {
        console.log("event genre", e.target.value);
        this.props.setField(e);
        this.props.history.replace("/"+e.target.value);
        this.props.searchNews(e.target.value);
    };

    buySome = () => {
        this.props.history.replace("/");
    };

    PayProcess = (e) => {
        this.props.setField(e);
        alert("Berhasil set")
    };

    goPay = () => {
        if (this.props.rek_pembayar !== "" || this.props.rek_pembayar !== null || this.props.nama_pembayar !== "" || this.props.nama_pembayar !== null){
        this.props.postTrans().then(() => {
        if (this.props.status_bayar === 200){
        alert("Transaksi Sudah di Set, silahkan lanjut ke pembayaran");
        this.props.history.replace("/transaction");}
        else {
            alert("Coba diulangi")
        }})} else {
            alert("Silahkan diisi nomor rekening dan nama pemilik dahulu")
        }
    };
    seeTrans = () => {
        this.props.history.replace("/paid");
    };

    render(){
        const style = {
            width:"100%",
            marginTop:"10%",
            borderRadius:"15%"
        }
        if(this.props.is_login != true){
            return <Redirect to={{ pathname: "/signin"}}/>;
        } 
        else {       
    return (
        <section className="container-fluid" style={{ borderBottom:"1px solid lightslategray", margin:"0px", backgroundColor:"black"}}>
            <div className="row text-center">
            </div>
            <div className="row" style={{marginTop:"3%"}}>
                <div className="col-md-3 text-center" style={{backgroundColor:"cadetblue", borderRadius:"1%"}}>
                    <img style={style} src={this.props.User.image} alt="img_teaser" className="img_teaser"/>
                    <h3 style={{ borderBottom:"1px solid lightslategray", backgroundColor:"cadetblue"}}>{this.props.User.fullname}</h3><br/>
                    <p>Username: {this.props.User.username}</p>
                    <p>Address: {this.props.User.address}</p>
                    <p>Zip Code: {this.props.User.zip_code}</p>
                    <p>Status: {this.props.User.status}</p>
                </div>
                <div className="col-md-9" style={{backgroundColor:"white", borderRadius:"1%"}}>
                {   this.props.listCart.map((item,key) => {
                    if (this.props.User.type == "client") {
                    return <ListCartId username={item.username} id_nya={item.id} barang={item.barang} image={item.image} key={key} resi={item.resi} harga={item.harga} deskripsi={item.deskripsi} jenis={item.jenis} jumlah={item.jumlah} status={item.status}/>
                }})}
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-2">
                <p style={{paddingTop:"10%", color:"white"}}>Pembayaran Via :</p>
                </div>
                <div className="col-md-6">
                    <button style={{ margin: "2%"}} name="pembayaran" value="1" onClick={(e) => this.PayProcess(e)} className="btn btn-outline-primary">Mandiri</button>
                    <button style={{ margin: "2%"}} name="pembayaran" value="2" onClick={(e) => this.PayProcess(e)} className="btn btn-outline-primary">BNI</button>
                    <button style={{ margin: "2%"}} name="pembayaran" value="3" onClick={(e) => this.PayProcess(e)} className="btn btn-outline-primary">BRI</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-2">
                <p style={{paddingTop:"10%", color:"white"}}>Pengiriman Via :</p>
                </div>
                <div className="col-md-6">
                    <button style={{ margin: "2%"}} name="pengiriman" value="1" onClick={(e) => this.PayProcess(e)} className="btn btn-outline-primary">JNE</button>
                    <button style={{ margin: "2%"}} name="pengiriman" value="2" onClick={(e) => this.PayProcess(e)} className="btn btn-outline-primary">JNT</button>
                    <button style={{ margin: "2%"}} name="pengiriman" value="3" onClick={(e) => this.PayProcess(e)} className="btn btn-outline-primary">TIKI</button>
                    <button style={{ margin: "2%"}} name="pengiriman" value="4" onClick={(e) => this.PayProcess(e)} className="btn btn-outline-primary">Kantor Pos</button>
                </div>
            </div>
            <div className="row" style={{textAlign:"left", color:"white"}}>
                <div className="col-md-3">
                </div>
                <div className="col-md-2">
                    <p>No. Rekening: </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                    <input
                    style={{width:"70%"}}
                    type="text"
                    name="rek_pembayar"
                    placeholder="No. Rekening Pengirim"
                    onChange={e => this.props.setField(e)} //changeInput
                />  
                </div>
                <div className="col-md-1">
                </div>
            </div>
            <div className="row" style={{textAlign:"left", color:"white"}}>
                <div className="col-md-3">
                </div>
                <div className="col-md-2">
                    <p>Nama Pemilik: </p>
                </div>
                <div className="col-md-7" style={{ marginBottom: "2%" }}>
                    <input
                    style={{width:"70%"}}
                    type="text"
                    name="nama_pembayar"
                    placeholder="Pemilik ATM"
                    onChange={e => this.props.setField(e)} //changeInput
                />
                </div>
                <div className="col-md-1">
                </div>
            </div>
            <div className="row text-center" style={{marginLeft:"40%"}}>
            <button style={{ margin: "2%", backgroundColor:"white"}} onClick={() => this.buySome()} className="btn btn-outline-primary">Go Buy Some</button>
            <button style={{ margin: "2%"}} onClick={() => this.goPay()} className="btn btn-outline-primary">Go To Payment</button>
            <button style={{ margin: "2%", backgroundColor:"white"}} onClick={() => this.seeTrans()} className="btn btn-outline-primary">See Transaction</button>
            </div>
        </section>
  );
};
}
}

export default connect("listCart, nama_pembayar, rek_pembayar, is_login, User, pembayaran, pengiriman, status_bayar", actions) (withRouter(Cart));