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
        visible: true
    }),
    new ImageLayer({
            source: new ImageWMS({
            url: mapserverUrl + mapfilesPath + 'points.map&',
            params: { 'LAYERS': 'pois', 'STYLES': '' }
        }),
    }),
];
const map = new Map({
    layers: layers,
    target: 'map',
    view: new View({
        center: [2975862.75916499, 8046369.8646329],
        zoom: 14,
    }),
});
