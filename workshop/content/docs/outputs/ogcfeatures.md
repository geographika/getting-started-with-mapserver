# OGC Features API

## Overview

In this exercise we'll be configuring MapServer to serve out data using the
MapServer's [OGC Features API](https://mapserver.org/ogc/ogc_api.html). See the [OGC Features Overview](https://github.com/opengeospatial/ogcapi-features/blob/master/ogcapi-ogc-org-features-overview.md) page for more details.

<div class="map">
  <iframe src="https://geographika.github.io/getting-started-with-mapserver-demo/ogcfeatures.html"></iframe>
</div>


## Configuring your Mapfile

As with other OGC services most configuration is done using `METADATA` blocks. 
The prefix for the OGC Features API metadata settings is `oga_`.

To enable the OGC Features API enable it in the `WEB` `METADATA`, using either
`ows_enable_request` or `oga_enable_request`. We also need to set the `oga_onlineresource` value to the root of the service:

```scala
WEB
    METADATA
        ...
        ows_enable_request "*" # this enables all OGC requests
        oga_onlineresource "/ogcfeatures/ogcapi"
    END
END
```

At the `LAYER` level `gml_featureid` needs to refer to field name containing a unique value for each feature.

```scala
METADATA
    ...
    gml_include_items "all"
    gml_featureid "osm_id"
END
```

## The MapServer CONFIG File

In MapServer version 8.0 a new global [CONFIG](https://www.mapserver.org/mapfile/config.html) file was added. 

This allows us to set which URL path is handled by which Mapfile. 

The file is located at `workshop\exercises\mapfiles\mapserver.conf` (in the same folder as the Mapfiles), and is read by the Docker container.

!!! tip

    `mapserver.conf` can be edited, but any changes will only come into effect when Apache is restarted. As this is running in Docker, we restart the Docker `mapserver` container:

    ```bash
    docker restart mapserver
    ```

The key part of the `CONFIG` file are the `MAPS` section where a URL paths are paired with Mapfiles:

```scala
  MAPS
    OGCFEATURES "/etc/mapserver/ogcfeatures.map"
  END
```

The other relevant setting is the environment variable `OGCAPI_HTML_TEMPLATE_DIRECTORY` in the `ENV` section. This points to a folder containing templates used to create the HTML interface when browsing the OGC Features API: 

```scala
ENV
    OGCAPI_HTML_TEMPLATE_DIRECTORY "/usr/local/share/mapserver/ogcapi/templates/html-bootstrap4/"
END
```

## Browsing the OGC Features API Collections

The OGC Features API can be viewed as HTML pages, which are rendered using templates provided by MapServer. They can also be accessed as JSON. 

The services use hierarchical URLs for example:

* The root of the service is at <http://localhost:5000/ogcfeatures/ogcapi/>
* The feature collections are listed at <http://localhost:5000/ogcfeatures/ogcapi/collections?f=html>
* The Polygon feature collection is available at <http://localhost:5000/ogcfeatures/ogcapi/collections/pois_polygon?f=html>

## Adding OGC Features to OpenLayers

As the OGC Features API returns GeoJSON, adding a vector layer to OpenLayers is straightforward. We simply pass in the URL pointing to the collection items:

```js
new VectorLayer({
    style: {
        'fill-color': 'rgba(255, 255, 0, 0.7)',
        'stroke-width': 1.3,
    },
    source: new Vector({
        url: mapserverUrl + 'ogcfeatures/ogcapi/collections/pois_polygon/items?f=json&limit=500',
        format: new GeoJSON(),
    }),
}),
```    

## Code

!!! example

    - Direct MapServer request: <http://localhost:5000/ogcfeatures/ogcapi/>
    - Direct MapServer request: <http://localhost:5000/ogcfeatures/ogcapi/collections/pois/items?f=html>    
    - Local OpenLayers example: <http://localhost:5001/ogcfeatures.html>

??? JavaScript

    ``` js
    --8<-- "ogcfeatures.js"
    ```

??? Mapfile

    ``` scala
    --8<-- "ogcfeatures.map"
    ```

## Exercises

1. Modify the `workshop\exercises\mapfiles\railways.map` to enable the OGC Features API. You will need to add a new entry to the `MAPS` section in `workshop\exercises\mapfiles\mapserver.conf` and restart the Docker container to be able to browse the OGC Features API interface. 

## Possible Errors

- 
    ```json
    {
        "code": "ConfigError",
        "description": "InjaError error. [inja.exception.file_error] failed accessing file at '/etc/mapserver/landing.html' (landing.html). (/etc/mapserver/)."
    }
    ```

    `oga_html_template_directory` can be set either at the Mapfile level or in the CONFIG file. Mapfile takes precedence. 