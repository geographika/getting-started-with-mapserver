## Polygon Styling

An example polygon layer can be seen at 
[http://localhost:5000/?map=/etc/mapserver/polygons.map&mode=map&layer=buildings](http://localhost:5000/?map=/etc/mapserver/polygons.map&mode=map&layer=buildings)

!!! tip

    Note the layer name in `layer=buildings` is case-sensitive and had to exactly match the LAYER NAME.

The OpenLayers example is at 
[http://localhost:5001/polygons.html](http://localhost:5001/polygons.html){:target="_blank"}



landuse

SYMBOLS - if size not specified it is based on the points used in the SYMBOL
SYMBOLSET. Tribute to Håvard Tveite - marshes. 
http://lazarus.elte.hu/mc/specs/isom-2000.pdf
https://github.com/MapServer/MapServer/wiki/SymbologyExchangeVector#polygon-fills-marsh-symbols-as-used-in-orienteering-maps

```bash
docker exec -it mapserver /bin/bash

echo "26.668678 58.339241" | gdaltransform -s_srs EPSG:4326 -t_srs EPSG:3857
echo "26.796582 58.409410" | gdaltransform -s_srs EPSG:4326 -t_srs EPSG:3857

# for extents

python -c "print((26.668678 + 26.796582) / 2)"
python -c "print((58.339241 + 58.409410) / 2)"
```

Add section on EXPRESSIONS. Link to docs.

#### Exercises

- Switch the CLASSGROUP in the Mapfile to see different styles. There are two groups
  `type` and `default`.

```
  LAYER
    NAME "buildings"
    ...
    CLASSGROUP "type" # can switch the default set of CLASSes here
```

- Switch the style used in the `polygon.js` file
