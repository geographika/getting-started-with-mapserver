---
title: Exercise X - Styled Layer Descriptor
---

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