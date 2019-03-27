import React, { Component } from 'react';
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";

class ListStuff extends Component {
    // content = this.props.content.slice(0,250)
    handleOnClick = e => {
        console.log("event genre", e.target.value);
        this.props.setField(e);
        this.props.history.replace("/"+e.target.value);
        this.props.searchNews(e.target.value);
    };

    putStuff = (e) => {
        // if (this.props.password == this.props.confirm){
        this.props.setField(e);
        console.log("iki resi e",this.props.resi_stuff)
        this.props.history.replace("/stuff/edit");
        // this.props.putStuff();
        console.log("iki barang e",this.props.Stuff)
    // }
    };
    
    delStuff = (e) => {
        console.log('test lst user', this.props.listUser)
        this.props.setField(e);
        console.log("id", this.props.id)
        this.props.delStuff();
        alert("Delete Success");
    };

    render(){
    const style = {
        width : "100%",
        marginTop: "12%"
    }
    return (
      <section className="content" style={{ margin:"0px"}}>
            <div className="row">
                <div className="col-md-3" style={{backgroundColor:"azure"}}>
                    <img style={style} src={this.props.image} alt="img_teaser" className="img_teaser"/>
                </div>
                <div className="col-md-9" style={{padding:"0px"}}>
                    <h3  style={{ backgroundColor:"grey"}}>{this.props.barang}, {this.props.resi}</h3><br/>
                    <p>Harga: {this.props.harga}</p>
                    <p>Deskripsi: {this.props.deskripsi}</p>
                    <p>Jumlah: {this.props.jumlah}</p>
                    <p>Status: {this.props.status}</p>
                    <button style={{ margin: "2%" }} name="resi_stuff" value={this.props.resi} onClick={(e) => this.putStuff(e)} className="btn btn-outline-primary">Edit Data</button>
                    <button style={{ margin: "2%" }} name="resi_stuff" value={this.props.resi} onClick={(e) => this.delStuff(e)} className="btn btn-outline-primary">Delete Stuff</button>
                </div>
            </div>
        </section>
  );
};
}

export default connect("listStuff, resi_stuff", actions) (withRouter(ListStuff));

