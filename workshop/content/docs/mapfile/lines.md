## Line Styling

!!! example

    - Direct MapServer request: <http://localhost:5000/?map=/etc/mapserver/lines.map&mode=map&layer=roads>
    - Local OpenLayers example: <http://localhost:5001/lines.html>

<div class="map">
  <iframe src="https://geographika.github.io/getting-started-with-mapserver-demo/lines.html"></iframe>
</div>


??? JavaScript

    ``` js
    --8<-- "lines.js"
    ```

??? Mapfile

    ``` scala
    --8<-- "lines.map"
    ```

```scala
LAYER
  NAME "roads"
  STATUS OFF
  TYPE LINE
  CONNECTIONTYPE FLATGEOBUF
  DATA "data/osm/roads.fgb"
```

