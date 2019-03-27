import React, { Component } from 'react';
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";
import "../styles/blog.css";
import "../styles/bootstrap.min.css"


class Header extends Component {
    handleOnClick = e => {
        console.log("event genre", e.target.value);
        this.props.setField(e);
        this.props.history.replace("/"+e.target.value);
        this.props.searchNews(e.target.value);
    };
    
    render(){
        return(
        <header style={{backgroundImage:"https://coverfiles.alphacoders.com/424/42443.jpg"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 mx-auto">
                    <Link to="/"><img style={{left:"-30px"}} src="http://cdn.dota2.com/apps/dota2/images/nav/logo.png"/></Link>
                </div>
                <div className="col-md-9 col-sm-12 mx-auto">
                    <a>
                        <Link to="/"><button style={{backgroundColor:"transparent", marginTop:"5%", border:"transparent", height:"55px", color:"transparent", width:"15%"}}>Home</button></Link>
                    </a>
                    <a>
                        <Link to="/signin"><button style={{backgroundColor:"transparent", marginTop:"5%", border:"transparent", height:"55px", color:"transparent", width:"11%"}}>Home</button></Link>
                    </a>
                    <a>
                        <Link to="/profile"><button style={{backgroundColor:"transparent", marginTop:"5%", border:"transparent", height:"55px", color:"transparent", width:"14%"}}>Home</button></Link>
                    </a>
                    <a>
                        <Link to="/cart"><button style={{backgroundColor:"transparent", marginTop:"5%", border:"transparent", height:"55px", color:"transparent", width:"13%"}}>Home</button></Link>
                    </a>
                    <a>
                        <Link to="/about"><button style={{backgroundColor:"transparent", marginTop:"5%", border:"transparent", height:"55px", color:"transparent", width:"13%"}}>Home</button></Link>
                    </a>
                </div>
            </div>
        </div>
        <div class="collapse" id="navbarHeader">
        <div class="container" style={{backgroundImage:"https://coverfiles.alphacoders.com/424/42443.jpg"}}>
          <div class="row">
            <div class="col-sm-12 col-md-12 py-4">
              <h4 class="text-white text-center mt-4"> </h4>
              {/* <p style={{backgroundColor:"black", opacity:"0.4", color:"darkcyan"}}><a> asa </a></p> */}
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-2 text-center">
            </div>
            <div class="col-sm-12 col-md-8 text-center">
                <a>
                    <Link to="/"><button style={{color:"yellow", backgroundColor:"transparent", border:"transparent", width:"19%"}}>Home</button></Link>
                </a>
                <a>
                    <Link to="/signin"><button style={{color:"chartreuse", backgroundColor:"transparent", border:"transparent", width:"14%"}}>Sign In</button></Link>
                </a>
            
                <a>
                    <Link to="/profile"><button style={{color:"red", backgroundColor:"transparent", border:"transparent", width:"17%"}}>Profile</button></Link>
                </a>
                <a>
                    <Link to="/cart"><button style={{color:"blue", backgroundColor:"transparent", border:"transparent", width:"16%"}}>Cart</button></Link>
                </a>
                <a>
                    <button onClick={() => this.props.signOut()} style={{color:"mediumpurple", border:"transparent", backgroundColor:"transparent", width:"16%"}}>Sign Out</button>
                </a>
                </div>
            <div class="col-sm-12 col-md-2 text-center">
            </div>
          </div>
        </div>
      </div>
        <div class="navbar navbar-dark box-shadow">
        <div class="container d-flex justify-content-between">
          <div href="#" class="navbar-brand d-flex align-items-center">
            <a style={{color:"grey"}}>Store <img src="https://s.tcdn.co/66f/40b/66f40bc9-7e5a-30e6-ac7e-035dc21dcd4a/1.png" width="30" height="30" style={{top:"15px"}}/></a>
          </div>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
        </header>
        );
    }
}

export default connect("is_login,email,full_name,listNews,listTopNews,genre", actions)
(withRouter(Header));
