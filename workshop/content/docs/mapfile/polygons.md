# Polygon Styling

## Overview

This exercise displays building from OpenStreetMap. This is a polygon dataset, so we set our `LAYER TYPE` to `POLYGON`:

```scala
LAYER
    NAME "buildings"
    TYPE POLYGON
...
```

When stying polygons we can set the colour of the polygon, and also its outline color:

```scala
CLASS
    GROUP "default"
    STYLE
        COLOR 246 241 223
        OUTLINECOLOR 0 0 0
    END
END
```

In this Mapfile we have two different classes for the dataset. 


In the second class we have an [EXPRESSION](https://mapserver.org/mapfile/expressions.htm) that limits 
which features will be drawn. This compares the value for the "type" field for each feature with "office".
If there is a match then the feature is drawn with the `STYLE`s from the `CLASS`.

```scala
CLASS
    GROUP "offices"
    EXPRESSION ( "[type]" = "office" )
...
```

## Code

!!! example

    - Direct MapServer request: <http://localhost:5000/?map=/etc/mapserver/polygons.map&mode=map&layer=buildings>
    - Local OpenLayers example: <http://localhost:5001/polygons.html>

!!! tip

    A LAYER has a [CONNECTIONTYPE](https://mapserver.org/mapfile/layer.html#mapfile-layer-connectiontype)
    that is used to connect to different data sources. The connection types are "native" -
    when the reading of the data is handled by MapServer code. The OGR connection type uses GDAL/OGR
    to read data sources. For some data types, as in the flatgeobuf example used here, there is an option
    to use either a native connection or an OGR connection.

    There is also a PLUGIN connection type to allow connections to MS SQL Server and Oracle databases.


    ```scala
    CONNECTIONTYPE OGR
    # CONNECTIONTYPE FLATGEOBUF
    # DATA "data/osm/buildings_a.fgb"
    CONNECTION "data/osm/buildings_a.fgb"
    ```

<div class="map">
  <iframe src="https://geographika.github.io/getting-started-with-mapserver-demo/polygons.html"></iframe>
</div>


??? JavaScript "polygons.js"

    ```js
    --8<-- "polygons.js"
    ```

??? Mapfile "polygons.map"

    ``` scala title="polygons.map"
    --8<-- "polygons.map"
    ```

## Exercises

- Switch the `CLASSGROUP` in the Mapfile to see different styles. There are two groups
  `offices` and `default`.

```scala
  LAYER
    NAME "buildings"
    ...
    CLASSGROUP "offices" # can switch the default set of CLASSes here
```

- Switch the style used in the `polygon.js` file. 

```js
source: new ImageWMS({
    url: mapserverUrl + mapfilesPath + 'polygons.map&',
    params: { 'LAYERS': 'buildings', 'STYLES': 'offices' },
```

- Switch the `CONNECTIONTYPE` to use the native `FLATGEOBUF` driver.

- Experiment with styling the polygons. `WIDTH` can be used to change the width of the polygon
  outline.
