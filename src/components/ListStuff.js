import React, { Component } from 'react';
import {connect} from "unistore/react";
import {actions} from "../store";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";


class ListStuff extends Component {
    handleOnClick = e => {
        console.log("event genre", e.target.value);
        this.props.setField(e);
        this.props.history.replace("/"+e.target.value);
        this.props.searchNews(e.target.value);
    };

    getStuff = (e) => {
      console.log('test')
      this.props.setField(e);
      this.props.getStuff();
      // alert("Delete Success");
      this.props.history.replace("/details");
      // })
  };
    
    render(){
    return (
      <section className="content col-md-2">
          <div className="card mb-3" style={{height:"450px", borderColor:"black"}}>
            <img className="card-img-top gambar-top" style={{minHeight:"183px", maxHeight:"185px"}} src={this.props.image} alt="Card image cap"/>
            <div className="card-body" style={{backgroundColor:"black", color:"aliceblue"}}>
              <strong className="text-center">{this.props.barang.slice(0,25)}..</strong>
              {/* <p>Resi:{this.props.resi}</p> */}
              {/* <h3 className="card-title"><b>Harga</b>: Rp.{this.props.harga}</h3> */}
              {/* <p className="card-text"><b>Deskripsi</b>: {this.props.deskripsi.slice(0, 24)}...</p> */}
              <p className="card-text"><b>Jenis</b>: {this.props.jenis}</p>
              {/* <p className="card-text"><b>Jumlah</b>: {this.props.jumlah}</p> */}
              <p className="card-text"><b>Status</b>: {this.props.status}</p>
            </div>
            <div className="card-footer text-muted" style={{backgroundColor:"currentcolor"}}>
            <button style={{ margin: "2%", backgroundColor:"aliceblue" }} name="resi_stuff" value={this.props.resi} onClick={(e) => this.getStuff(e)} className="btn btn-outline-primary">Details</button>
            {/* <Link to="/details"><button style={{backgroundColor:"transparent", border:" 1px skyblue", color:"skyblue", height:"55px", width:"15%"}}>Home</button></Link> */}
            </div>    
          </div>    
      </section>
  );
};
}

export default connect("listStuff", actions) (withRouter(ListStuff));

