# Vector Data

We've already seen several examples of serving vector data using a Mapfile. MapServer has native support for many 
[Vector formats](https://mapserver.org/input/vector/index.html). MapServer can also read data through [OGR](https://mapserver.org/input/vector/index.html)
- the vector component of [GDAL](https://gdal.org/), which has support for over 80 [vector drivers](https://gdal.org/drivers/vector/index.html).

Native support means the code to read the data is a part of the MapServer codebase, which can make it more optimised. 
The OGR drivers however may be better maintained. For formats which have both native and OGR support, for example Shapefiles and FlatGeobuf it is not always a clear decision which to use.

More information can be found on the [Vector Data Management & Optimization](https://mapserver.org/fr/optimization/vector.html) page in the
MapServer documentation.

## Extents



Already covered access

Access via GitHub - same dataset. Add both to the Mapfile
s3 buckets


# CONNECTION "/vsicurl/https://github.com/MapServer/MapServer-demo/raw/main/data/lakespy2.shp"
CONNECTION "data/itasca/lakespy2.shp"