import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, GeoJSONLayer } from "react-mapbox-gl";
import * as MapboxGL from 'mapbox-gl';

// tslint:disable-next-line:no-var-requires
const TOKEN = 'pk.eyJ1IjoicWlhbi13YW5nIiwiYSI6ImNqZzF6eDk5MzE4dnAzM283bDFod2dtd3YifQ.02lGEEiPWoekKQabkgQlEg';

// tslint:disable-next-line:no-var-requires
const geojson = require('./geojson.json');

const Map = ReactMapboxGl({ accessToken: TOKEN });

const mapStyle = {
    // flex: 1
    'height': '200px'
};

const symbolLayout: MapboxGL.SymbolLayout = {
    'text-field': '{place}',
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top'
};
const symbolPaint: MapboxGL.SymbolPaint = {
    'text-color': 'white'
};

const circleLayout: MapboxGL.CircleLayout = { visibility: 'visible' };
const circlePaint: MapboxGL.CirclePaint = {
    'circle-color': 'white'
};

export interface Props {
    // tslint:disable-next-line:no-any
    onStyleLoad?: (map: any) => any;
}

class GeoJsonLayer extends React.Component<Props> {
    center = [50, 40];

    // tslint:disable-next-line:no-any
    onClickCircle = (evt: any) => {
        console.log(evt);
    };

    // tslint:disable-next-line:no-any
    onStyleLoad = (map: any) => {
        const { onStyleLoad } = this.props;
        return onStyleLoad && onStyleLoad(map);
    };

    render() {
        return (
            <Map
                style="mapbox://styles/mapbox/dark-v9"
                center={this.center}
                zoom={[3.3]}
                containerStyle={mapStyle}
                onStyleLoad={this.onStyleLoad}
            >
                <GeoJSONLayer
                    data={geojson}
                    circleLayout={circleLayout}
                    circlePaint={circlePaint}
                    circleOnClick={this.onClickCircle}
                    symbolLayout={symbolLayout}
                    symbolPaint={symbolPaint}
                />
            </Map>
        );
    }
}

export default GeoJsonLayer;