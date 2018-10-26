import React, { Component } from 'react';
import './App.css';
// import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

class Map extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button color={0===this.props.place?"primary":"default"} onClick={(e) => this.props.handler(0, e)}>All</Button>
                <Button color={1===this.props.place?"primary":"default"} onClick={(e) => this.props.handler(1, e)}>Barcelona</Button>
            </div>
        );
    }
}

export default Map;
