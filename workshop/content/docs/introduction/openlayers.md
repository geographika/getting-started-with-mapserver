# OpenLayers

TODO Add OL logo

MapServer runs on a server, and publishes data using web services. Whilst it is possible
to view these outputs on the command line, or in a browser by creating URLs, data from MapServer
is  typically accessed using a client application. 

This could be a desktop GIS such as QGIS or ArcGIS Pro, or through a web browser
using a JavaScript mapping library such as Leaflet or OpenLayers.

This workshop has chosen to use OpenLayers for the exercises as it implements many of 
the OGC published by MapServer, and it is an OSGeo project like MapServer. 

To run the exercises will require some editing of HTML and JavaScript code, but
will be simple enough that no pre-existing coding experience in these languages
is required.

A useful introduction to OpenLayers can be found [here](https://openlayers.org/workshop/en/).

## JavaScript

Map name to show all layers
Or define individually

## Centres and Extents

In our OpenLayers maps we often want to set a starting extent or centre for the map. If our Mapfile
contains an EXTENT in a different projection we can use the GDAL programs installed on the Docker image
to convert coordinates to the OpenLayers projection:


```bash
# connect to the Docker image
docker exec -it mapserver /bin/bash

# convert the bottom-left coordinate from EPSG:4326 to EPSG:3857
echo "26.668 58.339" | gdaltransform -s_srs EPSG:4326 -t_srs EPSG:3857
# same for the top-right coordinate
echo "26.796 58.409" | gdaltransform -s_srs EPSG:4326 -t_srs EPSG:3857

# to calculate centres we can use simple maths and Pyton
# centre X (longtitude)
python -c "print((26.668 + 26.796) / 2)"
# centre Y (latitude)
python -c "print((58.339 + 58.409) / 2)"
```