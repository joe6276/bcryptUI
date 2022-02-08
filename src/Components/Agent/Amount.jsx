import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './deposit.css'
export default class Amount extends Component {
  render() {
    return (
    <div>

        <div className='container-div'>
            <div className='form-container'>
            <h1>Enter Pin</h1>
            <input type="text" placeholder='Enter Pin....'/>
            <Link className='form_link' to ="/success">Enter</Link>
            </div>
        </div>

    </div>
    );
  }
}
