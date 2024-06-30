# Web Map Services

## Overview

We've been using WMS for the example so far. In this exercise we'll look in more detail at how to configure WMS services in MapServer.


## METADATA Blocks

Web services are configured using `METADATA` blocks. These are key-value pairs, for example:


!!! tip

    It is good practice to put the key names in quotes. This is not required, but it makes the Mapfile
    clearer that they are strings and not keywords. Keys can also contain strings such as field names, which
    could contain spaces. Without quotes these will cause syntax errors in the Mapfile.

## Output Image Formats

+ webp


## Exercises

1. If you've read this far you deserve to discover one of MapServer's Easter eggs. Try changing the output format to `&format=image`

<https://demo.mapserver.org/cgi-bin/wms?version=1.3.0&request=GetMap&service=WMS&layers=cities&format=image/txt&crs=EPSG%3A4326&exceptions=XML&bbox=-90%2C-180%2C90%2C180&styles=&width=500&height=500&transparent=true>
