import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup, LayersControl, withLeaflet } from 'react-leaflet';
import VectorTileLayer from '../../src/index';

const { Overlay } = LayersControl;

const WrappedVectorTileLayer = withLeaflet(VectorTileLayer);

const vectorTileStyling = {

    water: {
        fill: true,
        weight: 1,
        fillColor: '#06cccc',
        color: '#06cccc',
        fillOpacity: 0.2,
        opacity: 0.4,
    },
    admin: {
        weight: 1,
        fillColor: 'pink',
        color: 'pink',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    waterway: {
        weight: 1,
        fillColor: '#2375e0',
        color: '#2375e0',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    landcover: {
        fill: true,
        weight: 1,
        fillColor: '#53e033',
        color: '#53e033',
        fillOpacity: 0.2,
        opacity: 0.4,
    },
    landuse: {
        fill: true,
        weight: 1,
        fillColor: '#e5b404',
        color: '#e5b404',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    park: {
        fill: true,
        weight: 1,
        fillColor: '#84ea5b',
        color: '#84ea5b',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    boundary: {
        weight: 1,
        fillColor: '#c545d3',
        color: '#c545d3',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    aeroway: {
        weight: 1,
        fillColor: '#51aeb5',
        color: '#51aeb5',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    road: {	// mapbox & nextzen only
        weight: 1,
        fillColor: '#f2b648',
        color: '#f2b648',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    tunnel: {	// mapbox only
        weight: 0.5,
        fillColor: '#f2b648',
        color: '#f2b648',
        fillOpacity: 0.2,
        opacity: 0.4,
        // 					dashArray: [4, 4]
    },
    bridge: {	// mapbox only
        weight: 0.5,
        fillColor: '#f2b648',
        color: '#f2b648',
        fillOpacity: 0.2,
        opacity: 0.4,
        // 					dashArray: [4, 4]
    },
    transportation: {	// openmaptiles only
        weight: 0.5,
        fillColor: '#f2b648',
        color: '#f2b648',
        fillOpacity: 0.2,
        opacity: 0.4,
        // 					dashArray: [4, 4]
    },
    transit: {	// nextzen only
        weight: 0.5,
        fillColor: '#f2b648',
        color: '#f2b648',
        fillOpacity: 0.2,
        opacity: 0.4,
        // 					dashArray: [4, 4]
    },
    building: {
        fill: true,
        weight: 1,
        fillColor: '#2b2b2b',
        color: '#2b2b2b',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    water_name: {
        weight: 1,
        fillColor: '#022c5b',
        color: '#022c5b',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    transportation_name: {
        weight: 1,
        fillColor: '#bc6b38',
        color: '#bc6b38',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    place: {
        weight: 1,
        fillColor: '#f20e93',
        color: '#f20e93',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    housenumber: {
        weight: 1,
        fillColor: '#ef4c8b',
        color: '#ef4c8b',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    poi: {
        weight: 1,
        fillColor: '#3bb50a',
        color: '#3bb50a',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    earth: {	// nextzen only
        fill: true,
        weight: 1,
        fillColor: '#c0c0c0',
        color: '#c0c0c0',
        fillOpacity: 0.2,
        opacity: 0.4
    },


    // Do not symbolize some stuff for mapbox
    country_label: [],
    marine_label: [],
    state_label: [],
    place_label: [],
    waterway_label: [],
    poi_label: [],
    road_label: [],
    housenum_label: [],


    // Do not symbolize some stuff for openmaptiles
    country_name: [],
    marine_name: [],
    state_name: [],
    place_name: [],
    waterway_name: [],
    poi_name: [],
    road_name: [],
    housenum_name: [],

    // Monkey-patch some properties for nextzen layer names, because
    // instead of "building" the data layer is called "buildings" and so on
    buildings: {
        fill: true,
        weight: 1,
        fillColor: '#2b2b2b',
        color: '#2b2b2b',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    boundaries: {
        weight: 1,
        fillColor: '#c545d3',
        color: '#c545d3',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    places: {
        weight: 1,
        fillColor: '#f20e93',
        color: '#f20e93',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    pois: {
        weight: 1,
        fillColor: '#3bb50a',
        color: '#3bb50a',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    roads: {	// mapbox & nextzen only
        weight: 1,
        fillColor: '#f2b648',
        color: '#f2b648',
        fillOpacity: 0.2,
        opacity: 0.4
    },
};


const openmaptilesUrl = "https://free-{s}.tilehosting.com/data/v3/{z}/{x}/{y}.pbf.pict?key={accessKey}";

const openmaptilesVectorTileOptions = {
    // rendererFactory: L.canvas.tile,
    attribution: '<a href="https://openmaptiles.org/">&copy; OpenMapTiles</a>, <a href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap</a> contributors',
    vectorTileLayerStyles: vectorTileStyling,
    subdomains: '0123',
    accessKey: 'UmmATPUongHdDmIicgs7',
    maxZoom: 14
};

class SimpleExample extends React.Component {
    constructor() {
        super();
        this.state = {
            lat: -31.9505,
            lng: 115.8605,
            zoom: 10
        };
    }
    // openmaptilesPbfLayer = L.vectorGrid.protobuf(openmaptilesUrl, openmaptilesVectorTileOptions).addTo(map);


    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <LeafletMap center={position} zoom={this.state.zoom}>
                <LayersControl position='bottomright' ref='geojson'>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Overlay checked={true} name='Vector Tiles'>
                        <WrappedVectorTileLayer {...openmaptilesVectorTileOptions} url={openmaptilesUrl} />
                    </Overlay>
                </LayersControl>
            </LeafletMap>
        );
    }
}

export default SimpleExample;