import React, { Component } from 'react';
// import ReactMapGL from 'react-map-gl';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import './App.css';
import './Map.css';
// import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
var classNames = require('classnames');
const TOKEN = 'pk.eyJ1IjoicWlhbi13YW5nIiwiYSI6ImNqZzF6eDk5MzE4dnAzM283bDFod2dtd3YifQ.02lGEEiPWoekKQabkgQlEg';
// const { token, styles } = require('./config.json');
const Mapbox = ReactMapboxGl({ accessToken: TOKEN });
const mapStyle = {
    width: '100%',
    height: '100%'
};


class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 8
            }
        };
    }

    handleStyleLoad = map => (map.resize())

    render() {
        var classes = classNames({
            'Map': true,
        });
        return (
            <Mapbox
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: "100%",
                    width: "100%"
                }}
                onStyleLoad={this.handleStyleLoad}
            >
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
                </Layer>
            </Mapbox>
            // {/*<ReactMapGL*/}
            //     {/*width={100}*/}
            //     {/*{...this.state.viewport}*/}
            //     {/*onViewportChange={(viewport) => this.setState({viewport})}*/}
            //     {/*mapboxApiAccessToken={TOKEN}*/}
            // {/*/>*/}
            // <div className={classes}>
            //     <Button color={0===this.props.place?"primary":"default"} onClick={(e) => this.props.handler(0, e)}>All</Button>
            //     <Button color={'barcelona'===this.props.place?"primary":"default"} onClick={(e) => this.props.handler('barcelona', e)}>Barcelona</Button>
            // </div>
        );
    }
}

export default Map;
