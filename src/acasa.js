import React, { Component } from 'react';
import PresentationForNetworkInventory from './presentationForNetworkInventory'
import PresentationForNetworkMonitor from './presentationForNetworkMonitor'
import PresentationForNetworkImages from './presentationForNetworkImages'
import './acasa.css'

class NetworkPresentation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="container mt-5">
            <h5> Aceasta aplicatie se doreste a fi un proiect sustinut in cadrul programului postuniversitar <span><b>Informatica Aplicata si Programare</b></span> </h5>
            <h5> Aplicatia cuprinde urmatoarele module:</h5>
            <ul>
                <li>
                    <PresentationForNetworkInventory />
                </li>
                <li>
                    <PresentationForNetworkMonitor />
                </li>
                <li>
                    <PresentationForNetworkImages />
                </li>
            </ul>
        </div>);
    }
}

export default NetworkPresentation;