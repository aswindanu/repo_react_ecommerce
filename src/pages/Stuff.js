import React, { Component } from 'react';
// import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
import Search from '../components/Search.js';
import ListStuff from '../components/ListStuff';
// import {Link} from "react-router-dom";

class Stuff extends Component {

componentDidMount = () =>{
    this.props.cariStuff();
    console.log("this",this.props.listStuff);
}; 

handleInputChange = e => {
    this.props.setField(e);
    this.props.searchStuff(e.target.value);
};

handleOnClick = e => {
    console.log("event genre", e.target.value);
    this.props.setField(e);
    this.props.searchStuff(e.target.value);
};

render() {
    return (
    <div id="demo" class="carousel slide" data-ride="carousel" style={{backgroundImage:require("../images/img/background-Stuff.jpg")}}>    
        <div class="container-fluid" style={{backgroundImage:require("../images/img/background-Stuff.jpg")}}>
            <div className="row">
                    {   
                        this.props.listStuff.map((item,key) =>{
                        return <ListStuff barang={item.barang} image={item.image} key={key} resi={item.resi} harga={item.harga} deskripsi={item.deskripsi} jenis={item.jenis} jumlah={item.jumlah} status={item.status}/>;}
                        )}
                </div>
            </div>
        </div>
    // </div>
    );
}
}
{/* } */}

export default connect("listStuff", actions)
(withRouter(Stuff));