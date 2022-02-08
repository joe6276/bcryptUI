import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './userComponent.css'
export default class Agent extends Component {
  render() {
    return (
    <div>
         <div className='container-div'>
            <div className='form-container'>
            <h1>Enter Agent Number</h1>
            <input type="text" placeholder='E.g. 4256789'/>
            <Link className='form_link' to ="/withdraw">Enter</Link>
            </div>
        </div>
    </div>
    );
  }
}
