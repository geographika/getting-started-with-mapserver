---
title: Web Feature Services
---

??? JavaScript

    ``` js
    --8<-- "wfs.js"
    ```

??? Mapfile

    ``` scala
    --8<-- "wfs.map"
    ```

See the [WFS Server](https://mapserver.org/ogc/wfs_server.html) documentation for more details.

<div class="map">
  <iframe src="https://geographika.github.io/getting-started-with-mapserver-demo/wfs.html"></iframe>
</div>

"wfs_getfeature_formatlist" "gml,geojson,json,customtext,application/json,shapezip,FileGDB,FlatGeoBuf"


"wfs_srs" "EPSG:4326 EPSG:3857"


test on the command line
capture the request

mapserv -nh "QUERY_STRING=map=/etc/mapserver/wfs.map&service=WFS&version=2.0.0&request=GetFeature&typeName=places&outputFormat=geojson&crsName=EPSG:3857&bbox=-59223902.72157662,-3903081.7252075593,-14974405.131250374,19995821.45447336,EPSG:3857"


FILTER ([pop_max] > 1000000) # only return places with a population > 1 million