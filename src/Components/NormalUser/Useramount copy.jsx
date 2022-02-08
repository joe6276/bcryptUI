import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './userComponent.css'
export default class Number extends Component {
  render() {
    return (
    <div> 
      
      <div className='container-div'>
            <div className='form-container'>
            <h1>Enter Amount to send </h1>
            <input type="text" placeholder='E.g. 1000'/>
            <Link className='form_link' to ="/pin">Enter</Link>
            </div>
        </div>

    </div>
    );
  }
}
