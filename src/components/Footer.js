import React, { Component } from 'react';
import '../styles/blog.css';

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer font-small stylish-color-dark pt-4">
        <div class="container text-center text-md-left">
          <div class="row">
              <div class="col-md-4 mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4" style={{fontWeight:"600", color:"cadetblue", fontSize:"25px"}}>DOTA 2 Store</h5>
                <p>Here you can buy everything from merchandise that sponsored by DOTA 2 Official production.</p>
              </div>
                <hr class="clearfix w-100 d-md-none"/>

              <div class="col-md-6 mx-auto text-center">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4" style={{fontWeight:"600", fontSize:"15px"}}>DOTA 2 Official Website</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="www.dota2.com" style={{textDecoration:"none", fontWeight:"600", color:"blue"}}>www.dota2.com</a>
                  </li>
                </ul>
              </div>
                <hr class="clearfix w-100 d-md-none"/>
      
            </div>
            
          </div>      
          <div class="footer-copyright text-center py-3">© 2018 Copyright:
            <a href="https://dota2store.site" id="website"> dota2store.site</a>
          </div>
      
      </footer>
      )
    }
  }
  
export default Footer;
