# MapScript

!!! warning

    This page is currently in a draft form.

## Overview

MapServer has its own scripting language - [MapScript](https://www.mapserver.org/mapscript/). MapScript is available in several
programming languages including Python, PHP, and Perl. They all share a common [MapScript API](https://www.mapserver.org/mapscript/mapscript-api/index.html).


## Adding MapScript to the Docker Container

MapScript is not installed on the MapServer Docker image by default, but it can be added using the approach below.

!!! tip

    The MapScript package must match the version of MapServer installed on the Docker image or
    segmentation faults will occur.

```bash
# start an interactive session with the MapServer Docker container
docker exec -it mapserver /bin/bash

# install MapScript via a downloaded Debian package available in the workshop repository
dpkg -i /scripts/python3-mapscript_8.0.1-1~jammy2_amd64.deb

# test that we can import MapScript successfully
python -c "import mapscript;print(mapscript.msGetVersion())"
```


## Example Script

One use of MapScript is to help with writing Mapfiles by getting information from its data sources. Some examples are provided below.

### Reading Data Extents

```python
"""
python /scripts/extents.py
"""

import mapscript

mapfile = "/etc/mapserver/lakes.map"
m = mapscript.mapObj(mapfile)

lyr = m.getLayerByName("lakes")
extent = lyr.getExtent()

original_projection_code = m.getProjection()
original_projection = mapscript.projectionObj(original_projection_code)

webmercator = mapscript.projectionObj("epsg:3857")

extent_string = f"[{extent.minx}, {extent.miny}, {extent.maxx}, {extent.maxy}]"
print(extent_string)

# reprojection is done in-place
extent.project(original_projection, webmercator)

extent_string = f"[{extent.minx}, {extent.miny}, {extent.maxx}, {extent.maxy}]"
print(extent_string)

center = f"[{(extent.maxx + extent.minx) / 2}, {(extent.maxy + extent.miny) / 2}]"
print(center)

print("Done!")
```


<!--
python -c 'import mapscript;r=mapscript.rectObj(2969285.329776241,8042942.076072633,2969726.049406544,8043158.9927656725);r.project(mapscript.projectionObj("epsg:3857"), mapscript.projectionObj("epsg:4326"));print(r.toString())'

python -c "import mapscript;r=mapscript.pointObj(-8.6556,54.7397);r.project(mapscript.projectionObj('epsg:4326'), mapscript.projectionObj('epsg:2157'));print(r.toString())"
python -c "import mapscript;r=mapscript.pointObj(-7.7432,55.2053);r.project(mapscript.projectionObj('epsg:4326'), mapscript.projectionObj('epsg:2157'));print(r.toString())"
55.2053/-7.7432
-->