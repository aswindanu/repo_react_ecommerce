import React, { Component } from 'react';
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";


class ListCart extends Component {
    // content = this.props.content.slice(0,250)
    handleOnClick = e => {
        console.log("event genre", e.target.value);
        this.props.setField(e);
        this.props.history.replace("/"+e.target.value);
        this.props.searchNews(e.target.value);
    };

    takeID= (e) => {
        this.props.setField(e);
    }

    delCartAdmin = (e) => {
        console.log('test lst user', this.props.listUser)
        this.props.setField(e);
        // this.props.setField({"username":});
        console.log("id", this.props.id)
        this.props.delCartAdmin();
        this.props.history.push("/admin");
        // })
    };
    render(){
      const style = {
          width : "100%",
          marginTop:"50%"
      }
      return (
        <section className="content" style={{ margin:"0px"}}>
              <div className="row">
                  <div className="col-md-3" style={{backgroundColor:"azure"}}>
                      <img style={style} src={this.props.image} alt="img_teaser" className="img_teaser"/>
                  </div>
                  <div className="col-md-9" style={{padding:"0px"}}>
                      <h3  style={{ backgroundColor:"grey"}}>{this.props.barang}, {this.props.resi}</h3><br/>
                      <p>User: {this.props.username}</p>
                      <p>Harga: {this.props.harga}</p>
                      <p>Deskripsi: {this.props.deskripsi}</p>
                      <p>Jumlah: {this.props.jumlah}</p>
                      <p>Status: {this.props.status}</p>
                      <button style={{ margin: "2%" }} name="id_cart" value={this.props.resi} onClick={(e) => this.takeID(e)} className="btn btn-outline-primary">Get ID</button>
                      <button style={{ margin: "2%" }} name="username" value={this.props.username} onClick={(e) => this.delCartAdmin(e)} className="btn btn-outline-primary">Delete Cart</button>
                  </div>
              </div>
          </section>
  );
};
}

export default connect("listCart", actions) (withRouter(ListCart));

