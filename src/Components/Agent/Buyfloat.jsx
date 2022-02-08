import React, { Component } from 'react';
import {AiFillCheckCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import './success.css'
export default class Buyfloat extends Component {
  render() {
    return (
    <div>
        <div className='success-container'>
            <div className='sucess-header'>
            
                <h1>Success <AiFillCheckCircle style={{color:'green'}}/></h1>
                <p>You have successfully Bought 100,000 float...</p>
                <Link className='form_link' to="/" >Close </Link>
            </div>
        </div>

    </div>
    );
  }
}
