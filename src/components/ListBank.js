import React, { Component } from 'react';
import {connect} from "unistore/react";
import {actions} from "../store";
import {Redirect} from "react-router-dom";
import {withRouter} from "react-router-dom";


class ListStuff extends Component {
    // content = this.props.content.slice(0,250)
    handleOnClick = e => {
        console.log("event genre", e.target.value);
        this.props.setField(e);
        this.props.history.replace("/"+e.target.value);
        this.props.searchNews(e.target.value);
    };

    delBankAdmin = (e) => {
        console.log('test lst user', this.props.listUser)
        this.props.setField(e);
        console.log("id", this.props.id)
        this.props.delBankAdmin();

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
                  <h3  style={{ backgroundColor:"grey"}}>{this.props.nama_pemilik}</h3><br/>
                  <p>Bank: {this.props.nama_bank}</p>
                  <p>No. Rekening: {this.props.no_rekening}</p>
                  <button style={{ margin: "2%" }} name="id_bank" value={this.props.id_nya} onClick={(e) => this.delBankAdmin(e)} className="btn btn-outline-primary">Delete Bank</button>
              </div>
          </div>
      </section>
  );
};
}

export default connect("listStuff", actions) (withRouter(ListStuff));

