import '../css/style.css';
import MVT from 'ol/format/MVT.js';
import Map from 'ol/Map.js';
import VectorTileLayer from 'ol/layer/VectorTile.js';
import VectorTileSource from 'ol/source/VectorTile.js';
import View from 'ol/View.js';
import { Fill, Icon, Stroke, Style, Text } from 'ol/style.js';

// https://openlayers.org/en/latest/examples/mapbox-vector-tiles.html

const mapserverUrl = import.meta.env.VITE_MAPSERVER_BASE_URL;
const mapfilesPath = import.meta.env.VITE_MAPFILES_PATH;

const map = new Map({
    layers: [
        new VectorTileLayer({
            source: new VectorTileSource({
                format: new MVT(),
                url:
                    mapserverUrl + mapfilesPath + 'vector-tiles.map&MODE=tile&TILE={x}+{y}+{z}&LAYERS=countries&map.imagetype=mvt',
            }),
            style: function (feature) {
                return new Style({
                    stroke: new Stroke({
                        color: 'rgb(66, 133, 244)', // Light blue border color
                        width: 2, // Border width
                    })
                });
            },
        }),
    ],
    target: 'map',
    view: new View({
        center: [-472202, 7530279],
        zoom: 2,
    }),
});