import React, { Component } from 'react';
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";

class ListCour extends Component {
    // content = this.props.content.slice(0,250)
    handleOnClick = e => {
        console.log("event genre", e.target.value);
        this.props.setField(e);
        this.props.history.replace("/"+e.target.value);
        this.props.searchNews(e.target.value);
    };

    delCourAdmin = (e) => {
        console.log('test lst user', this.props.listUser)
        this.props.setField(e);
        // this.props.setField({"username":});
        console.log("id", this.props.id)
        this.props.delCourAdmin();
        this.props.history.push("/admin");
        // })
    };

    render(){
      const style = {
        width : "100%",
        marginTop:"12%"
    }
    return (
      <section className="content" style={{  margin:"0px"}}>
          <div className="row">
              <div className="col-md-3" style={{backgroundColor:"azure"}}>
                  <img style={style} src={this.props.image} alt="img_teaser" className="img_teaser"/>
              </div>
              <div className="col-md-9" style={{padding:"0px"}}>
                  <h3  style={{  backgroundColor:"grey"}}>{this.props.nama_kurir}</h3><br/>
                  <p>Pengiriman: {this.props.nama_kurir}</p>
                  <p>Jenis: {this.props.mode_pengiriman}</p>
                  <button style={{ margin: "2%" }} name="id_kurir" value={this.props.id_nya} onClick={(e) => this.delCourAdmin(e)} className="btn btn-outline-primary">Delete Courier</button>
              </div>
          </div>
      </section>
  );
};
}

export default connect("listCour", actions) (withRouter(ListCour));

