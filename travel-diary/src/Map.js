import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, GeoJSONLayer } from "react-mapbox-gl";
import './App.css';
import './Map.css';
import * as MapboxGL from 'mapbox-gl';

var classNames = require('classnames');
const TOKEN = 'pk.eyJ1IjoicWlhbi13YW5nIiwiYSI6ImNqZzF6eDk5MzE4dnAzM283bDFod2dtd3YifQ.02lGEEiPWoekKQabkgQlEg';
const Mapbox = ReactMapboxGl({ accessToken: TOKEN });
const geojson = require('./geojson.json');
const circleLayout: MapboxGL.CircleLayout = { visibility: 'visible' };
const circlePaint: MapboxGL.CirclePaint = {
    'circle-color': 'white',
    'circle-radius': {
        property: 'days',
        type: 'exponential',
        stops: [
            [1, 10],
            [4, 20]
        ]
    },
    'circle-opacity': 0.8
};
const symbolLayout: MapboxGL.SymbolLayout = {
    'text-field': '{name}',
    'text-font': ['Open Sans Semibold Italic', 'Arial Unicode MS Bold'],
    'text-offset': [0,0.6],
    'text-anchor': 'top'
};
const symbolPaint: MapboxGL.SymbolPaint = {
    'text-color': 'white'
};

class Map extends Component {
    render() {
        var classes = classNames({
            'Map': true,
        });
        var mgeojson = {
            type: 'FeatureCollection',
            features: []
        }
        if (-1===this.props.place) {
            mgeojson = geojson;
        } else {
            for (var i=0; i < geojson.features.length; ++i) {
                if (i===this.props.place) {
                    mgeojson.features.push(geojson.features[i]);
                    break;
                }
            }
        }
        return (
            <Mapbox
                className={classes}
                style="mapbox://styles/mapbox/dark-v9"
                containerStyle={{
                    height: "100%",
                    width: "200%"
                }}
                zoom={[3.3]}
                center={[50, 40]}
                onStyleLoad={this.onStyleLoad}
                // onClick={this._onClickMap}
            >
                <GeoJSONLayer
                    data={mgeojson}
                    circleLayout={circleLayout}
                    circlePaint={circlePaint}
                    circleOnClick={this.onClickCircle}
                    symbolLayout={symbolLayout}
                    symbolPaint={symbolPaint}
                    // symbolOnClick={this.onClickCircle}
                />
                {/*<Layer*/}
                    {/*type="symbol"*/}
                    {/*id="marker"*/}
                    {/*layout={{ "icon-image": "marker-15" }}>*/}
                {/*</Layer>*/}
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
