---
title: Styled Layer Descriptor
---


<div class="map">
  <iframe src="https://geographika.github.io/getting-started-with-mapserver-demo/sld.html"></iframe>
</div>

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

http://localhost:5001/sld.html

Update SLD XML file (will need to refresh the browser)

http://localhost:5000/?map=/etc/mapserver/sld.map&REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0

```xml
<Layer queryable="0" opaque="0" cascaded="0">
<Name>countries</Name>
<!--  WARNING: Mandatory metadata "wms_title" or "ows_title" was missing in this context.  -->
<Title>countries</Title>
<CRS>EPSG:4326</CRS>
```


http://localhost:5000/?map=/etc/mapserver/sld.map&REQUEST=GetStyles&SERVICE=WMS&LAYERS=countries&VERSION=1.3.0&sld=http://node:5001/data/sld.xml