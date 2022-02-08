import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './agentHome.css'
export default class Agenthome extends Component {
  render() {
    return( 
    <div>
        <div className='container-main'>
            <div className='content-container'>
                <Link to="/dnumber" className='ahbutton'>Deposit</Link>
                <Link to ='/buyfloat' className='ahbutton'>Buy E-Float</Link>
            </div>
        </div>
    </div>
    )
    ;
  }
}
