import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
import ListTransId from '../components/ListTransId';


class Trans extends Component {
    componentDidMount = () =>{
        // this.props.getTrans();
        // console.log("this",this.props.listStuff);
    }; 

    handleOnClick = e => {
        console.log("event genre", e.target.value);
        this.props.setField(e);
        this.props.history.replace("/"+e.target.value);
        this.props.searchNews(e.target.value);
    };

    pay = (e) => {
        this.props.putTrans().then(() => {
            if (this.props.status_bayar == 200){
                alert("Berhasil dibayar")
                this.props.history.replace("/paid");}
            else {
                alert("Mohon diulangi");
                this.props.history.replace("/cart");}
        })

        // }
    };

    render(){
        const style = {
            width:"100%"
        }
        if(this.props.is_login != true){
            return <Redirect to={{ pathname: "/signin"}}/>;
        } 
        else {       
    return (
        <section className="container-fluid" style={{ borderBottom:"1px solid lightslategray", margin:"0px", backgroundColor:"black", color:"white"}}>
            <div className="row text-center">
                <div className="col-md-12">
                    <button style={{ margin: "2%", textAlign:"center"}} onClick={() => this.buySome()} className="btn btn-outline-primary">Go Buy Some</button>
                </div>
            </div>
            <div className="row">
            </div>
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-2">
                    
                    <p>User: </p>
                    <p>Harga: </p>
                    <p>Pembayaran: </p>
                    <p>Pengiriman: </p>
                    <p>Status: </p>
                    <p>Rekening Pembayar: </p>
                    <p>Nama Pemilik: </p>
            </div>
            <div className="col-md-6">
                <p>{this.props.Trans.username}</p>
                    <p>{this.props.Trans.total_harga}</p>
                    <p>{this.props.Trans.pembayaran}</p>
                    <p>{this.props.Trans.pengiriman}</p>
                    <p>{this.props.Trans.status}</p>
                    <p>{this.props.Trans.rekening_bayar}</p>
                    <p>{this.props.Trans.nama_pembayar}</p>
                </div>
                {/* <button style={{ margin: "2%"}} name="pembayaran" value="1" onClick={(e) => this.Pay(e)} className="btn btn-outline-primary">Pay</button> */}
            </div>
            <div className="row text-center">
                <div className="col-md-12">
                <button style={{ margin: "2%", textAlign:"center"}} onClick={() => this.backHome()} className="btn btn-outline-primary">Back To Profile</button>
                <button style={{ margin: "2%", textAlign:"center"}} onClick={() => this.cart()} className="btn btn-outline-primary">To Cart</button>
                <button style={{ margin: "2%", textAlign:"center"}} onClick={() => this.pay()} className="btn btn-outline-primary">Pay</button>
                </div>
            </div>
        </section>
  );
};
}
}

export default connect("Trans, is_login, status_bayar", actions) (withRouter(Trans));