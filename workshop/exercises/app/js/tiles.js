import '../css/style.css';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import XYZ from 'ol/source/XYZ.js';

const mapserverUrl = import.meta.env.VITE_MAPSERVER_BASE_URL;
const mapfilesPath = import.meta.env.VITE_MAPFILES_PATH;

const map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new XYZ({
                url: mapserverUrl + mapfilesPath + 'tiles.map&MODE=tile&TILE={x}+{y}+{z}&LAYERS=countries',
            }),
        }),
    ],
    view: new View({
        center: [-472202, 7530279],
        zoom: 3,
    }),
});
