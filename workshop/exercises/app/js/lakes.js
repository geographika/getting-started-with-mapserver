import '../css/style.css';
import ImageWMS from 'ol/source/ImageWMS.js';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import View from 'ol/View.js';
import { Image as ImageLayer, Tile as TileLayer } from 'ol/layer.js';

const mapserverUrl = import.meta.env.VITE_MAPSERVER_BASE_URL;
const mapfilesPath = import.meta.env.VITE_MAPFILES_PATH;

const layers = [
    new TileLayer({
        source: new OSM(),
        visible: false
    }),
    new ImageLayer({
        //extent: [-10511673.608284535, 5945083.891031924, -10359446.890274443, 6088408.054427299],
        source: new ImageWMS({
            url: mapserverUrl + mapfilesPath + 'lakes.map&',
            params: { 'LAYERS': 'lakes,lake-labels', 'STYLES': '' },
            ratio: 1
        }),
    }),
];

const map = new Map({
    layers: layers,
    target: 'map',
    view: new View({
        center: [-10405560, 6011045],
        zoom: 11,
    }),
});
