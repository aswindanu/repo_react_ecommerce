import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
import Search from '../components/Search.js';
import ListUser from '../components/ListUser';
import ListStuff from '../components/ListStuffAdmin';
import ListCart from '../components/ListCart';
import ListBank from '../components/ListBank';
import ListCour from '../components/ListCour';
import ListTrans from '../components/ListTrans';

class Admin extends Component {

    componentDidMount = () =>{
        this.props.getAll();
        this.props.cariStuff();
        // this.props.getCart();
        // this.props.getBank();
        // this.props.getCour();
        // this.props.getTrans();
        console.log("this",this.props.listStuff);
    }; 

    prevPage = () => {
        this.props.prevPage();
        // .then(() => {
        this.props.getAll();
        this.props.cariStuffAdmin();
        // this.props.getCartAdmin();
        this.props.getBankAdmin();
        // this.props.getCourAdmin();
        // this.props.getTransAdmin();
        // })
    };

    nextPage = () => {
        this.props.nextPage();
        // .then(() => {
        this.props.getAll();
        // this.props.cariStuffAdmin();
        // this.props.getCartAdmin();
        this.props.getBankAdmin();
        // this.props.getCourAdmin();
        // this.props.getTransAdmin();
        // })
    };

    postStuff = () => {
        this.props.history.replace("/add/stuff")
    };

    postBank = () => {
        this.props.history.replace("/add/bank")
    };

    postCour = () => {
        this.props.history.replace("/add/courier")
    };

    getAll = (e) => {
        this.props.setField(e);
        this.props.getAll().then(() => {
        console.log("this", this);
        })
    };

    getStuff = (e) => {
        this.props.setField(e);
        this.props.cariStuff().then(() => {
        console.log("this", this);
        })
    };

    // get cart (client)
    getCart = (e) => {
        this.props.setField(e);
        this.props.getCart().then(() => {
        console.log("this adm", this);
        })
    };

    // get bank
    getBank = (e) => {
        this.props.setField(e);
        this.props.getBank().then(() => {
        console.log("this bank", this);
        })
    };

    // get cour
    getCour = (e) => {
        this.props.setField(e);
        this.props.getCour().then(() => {
        console.log("this cour", this);
        })
    };

