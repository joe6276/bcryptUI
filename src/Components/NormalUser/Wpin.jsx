import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './userComponent.css'
export default class Wpin extends Component {
  render() {
    return (
    <div>

        <div className='container-div'>
            <div className='form-container'>
            <h1>Enter Your Pin</h1>
            <input type="text" placeholder='Enter Pin....'/>
            <Link className='form_link' to ="/withdrawsucess">Enter</Link>
            </div>
        </div>

    </div>
    );
  }
}
