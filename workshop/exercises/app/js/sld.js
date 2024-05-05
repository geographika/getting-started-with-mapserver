import ImageWMS from 'ol/source/ImageWMS.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { Image as ImageLayer } from 'ol/layer.js';

const mapserverUrl = import.meta.env.VITE_MAPSERVER_BASE_URL;
const appUrl = import.meta.env.VITE_APP_URL;
const mapfilesPath = import.meta.env.VITE_MAPFILES_PATH;

const wmsSource = new ImageWMS({
    url: mapserverUrl + mapfilesPath + 'sld.map&',
    params: {
        'LAYERS': 'countries',
        'SLD': appUrl + 'data/sld.xml',
        'SLD_VERSION': '1.1.0'
    },
    ratio: 1
});

const updateLegend = function (resolution) {
    const graphicUrl = wmsSource.getLegendUrl(resolution);
    const img = document.getElementById('legend');
    img.src = graphicUrl;
};

const layers = [
    new ImageLayer({
        extent: [-20037508.34, - 20048966.1, 20037508.34, 20048966.1],
        source: wmsSource
    }),
];
const map = new Map({
    layers: layers,
    target: 'map',
    view: new View({
        center: [881083.0, 7481426.5],
        zoom: 3,
    }),
});


// Initial legend
const resolution = map.getView().getResolution();
updateLegend(resolution);

// Update the legend when the resolution changes
map.getView().on('change:resolution', function (event) {
    const resolution = event.target.getResolution();
    updateLegend(resolution);
});