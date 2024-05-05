import '../css/style.css';
import GeoJSON from 'ol/format/GeoJSON.js';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import VectorSource from 'ol/source/Vector.js';
import View from 'ol/View.js';
import {
    Circle as CircleStyle,
    Fill,
    Stroke,
    Style,
    Text,
} from 'ol/style.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import { bbox as bboxStrategy } from 'ol/loadingstrategy.js';

// based on the example at https://openlayers.org/en/latest/examples/vector-wfs.html

const mapserverUrl = import.meta.env.VITE_MAPSERVER_BASE_URL;
const mapfilesPath = import.meta.env.VITE_MAPFILES_PATH;

const vectorSource = new VectorSource({
    format: new GeoJSON(),
    url: function (extent) {
        const url = mapserverUrl + mapfilesPath + 'wfs.map&service=WFS&' +
            'version=2.0.0&request=GetFeature&typename=places&' +
            'outputFormat=geojson&crsName=EPSG:3857&' +
            'bbox=' +
            extent.join(',') +
            ',EPSG:3857';
        console.log(url);
        return url;
    },
    strategy: bboxStrategy,
});

const textFill = new Fill({
    color: '#fff',
});
const textStroke = new Stroke({
    color: 'rgba(0, 0, 0, 0.6)',
    width: 3,
});

function createStyle(feature) {
    return new Style({
        image: new CircleStyle({
            radius: 5 + feature.get('rank_min'),
            fill: new Fill({
                color: [255, 153, 0, 0.8],
            }),
        }),
        text: new Text({
            text: feature.get('name'),
            fill: textFill,
            stroke: textStroke,
        }),
    });
}

const layers = [
    new TileLayer({
        source: new OSM(),
        className: 'bw',
    }),
    new VectorLayer({
        style: createStyle,
        source: vectorSource
    }),
];

const map = new Map({
    layers: layers,
    target: 'map',
    view: new View({
        center: [2975862.75916499, 8046369.8646329],
        zoom: 7,
    }),
});