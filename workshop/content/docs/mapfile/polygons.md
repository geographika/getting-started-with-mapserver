# Polygon Styling

## Overview

This exercise displays buildings from OpenStreetMap. This is a polygon dataset, so we set our `LAYER TYPE` to `POLYGON`:

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


In the second class we have an [EXPRESSION](https://mapserver.org/mapfile/expressions.htm) that limits which features will be drawn:

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

    Note the layer name in `layer=buildings` is case-sensitive and had to exactly match the LAYER NAME.

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

Add section on EXPRESSIONS. Link to docs.

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