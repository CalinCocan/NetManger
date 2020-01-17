import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './navbar';

class NetworkManager extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                </div>
            </BrowserRouter>
        );
    }
}

export default NetworkManager;