import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Adminhomepage extends Component {
  render() {
    return (
    <div>
        <div className='container-main'>
            <div className='content-container'>
                <Link to="/number" className='ahbutton'>Send Money</Link>
                <Link to ='/admindeposit' className='ahbutton'>Deposit</Link>
                <Link to ='/createagent' className='ahbutton'>Add Agent</Link>
        </div>
        </div>
    </div>
    )
    ;
  }
}
