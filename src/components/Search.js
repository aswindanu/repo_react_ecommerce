import React, { Component } from 'react';


class Search extends Component {
  render() {
    return (
      <div className="Search my-4" style={{borderRadius:"15%"}}>
        <nav class="navbar sticky-top navbar-light bg-light justify-content-between" style={{borderRadius:"5%"}}>
            <form onSubmit={e => { e.preventDefault(); }}  class="form-inline">
                <input class="form-control mr-sm-2" 
                type="text"
                name="search"
                id="search"
                placeholder={this.props.placeholder} 
                onChange = {this.props.doSearch}
                />
                <button class="btn btn-outline-success my-2 my-sm-0" >{this.props.title}</button>
            </form>
        </nav>
      </div>
    );
  }
}

export default Search;
