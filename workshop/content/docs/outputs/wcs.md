# Web Coverage Services

TODO

https://mapserver.org/ogc/wcs_server.html

https://mapserver.org/ogc/wcs_format.html

We'll be using [WCS 2.0](https://mapserver.org/ogc/wcs_server.html#wcs-2-0) for this tutorial.

# GetCapabilities
http://localhost:5000/?map=/etc/mapserver/wcs.map&SERVICE=WCS&REQUEST=GetCapabilities

# DescribeCoverage 2.0
http://localhost:5000/?map=/etc/mapserver/wcs.map&SERVICE=WCS&VERSION=2.0.1&REQUEST=DescribeCoverage&COVERAGEID=dtm

# GetCoverage 2.0 image/tiff full
http://localhost:5000/?map=/etc/mapserver/wcs.map&SERVICE=WCS&VERSION=2.0.1&REQUEST=GetCoverage&COVERAGEID=dtm&FORMAT=image/tiff

```bash
gdalinfo /etc/mapserver/data/raster/54752_dtm_1m.tif
```

NoData Value=-9999
Size is 5000, 5000

curl "http://localhost:5000/?map=/etc/mapserver/wcs.map&SERVICE=WCS&REQUEST=GetCapabilities"

!!! tip

    The `COVERAGEID` will be the `LAYER` `NAME`


```
msWCSGetCoverage20(): WCS server error. Raster size out of range, width and height of resulting coverage must be no more than MAXSIZE=4096.
```

Set the [MAXSIZE](https://mapserver.org/mapfile/map.html#mapfile-map-maxsize) directive on the `MAP` to a larger value. By default this is set to 4096.

[WCS and NULL Values](https://github.com/geographika/wcs-test)


```
mapserv -nh "QUERY_STRING=map=test.map&SERVICE=WCS&VERSION=2.0.0&REQUEST=GetCoverage&CoverageId=test&FORMAT=GEOTIFF_INT16&BBOX=-69.955,3.420,-69.701,3.5896&CRS=EPSG:4326&WIDTH=500&HEIGHT=500" > output2.tif
gdalinfo output.tif
```

<!--
https://openlayers.org/workshop/en/cog/
-->