## OGC Features API

https://mapserver.org/ogc/ogc_api.html

### Configuring your Mapfile

http://localhost:5000/ogcfeatures/ogcapi/

http://localhost:5000/ogcfeatures/ogcapi/collections/pois/items?f=html

https://github.com/opengeospatial/ogcapi-features/blob/master/ogcapi-ogc-org-features-overview.md


## Errors

```json
{
    "code": "ConfigError",
    "description": "InjaError error. [inja.exception.file_error] failed accessing file at '/etc/mapserver/landing.html' (landing.html). (/etc/mapserver/)."
}
```

oga_html_template_directory can be set either at the Mapfile level or in the CONFIG file. Mapfile takes precedence. 