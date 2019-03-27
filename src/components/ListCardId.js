import React, { Component } from 'react';
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
import { useAlert } from 'react-alert'


class ListCartId extends Component {
    handleOnClick = e => {
        console.log("event genre", e.target.value);
        this.props.setField(e);
        this.props.history.replace("/"+e.target.value);
        this.props.searchNews(e.target.value);
    };


    plus = () => {
        this.props.plusCart();

    };

    minus = () => {
        this.props.minCart();

    };

    putCart = (e) => {
        console.log('test lst user', this.props.listUser)
        this.props.setField(e);
        console.log("id", this.props.id)
        this.props.putCart();
        alert("Edit jumlah barang Sukses")
    };

    delCart = (e) => {
        console.log('test lst user', this.props.listUser)
        this.props.setField(e);
        console.log("id", this.props.id)
        this.props.delCart();
        alert("Delete cart Sukses")
    };

    render(){
      const style = {
          width : "100%",
          marginTop:"10%"
      }
      return (
        <section className="content" style={{ margin:"0px"}}>
              <div className="row">
                  <div className="col-md-4" style={{backgroundColor:"black"}}>
                      <img style={style} src={this.props.image} alt="img_teaser" className="img_teaser"/>
                  </div>
                  <div className="col-md-8" style={{padding:"0px"}}>
                      <h3  style={{ borderBottom:"1px solid lightslategray", borderTop:"1px solid lightslategray"}}>{this.props.barang}</h3><br/>
                      <p>Resi: {this.props.resi}</p>
                      <p>User: {this.props.username}</p>
                      <p>Harga: {this.props.harga}</p>
                      <p>Deskripsi: {this.props.deskripsi}</p>
                      <p>Jumlah: {this.props.jumlah}</p>
                      <p>Status: {this.props.status}</p>
                        <button style={{ margin: "2%", backgroundColor:"darkseagreen" }} onClick={() => this.minus()} className="btn btn-outline-primary">-</button>
                        <button style={{ margin: "2%", backgroundColor:"cadetblue" }} onClick={() => this.plus()} className="btn btn-outline-primary">+</button>
                      <button style={{ margin: "2%", backgroundColor:"aliceblue" }} name="id_cart" value={this.props.id_nya} onClick={(e) => this.putCart(e)} className="btn btn-outline-primary">Submit Tambah/Kurang</button>
                      <button style={{ margin: "2%", backgroundColor:"burlywood" }} name="id_cart" value={this.props.id_nya} onClick={(e) => this.delCart(e)} className="btn btn-outline-primary">Delete Cart</button>
                  </div>
              </div>
          </section>
  );
};
}

export default connect("listCart", actions) (withRouter(ListCartId));

