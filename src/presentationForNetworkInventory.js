import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSitemap } from "@fortawesome/free-solid-svg-icons";
import AssessmentIcon from '@material-ui/icons/Assessment';


class PresentationForNetworkInventory extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>

                <Link to="/NetworkInventory">
                    {/* <h6><FontAwesomeIcon icon={faSitemap} /> <b> Network inventory</b></h6> */}
                    <h6><AssessmentIcon />  <b> Network inventory</b></h6>
                </Link>
                {/* <p className="blocquote text-center" >that is trying to find how many devices they are, of which type, where are they located and many other questions like these</p> */}
                <p>that is trying to find how many devices they are, of which type, where are they located and many other questions like these</p>
            </div>);
    }
}

export default PresentationForNetworkInventory;