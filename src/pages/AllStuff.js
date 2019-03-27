import React, { Component } from 'react';
// import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
import Search from '../components/Search.js';
import ListStuff from '../components/ListStuff';
import {Link} from "react-router-dom";
import "../styles/bootstrap.min.css";

class AllStuff extends Component {

componentDidMount = () =>{
    this.props.cariStuff();
    console.log("this",this.props.listStuff);
}; 

getStuff = e => {
    this.props.setField(e);
    this.props.history.replace('/details');
    // })
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
    <div id="demo" class="carousel slide" data-ride="carousel" style={{backgroundImage:require("../images/img/background-home.jpg")}}>    
    
        <div class="carousel-inner">
        
        <div class="carousel-item active">
            <a href="https://www.dota2.com/international/overview/"><a style={{position:"absolute", zIndex:"1001", color:"white", top:"90%", left:"40%", fontSize:"25px"}}>Welcome to Dota 2 Store</a><img src={require("../images/img/slide-1-edit.jpg")} alt="Picture 1" width="1100" height="600"/></a>
        </div>
        <div class="carousel-item">
            <a href="https://www.dota2.com/news/updates/"><a style={{position:"absolute", zIndex:"1000", color:"black", top:"3%", left:"2%", fontSize:"30px"}}>Disc 30% for Sven</a><p style={{position:"absolute", textAlign:"center", zIndex:"1000", color:"black", top:"3%", left:"2%", fontSize:"15px"}}><br/><br/>Grab it now.!!</p><img style={{position:"relative"}} src={require("../images/img/slide-2.jpg")} alt="Picture 2" width="1100" height="600"/></a>
        </div>
        <div class="carousel-item">
            <a href="https://teamsecret.gg/"><a style={{position:"absolute", zIndex:"1000", color:"white", top:"2%", left:"1%", fontSize:"30px"}}>Disc 50%</a><p style={{position:"absolute", textAlign:"center", zIndex:"1000", color:"white", top:"3%", left:"2%", fontSize:"15px"}}><br/><br/>Grab it now.!!</p><img src={require("../images/img/slide-3.jpg")} alt="Picture 3" width="1100" height="600"/></a>
        </div>
        
        </div>
    
    
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
        </a>
        <div class="container-fluid" style={{backgroundImage:require("../images/img/background-home.jpg"), paddingLeft:"0px", paddingRight:"0px"}}>
            <div className="row" style={{backgroundColor:"grey", margin:"0px"}}>
                <div className="col-md-8">
                </div>
                <div className="col-md-4">
                <Search 
                    title="Cari" 
                    placeholder="Search for something..?"
                    doSearch={this.handleInputChange1}
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                </div>
            </div>
            <h2 className="text-center" style={{backgroundColor:"skyblue", marginBottom:"10px"}}>Dota Skin</h2>
            <div className="row">
                    {   
                        this.props.listStuff.map((item,key) =>{
                        //   if (item.jenis == "skin"){
                        return <ListStuff barang={item.barang} image={item.image} key={key} resi={item.resi} harga={item.harga} deskripsi={item.deskripsi} jenis={item.jenis} jumlah={item.jumlah} status={item.status}/>;}
                        )}
            </div>
        </div>
    // </div>
    );
}
}
{/* } */}

export default connect("listStuff", actions)
(withRouter(AllStuff));