    // get transaction
    getTrans = (e) => {
        this.props.setField(e);
        this.props.getTransAdmin().then(() => {
        console.log("this", this);
        })
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
        if(this.props.is_login != true){if (this.props.type != 'admin' || this.props.type != 'superadmin'){
            return <Redirect to={{ pathname: "/signin"}}/>;}
        } 
        else {        
        return (
            <div class="container-fluid" style={{ backgroundColor:"black", color:"white"}}>
                <div class="row">
                    <div class="col-md-4">
                        <Search 
                        title="Cari" 
                        placeholder="Admin finder.."
                        doSearch={this.handleInputChange}
                        />
                            <div className="SideList">
                                <ul class="list-group">
                                <button className="btn btn-primary" name="type" value="listUser" onClick={(e)=>this.getAll(e)}>Data Users</button>
                                <button className="btn btn-primary" name="type" value="listStuff" onClick={(e)=>this.getStuff(e)}>Data Stuffs</button>
                                <button className="btn btn-primary" name="type" value="listCart" onClick={(e)=>this.getCart(e)}>Data Carts</button>
                                <button className="btn btn-primary" name="type" value="listBank" onClick={(e)=>this.getBank(e)}>Data Banks</button>
                                <button className="btn btn-primary" name="type" value="listCour" onClick={(e)=>this.getCour(e)}>Data Couriers</button>
                                <button className="btn btn-primary" name="type" value="listTrans" onClick={(e)=>this.getTrans(e)}>Data Transactions</button>
                                <button style={{ margin: "2%" }} onClick={() => this.postStuff()} className="btn btn-outline-primary">Add Stuff</button>
                                <button style={{ margin: "2%" }} onClick={() => this.postBank()} className="btn btn-outline-primary">Add Bank</button>
                                <button style={{ margin: "2%" }} onClick={() => this.postCour()} className="btn btn-outline-primary">Add Courier</button>
                                </ul>
                            </div>
                    </div>
                {/* </div> */}
                {/* <div className="row"> */}
                    <div class="col-md-8 text-center">
                        <button style={{ margin: "2%" }} onClick={() => this.prevPage()} className="btn btn-outline-primary">Prev Page</button>
                        <button style={{ margin: "2%" }} onClick={() => this.nextPage()} className="btn btn-outline-primary">Next Page</button>
                        {/* {   
                            this.props.listStuff.map((item,key) =>{
                            if (item.jenis.indexOf(this.props.search) > -1 || item.barang.indexOf(this.props.search) > -1){
                            return <ListStuff barang={item.barang} image={item.image} key={key} resi={item.resi} harga={item.harga} deskripsi={item.deskripsi} jenis={item.jenis} jumlah={item.jumlah} status={item.status}/>;}
                            }).slice(0,6)
                        } */}
                            {   
                            this.props.listUser.map((item,key) => {
                                if (this.props.type == "listUser" || item.username.indexOf(this.props.search) > -1 || item.fullname.indexOf(this.props.search) > -1) {
                                return <ListUser key={key} id_nya={item.id} type={item.type} username={item.username} password={item.password} fullname={item.fullname} address={item.address} zip_code={item.zip_code} image={item.image} status={item.status}/>
                            }})}
                            {
                            this.props.listStuff.map((item,key) => {
                                if (this.props.type == "listStuff" || item.jenis.indexOf(this.props.search) > -1 || item.barang.indexOf(this.props.search) > -1) {
                                return <ListStuff barang={item.barang} image={item.image} key={key} resi={item.resi} harga={item.harga} deskripsi={item.deskripsi} jenis={item.jenis} jumlah={item.jumlah} status={item.status}/>
                            }})}
                            {
                            this.props.listCart.map((item,key) => {
                                if (this.props.type == "listCart" || item.jenis.indexOf(this.props.search) > -1 || item.barang.indexOf(this.props.search) > -1) {
                                return <ListCart username={item.username} id={item.id} barang={item.barang} image={item.image} key={key} resi={item.resi} harga={item.harga} deskripsi={item.deskripsi} jenis={item.jenis} jumlah={item.jumlah} status={item.status}/>
                            }})}
                            {
                            this.props.listBank.map((item,key) => {
                                if (this.props.type == "listBank" || item.nama_bank.indexOf(this.props.search) > -1 || item.nama_pemilik.indexOf(this.props.search) > -1) {
                                return <ListBank key={key} id_nya={item.id} nama_bank={item.nama_bank} no_rekening={item.no_rekening} nama_pemilik={item.nama_pemilik} image={item.image}/>
                            }})}
                            {
                            this.props.listCour.map((item,key) => {
                                if (this.props.type == "listCour" || item.nama_kurir.indexOf(this.props.search) > -1 || item.mode_pengiriman.indexOf(this.props.search) > -1) {
                                return <ListCour key={key} image={item.image} id_nya={item.id} nama_kurir={item.nama_kurir} mode_pengiriman={item.mode_pengiriman}/>
                            }})}
                            {
                            this.props.listTrans.map((item,key) => {
                                if (this.props.type == "listTrans" || item.username.indexOf(this.props.search) > -1 || item.pembayaran.indexOf(this.props.search) > -1) {
                                return <ListTrans key={key} id_nya={item.id} username={item.username} image={item.image} total_harga={item.total_harga} pembayaran={item.pembayaran} pengiriman={item.pengiriman} status={item.status}/>
                            }})}
                    </div>
                </div>
        </div>
        );}
}}

export default connect("is_login, listUser, listStuff, listCart, listBank, listCour, listTrans, type, page", actions)
(withRouter(Admin));