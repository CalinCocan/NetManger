import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PhotoIcon from '@material-ui/icons/Photo';

class PresentationForNetworkImages extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Link to="/NetworkImages">
                    <h6> <PhotoIcon /> <b>Network Images</b></h6>
                </Link>
                <p> is trying to present photos taken from various network devices, network locations and netowrk sites. These photos can help troubleshooting and are usefull for documentation</p>
            </div>
        );
    }
}

export default PresentationForNetworkImages;