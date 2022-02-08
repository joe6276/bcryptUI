import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './deposit.css'
export default class Deposit extends Component {
  render() {
    return (
    <div>
        <div className='container-div'>
            <div className='form-container'>
            <h1>Deposit</h1>
            <input type="text" placeholder='Enter Amount....'/>
            <Link className='form_link' to ="/amount">Enter</Link>
            </div>
        </div>

    </div>
    
    );
  }
}
