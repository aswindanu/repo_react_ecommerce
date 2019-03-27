import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";


class Profile extends Component {
    componentDidMount = () =>{
        this.props.getUser();
        console.log("this",this.props.listStuff);
    }; 

    Password = () => {
        this.props.history.replace("/password");
    };

    putUser = () => {
        this.props.history.replace("/profile/edit");
    };

    buySome = () => {
        this.props.history.replace("/");
    };

    seeTrans = () => {
        this.props.history.replace("/transaction");
    };

    cart = () => {
        this.props.history.replace("/cart");
    };

    render(){
        const style = {
            width:"100%",
            borderRadius:"50%",
            minHeight:"300px",
            marginTop:"12%"
        }
        if(this.props.is_login !== true){
            return <Redirect to={{ pathname: "/signin"}}/>;
        } 
        else {        
    return (
        <section className="content" style={{ padding:"5% 2% 15%", backgroundColor:"black", minHeight:"400px"}}>
        {/* <div className="row">
                <div className="col-md-12 text-center" style={{backgroundColor:"cadetblue"}}>
                    <h2 className="text-center" style={{margin:"2%"}}>ID Profile</h2>
                </div>
            </div> */}
            <div className="row" style={{height:"300px"}}>
                <div className="col-md-3" style={{backgroundColor:"darkcyan", borderRadius:"5%", padding:"0px"}}>
                    <img style={style} src={this.props.User.image} alt="img_teaser" className="img_teaser"/>
                </div>
                <div className="col-md-9 text-center" style={{padding:"0px", borderLeft: "1px solid cadetblue", backgroundColor:"cadetblue"}}>
                    <h2 className="text-center" style={{margin:"2%"}}>ID Profile</h2>
                    <h3 style={{ borderBottom:"1px solid lightslategray", backgroundColor:"grey"}}>{this.props.User.fullname}</h3><br/>
                    <p>ID: {this.props.User.id}</p>
                    <p>Username: {this.props.User.username}</p>
                    <p>Address: {this.props.User.address}</p>
                    <p>Zip Code: {this.props.User.zip_code}</p>
                    <p>Status: {this.props.User.status}</p>
                    <button style={{ margin: "2%", backgroundColor:"aliceblue" }} onClick={() => this.putUser()} className="btn btn-outline-primary">Edit Profile</button>
                    <button style={{ margin: "2%", backgroundColor:"powderblue" }} onClick={() => this.buySome()} className="btn btn-outline-primary">Go Buy Some</button>
                    <button style={{ margin: "2%", backgroundColor:"deepskyblue" }} onClick={() => this.cart()} className="btn btn-outline-primary">Go to Cart</button>
                    <button style={{ margin: "2%", backgroundColor:"silver" }} onClick={() => this.Password()} className="btn btn-outline-primary">Change Password</button>
                    <button style={{ margin: "2%", backgroundColor:"white"}} onClick={() => this.seeTrans()} className="btn btn-outline-primary">See Transaction</button>
                </div>
            </div>
        </section>
  );
};
}
}

export default connect("User, is_login", actions) (withRouter(Profile));