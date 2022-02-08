import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'
export default class index extends Component {
  render() {
    return (
    
    <div>
        <div className='links'>
        <Link className='link' to ="/login">Login</Link>
        <Link className='link' to ="/register">Register</Link>
        </div>
        <div className='links'>
        <Link className='link' to ="/agent">Agent</Link>
        <Link className='link' to ="/user">Normal User</Link>
        </div>
        <div className='links'>
        <Link className='link' to ="/adminhome">Admin</Link>
        </div>
        
    </div>
    
    );
  }
}
