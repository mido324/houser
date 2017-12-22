import React, { Component } from 'react';
import headerlogo from './../../pictures/header_logo.png'
import {Link}  from 'react-router-dom';

export default function () {
    return (
        <div>
            <div className="header">
                <div className="one-s">
                    <div className="second-b"><img src={headerlogo} alt=""/>
                        <p className="title">
                            <strong>Houser</strong>
                            Dashboard</p>
                    </div>
                    <Link to="/">
                        <div className="logout">
                            <strong>Logout</strong>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="content">
                <div className="middle"></div>
            </div>

            <div>
                <h1>
                    this is the dashboard 
                </h1>
            </div>
            <div className="step1">
                <Link to='/step1'>
                    Step 1
                </Link>
            </div>
        </div>

    )
};