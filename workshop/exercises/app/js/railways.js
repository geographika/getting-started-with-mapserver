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
        extent: [2968743.65508978, 8038921.67212233, 2982981.8632402, 8053818.05714347],
        source: new ImageWMS({
            url: mapserverUrl + mapfilesPath + 'railways.map&',
            params: { 'LAYERS': 'tracks,stops'},
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
        center: [2971862.75916499, 8046369.8646329],
        zoom: 15,
    }),
});
