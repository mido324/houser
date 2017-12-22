import React, { Component } from 'react';
import headerlogo from './../../pictures/header_logo.png'
import {Link}  from 'react-router-dom';
import dashboard from './dashboard.css'

export default function () {
    return (
        <div>
            <div className="header">
                <div className="one-s">
                    <div className="second-b">
                    <img src={headerlogo} alt=""/>
                        <p className="title">
                            <strong>Houser</strong>
                            Dashboard</p>
                    <Link to="/">
                        <div >
            <strong className = "logout" > Logout </strong>
                        </div>
                    </Link>
                    </div>
                    
                </div>
            </div>
            <div className="content">
                <div className="middle"></div>
            </div>

            <div>
               
            </div>
            <div className="step1">
                <Link to='/step1'>
                    Step 1
                </Link>
            </div>
        </div>

    )
};