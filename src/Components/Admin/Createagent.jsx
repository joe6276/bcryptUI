
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './createagent.css'
export default class Createagent extends Component {
  render() {
    return (
    <div>
        <div className='container-div'>
            <div className='form-container'>
            <h1>Create a New Agent</h1>
            <input type="text" placeholder='Enter Name....'/>
            <input type="text" placeholder='Enter Agent Number....'/>
            <input type="text" placeholder='Owner Phone Number....'/>
          


            <Link className='form_link' to ="/adminsuccess">Add Agent</Link>
            </div>
        </div>

    </div>
    
    );
  }
}
