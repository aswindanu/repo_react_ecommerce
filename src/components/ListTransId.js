import React, { Component } from 'react';
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";


class ListTransId extends Component {
    // content = this.props.content.slice(0,250)
    handleOnClick = e => {
        console.log("event genre", e.target.value);
        this.props.setField(e);
        this.props.history.replace("/"+e.target.value);
        this.props.searchNews(e.target.value);
    };

    render(){
      const style = {
          width : "100%"
      }
      return (
        <section className="content" style={{ borderBottom:"1px solid lightslategray", margin:"0px"}}>
              <div className="row">
                  {/* <div className="col-md-4" style={{backgroundColor:"grey"}}>
                      <img style={style} src={this.props.image} alt="img_teaser" className="img_teaser"/>
                  </div> */}
                  <div className="col-md-12">
                      <h3  style={{ borderBottom:"1px solid lightslategray", backgroundColor:"grey"}}>{this.props.id_nya}</h3><br/>
                      <p>User: {this.props.username}</p>
                      <p>Harga: {this.props.total_harga}</p>
                      <p>Pembayaran: {this.props.pembayaran}</p>
                      <p>Jumlah: {this.props.pembelian}</p>
                      <p>Status: {this.props.status}</p>
                  </div>
              </div>
        </section>
  );
};
}

export default connect("listTrans", actions) (withRouter(ListTransId));

