## Line Styling

!!! example

    - MapServer request: <http://localhost:5000/?map=/etc/mapserver/lines.map&mode=map&layer=roads>
    - OpenLayers example: <http://localhost:5001/lines.html>

```scala
LAYER
  NAME "roads"
  STATUS OFF
  TYPE LINE
  CONNECTIONTYPE FLATGEOBUF
  DATA "data/osm/roads.fgb"
```

