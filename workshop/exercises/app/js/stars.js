import '../css/style.css';
import ImageWMS from 'ol/source/ImageWMS.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { Image as ImageLayer } from 'ol/layer.js';
import { FullScreen, defaults as defaultControls } from 'ol/control.js';

const mapserverUrl = import.meta.env.VITE_MAPSERVER_BASE_URL;
const mapfilesPath = import.meta.env.VITE_MAPFILES_PATH;

const layers = [
    new ImageLayer({
        source: new ImageWMS({
            url: mapserverUrl + mapfilesPath + 'stars.map&',
            params: { 'LAYERS': 'constellations,stars,stars2'},
            ratio: 1
        }),
    }),
];
const map = new Map({
    layers: layers,
    target: 'map',
    controls: defaultControls().extend([
        new FullScreen()
    ]),
    view: new View({
        projection: 'EPSG:4326',
        center: [0, 0],
        zoom: 8,
    }),
});
