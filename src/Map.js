import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, GeoJSONLayer } from "react-mapbox-gl";
import './App.css';
import './Map.css';
import * as MapboxGL from 'mapbox-gl';

const TOKEN = 'pk.eyJ1IjoicWlhbi13YW5nIiwiYSI6ImNqZzF6eDk5MzE4dnAzM283bDFod2dtd3YifQ.02lGEEiPWoekKQabkgQlEg';
const geojson = require('./geojson.json');
const Mapbox = ReactMapboxGl({ accessToken: TOKEN });

const circleLayout: MapboxGL.CircleLayout = { visibility: 'visible' };
const circlePaint: MapboxGL.CirclePaint = {
    'circle-color': 'white',
    'circle-radius': {
        property: 'days',
        type: 'exponential',
        stops: [
            [1, 5],
            [4, 12]
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
        var mgeojson = {
            type: 'FeatureCollection',
            features: []
        };
        if (0===this.props.place) {
            mgeojson = geojson;
        } else {
            for (var i=0; i < geojson.features.length; ++i) {
                if ((this.props.place===1 && i===3) ||
                    (this.props.place===2 && i===4) ||
                    (this.props.place>=3 && this.props.place<=4 && i===2) ||
                    (this.props.place>=5 && this.props.place<=7 && i===1) ||
                    (this.props.place===8 && i===0)
                ){
                    mgeojson.features.push(geojson.features[i]);
                    break;
                }
            }
        }
        return (
            <Mapbox
                className='Map'
                style="mapbox://styles/mapbox/dark-v9"
                containerStyle={{
                    height: "100%",
                    width: "200%"
                }}
                zoom={[3.3]}
                center={[50, 40]}
                onStyleLoad={this.onStyleLoad}
            >
                <GeoJSONLayer
                    data={mgeojson}
                    circleLayout={circleLayout}
                    circlePaint={circlePaint}
                    circleOnClick={this.onClickCircle}
                    symbolLayout={symbolLayout}
                    symbolPaint={symbolPaint}
                />
            </Mapbox>
        );
    }
}

export default Map;
