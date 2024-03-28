---
title: Exercise X - Tile Mode
---

See https://mapserver.org/output/tile_mode.html

 get "mapserv(): Web application error. No way to generate map extent. "

 Make sure the order is X,Y,Z often Z is the first parameter for tile services!


http://localhost:5000/?map=/etc/mapserver/tiles.map&MODE=tile&TILE=0+0+0&LAYERS=countries&TILEMODE=gmap


http://localhost:5001/sld.html

Update SLD XML file (will need to refresh the browser)

http://localhost:5000/?map=/etc/mapserver/sld.map&REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0

```sld
<Layer queryable="0" opaque="0" cascaded="0">
<Name>countries</Name>
<!--  WARNING: Mandatory metadata "wms_title" or "ows_title" was missing in this context.  -->
<Title>countries</Title>
<CRS>EPSG:4326</CRS>
```


http://localhost:5000/?map=/etc/mapserver/sld.map&REQUEST=GetStyles&SERVICE=WMS&LAYERS=countries&VERSION=1.3.0&sld=http://node:5001/data/sld.xml



## Vector Tiles

MS RFC 119: Mapbox Vector Tile (MVT) Support https://mapserver.org/development/rfc/ms-rfc-119.html

&map.imagetype=mvt