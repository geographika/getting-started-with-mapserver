## Polygon Styling

Note the layer name in `layer=buildings` is case-sensitive and had to exactly match the LAYER NAME.

http://localhost:5000/?map=/etc/mapserver/polygons.map&mode=map&layer=buildings

Switch the CLASSGROUP to see different styles



http://localhost:5001/polygons.html



landuse

SYMBOLS - if size not specified it is based on the points used in the SYMBOL
SYMBOLSET. Tribute to Håvard Tveite - marshes. 
http://lazarus.elte.hu/mc/specs/isom-2000.pdf
https://github.com/MapServer/MapServer/wiki/SymbologyExchangeVector#polygon-fills-marsh-symbols-as-used-in-orienteering-maps

```
    docker exec -it mapserver /bin/bash

    echo "26.668678 58.339241" | gdaltransform -s_srs EPSG:4326 -t_srs EPSG:3857
    echo "26.796582 58.409410" | gdaltransform -s_srs EPSG:4326 -t_srs EPSG:3857


For extents

python -c "print((26.668678 + 26.796582) / 2)"
python -c "print((58.339241 + 58.409410) / 2)"




(2968743.65508978 + 2982981.8632402) / 2
(8038921.67212233 + 8053818.05714347) /2

Switch the style used in the polygon.js file
Add section on EXPRESSIONS. Link to docs.

Add a lakes label