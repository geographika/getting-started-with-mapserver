# Labels

## Overview

In this exercises we'll look at labelling features in a map. We'll be using a lakes dataset from the original Itasca County, Minnesota MapServer demo.

<div class="map">
  <iframe src="https://geographika.github.io/getting-started-with-mapserver-demo/lakes.html"></iframe>
</div>

## Labels

[LABEL](https://mapserver.org/mapfile/label.html)s are placed within a `CLASS`. 
Each class can label features differently.

Here is the `LABEL` block used in our example:

```scala
LABEL
    COLOR 255 255 255
    TEXT (initcap("[LAKE_NAME]"))
    TYPE TRUETYPE 
    FONT LiberationMono
    SIZE 12
    PARTIALS FALSE
    POSITION CC
    FORCE TRUE
    ANGLE FOLLOW
END
```

## Label Positions

We use the [centerline](https://mapserver.org/mapfile/geomtransform.html#centerline) function as part of a [GEOMTRANSFORM](https://mapserver.org/mapfile/geomtransform.html) expression:

``` scala
GEOMTRANSFORM (centerline(densify([shape], 0.1)))
```

## Code

!!! example

    - Direct MapServer request: <http://localhost:5000/?map=/etc/mapserver/lakes.map&mode=map&layer=lakes&layer=lake-labels>
    - Local OpenLayers example: <http://localhost:5001/lakes.html>

??? JavaScript

    ``` js
    --8<-- "lakes.js"
    ```

??? Mapfile

    ``` scala
    --8<-- "lakes.map"
    ```

## Exercises

1. Use a different font for the label by adding the following to the `LABEL` block: `FONT LiberationMono`.
2. Comment out the `GEOMTRANSFORM (centerline([shape]))` and `ANGLE FOLLOW` lines (using `#`) to see its effect on the map.

<!--
``` xml
<ServiceExceptionReport xmlns="http://www.opengis.net/ogc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.3.0" xsi:schemaLocation="http://www.opengis.net/ogc http://schemas.opengis.net/wms/1.3.0/exceptions_1_3_0.xsd">
<ServiceException> msDrawMap(): Image handling error. Failed to draw layer named 'lake-labels'. msGeomTransformShape(): Expression parser error. Failed to process shape expression: centerline([shape]) yyparse(): Expression parser error. Executing centerline failed. msGEOSCenterline(): GEOS library error. Centerline generation failed, try densifying the shapes. </ServiceException>
</ServiceExceptionReport>
```

# EXTENT 26.668678 58.339241 26.796582 58.409410 # EPSG:4326
# adding a value of 0.1 causes the request to take over 5 minutes
# GEOMTRANSFORM (centerline(densify([shape], 0.5)))

# workaround for https://github.com/MapServer/MapServer/issues/7058

-->