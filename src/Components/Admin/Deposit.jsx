import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {AiFillCheckCircle} from 'react-icons/ai'
export default class Deposit extends Component {
  render() {
    return( 
    <div>
           <div className='success-container'>
            <div className='sucess-header'>
            
                <h1>Success <AiFillCheckCircle style={{color:'green'}}/></h1>
                <p>You have successfully Deposited ...</p>
                <Link className='form_link' to="/" >OK </Link>
            </div>
            </div>

    </div> 
    );
  }
}
