# Tiles

MapServer can serve out image tiles using [Tile Mode](https://mapserver.org/output/tile_mode.html). Tiles will always be in the
Web Mercator (EPSG:3857) projection, and can easily be added to client JavaScript applications such as OpenLayers and Leaflet.

<div class="map">
  <iframe src="https://geographika.github.io/getting-started-with-mapserver-demo/tiles.html"></iframe>
</div>

!!! example "Exercise Links"

    - MapServer request: <http://localhost:5000/?map=/etc/mapserver/tiles.map&MODE=tile&TILE=0+0+0&LAYERS=countries&TILEMODE=gmap>
    - OpenLayers example: <http://localhost:5001/tiles.html>

??? JavaScript "tiles.js"

    ``` js
    --8<-- "tiles.js"
    ```

??? Mapfile "tiles.map"

    ``` scala
    --8<-- "tiles.map"
    ```

## Exercises

- Change the background colour of the `MAP` and tiles by modifying the `IMAGECOLOR "#ADD8E6"` setting. [#ADD8E6](https://www.color-hex.com/color/add8e6)
  is "LightBlue".
- Uncomment the `LABEL` block in the Mapfile to add labels to the tiles. You will notice that the country names are repeated several times, as they are shown
  for each tile. Try setting the `tile_metatile_level` value to "1" and then "2". This will reduce label repetition, but take longer to render. 
  See [tile mode configuration](https://mapserver.org/output/tile_mode.html#configuration) in the docs.
  ```scala
  METADATA
      "tile_map_edge_buffer" "10"
      "tile_metatile_level" "0"
  END
  ```

### Possible Errors

```
"mapserv(): Web application error. No way to generate map extent. "
```

**Resolution** ensure the parameter order in the JS client is in the format `&TILE={x}+{y}+{z}&LAYERS`. Other tile services
often use the zoom level as the first parameter, for example `{z}/{x}/{y}`.




