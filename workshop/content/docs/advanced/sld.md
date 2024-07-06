# Styled Layer Descriptor (SLD) in MapServer

!!! warning

    This page is currently in a draft form.

## Overview

Styled Layer Descriptor (SLD) is an OGC standard used for describing styles. SLD files are written in XML. 

SLD can be used by MapServer in several different ways:

1. Applying an SLD file to a WMS service

This exercise will focus on the first use case.

<div class="map">
  <iframe src="https://geographika.github.io/getting-started-with-mapserver-demo/sld.html"></iframe>
</div>

## Code

!!! example

    - Direct MapServer request: <http://localhost:5000/?map=/etc/mapserver/lines.map&mode=map&layer=roads>
    - Local OpenLayers example: <http://localhost:5001/sld.html>
    - 
???+ SLD

    ``` xml
    --8<-- "sld.xml"
    ```

??? JavaScript

    ``` js
    --8<-- "sld.js"
    ```

??? Mapfile

    ``` scala
    --8<-- "sld.map"
    ```

http://localhost:5000/?map=/etc/mapserver/sld.map&REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0

```xml
<Layer queryable="0" opaque="0" cascaded="0">
<Name>countries</Name>
<!--  WARNING: Mandatory metadata "wms_title" or "ows_title" was missing in this context.  -->
<Title>countries</Title>
<CRS>EPSG:4326</CRS>
```


http://localhost:5000/?map=/etc/mapserver/sld.map&REQUEST=GetStyles&SERVICE=WMS&LAYERS=countries&VERSION=1.3.0&sld=http://node:5001/data/sld.xml

## Exercises

1. Update SLD XML file. You will then need to refresh the browser to see any changes.