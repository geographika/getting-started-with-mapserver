# Workshop Overview

This workshop is divided into 4 sections listed below.

1. The **Mapfile**. A Mapfile is MapServer's configuration file. It points
to the data the Map will display, it defines how the data will be displayed,
and how the data will be served to client applications such as an Internet
browser. This first set of exercises will help to get familiar with the structure,
keywords, and syntax of a Mapfile. 

2. MapServer **Inputs**. These exercises show what type of data can be used as inputs into
MapServer. Both vector data and raster data are covered. 

3. MapServer **Outputs**. These exercises show how MapServer can publish data. When first
created MapServer was used to produce map images, but now it can serve data out in
a large number of open geospatial formats. Focus is given to [OGC](https://www.ogc.org/standards/)
standards as these are free, open and interoperable.

4. **Advanced** topics. These are a collection of miscellaneous exercises that cover
a wide range of MapServer functionality. Selected exercises will be chosen based on the
needs to the workshop participants. MapServer has over 25 years of development and 
features so new topics will be added over time. 

## OpenLayers

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

## How MapServer Works

[An Introduction to MapServer](https://mapserver.org/introduction.html)

In its most basic form, MapServer is a CGI program that sits inactive on your 
Web server. When a request is sent to MapServer, it uses information passed in the 
request URL and the Mapfile to create an image of the requested map. 



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

Below is a rough timeline for how the timings of the 4-hour workshop. 
These can be adapted based on the needs of the participants.

- 0h-0h30 - Introduction to the workshop, Docker setup and tests
- 0h30-1h30 - Mapfile exercises
- 1h30-2h - Inputs
- Break
- 2h-3h - Outputs
- 3h-3h30 - Advanced topics
- 3h30-4h - Custom Mapfile creation, questions, and conclusions
