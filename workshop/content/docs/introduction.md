# Introduction to MapServer

[An Introduction to MapServer](https://mapserver.org/introduction.html)

## OpenLayers

https://openlayers.org/workshop/en/

## Docker

We will be using MapServer on a Docker image
https://github.com/camptocamp/docker-mapserver

Since version 8.0 MapServer has a global config file.

At its heart MapServer is a command-line application that can be accessed through a web server.

## Folder Structure

```
--8<-- "tree.md"
```

## MapServer

MapServer CGI Interface: <http://localhost:5000/?map=/etc/mapserver/points.map&mode=map&layer=pois&MAPEXT=26.67354394649871+58.35819274893795+26.67750299829783+58.35921498162615>
We can make a direct request to MapServer by opening the following URL
https://mapserver.org/cgi/controls.html

Rather than using the MapServer CGI approach we can use the [WMS](https://mapserver.org/ogc/wms_server.html) protocol to display the MapServer layer on 
top of an OSM background using OpenLayers.


## Workshop Outline


- 0-15 minutes - Introduction, Docker setup and tests