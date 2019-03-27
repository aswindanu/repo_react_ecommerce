import React, { Component } from 'react';
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";


class ListUser extends Component {
    handleOnClick = e => {
        console.log("event genre", e.target.value);
        this.props.setField(e);
        this.props.history.replace("/"+e.target.value);
        this.props.searchNews(e.target.value);
    };

    putUser = (e) => {
        console.log('test lst user', this.props.listUser)
        this.props.setField(e);
        console.log("id", this.props.id)
        this.props.putAdmin();
        alert("Reactivate Success");
    };

    delUser = (e) => {
        console.log('test lst user', this.props.listUser)
        this.props.setField(e);
        console.log("id", this.props.id)
        this.props.delAdmin();
        alert("Delete Success");
    };

    render(){
        const style = {
            width:"100%",
            // minHeight: "400px",
            marginTop: "50%"
        }
    return (
        <section className="content" style={{ margin:"0px"}}>
            <div className="row">
                <div className="col-md-3" style={{backgroundColor:"azure"}}>
                    <img style={style} src={this.props.image} alt="img_teaser" className="img_teaser"/>
                </div>
                <div className="col-md-9" style={{padding:"0px"}}>
                    <h3 style={{ backgroundColor:"grey"}}>{this.props.fullname}</h3><br/>
                    <p>ID: {this.props.key} {this.props.id_nya}</p>
                    <p>Type: {this.props.type}</p>
                    <p>Username: {this.props.username}</p>
                    <p>Address: {this.props.address}</p>
                    <p>Zip Code: {this.props.zip_code}</p>
                    <p>Status: {this.props.status}</p>
                    <button style={{ margin: "2%" }} name="id" value={this.props.id_nya} onClick={(e) => this.putUser(e)} className="btn btn-outline-primary">Reactivate</button>
                    <button style={{ margin: "2%" }} name="id" value={this.props.id_nya} onClick={(e) => this.delUser(e)} className="btn btn-outline-primary">Deactivate</button>
                </div>
            </div>
        </section>
  );
};
}

export default connect("ListUser, id, User", actions) (withRouter(ListUser));

