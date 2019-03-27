import React, { Component } from 'react';
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";


class ListTrans extends Component {
    handleOnClick = e => {
        console.log("event genre", e.target.value);
        this.props.setField(e);
        this.props.history.replace("/"+e.target.value);
        this.props.searchNews(e.target.value);
    };
    delUser = (e) => {
        console.log('test lst user', this.props.listUser)
        this.props.setField(e);
        console.log("id", this.props.id)
        this.props.delTransAdmin().then(() => {
            alert("Delete Success");
        })
    };
    render(){
        const style = {
            width : "100%",
            marginTop:"12%"
        }
    return (
      <section className="content" style={{ margin:"0px"}}>
              <div className="row">
                  <div className="col-md-3" style={{backgroundColor:"azure"}}>
                      <img style={style} src={this.props.image} alt="img_teaser" className="img_teaser"/>
                  </div>
                  <div className="col-md-9" style={{padding:"0px"}}>
                      <h3  style={{ backgroundColor:"grey"}}>ID: {this.props.id_nya}</h3><br/>
                      <p>User: {this.props.username}</p>
                      <p>Total: {this.props.total_harga}</p>
                      <p>Pembayaran: {this.props.pembayaran}</p>
                      <p>Pengiriman: {this.props.pengiriman}</p>
                      <p>Status: {this.props.status}</p>
                  </div>
              </div>
              <button style={{ margin: "2%" }} name="id_trans" value={this.props.id_nya} onClick={(e) => this.delUser(e)} className="btn btn-outline-primary">Delete Transaksi</button>
          </section>
  );
};
}

export default connect("listTrans, id_trans", actions) (withRouter(ListTrans));

