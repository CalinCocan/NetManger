import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CellWifiIcon from '@material-ui/icons/CellWifi';

class PresentationForNetworkMonitor extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Link to="/NetworkMonitor">
                    <h6> <CellWifiIcon /> <b>Network Monitor</b></h6>
                </Link>
                <p> It's and aplication that try to render network maps and the state of the network elements (responding or not respondig), pooled by ICMP or SNMP</p>
            </div>);
    }
}

export default PresentationForNetworkMonitor;