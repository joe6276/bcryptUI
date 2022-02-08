import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './userComponent.css'
export default class Useramount extends Component {
  render() {
    return (
    <div> 
      
      <div className='container-div'>
            <div className='form-container'>
            <h1>Enter Phone Number</h1>
            <input type="text" placeholder='E.g. 0720000000'/>
            <Link className='form_link' to ="/useramount">Enter</Link>
            </div>
        </div>

    </div>
    );
  }
}
