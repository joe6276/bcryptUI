import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './normaluser.css'

export default class UserHomepage extends Component {
  render() {
    return( 
        <div>
        <div className="user-container">
        <h1> Welcome User Please Select to Continue !!!</h1>
            <div className="userhome">
                
                <Link  className='form_link' to="/number" >Send Money </Link>
                <Link  className='form_link'   to ="/wagent"> Withdraw Money</Link>
            </div>
        </div>
            
        </div>
    
    );
  }
}
