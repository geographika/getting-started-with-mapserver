# MapServer

<script type='text/javascript' src='https://openhub.net/p/MapServer/widgets/project_factoids_stats?format=js'></script>


## How MapServer Works

[An Introduction to MapServer](https://mapserver.org/introduction.html)

In its most basic form, MapServer is a CGI program that sits inactive on your 
Web server. When a request is sent to MapServer, it uses information passed in the 
request URL and the Mapfile to create an image of the requested map. 

## MapServer Dependencies

MapServer is built on several other geospatial libraries. 

![MapServer dependencies](../assets/images/mapserver-libs.png)

## MapServer Interaction

MapServer CGI Interface: <http://localhost:5000/?map=/etc/mapserver/points.map&mode=map&layer=pois&MAPEXT=26.67354394649871+58.35819274893795+26.67750299829783+58.35921498162615>
We can make a direct request to MapServer by opening the following URL
https://mapserver.org/cgi/controls.html

Rather than using the MapServer CGI approach we can use the [WMS](https://mapserver.org/ogc/wms_server.html) protocol to display the MapServer layer on 
top of an OSM background using OpenLayers.