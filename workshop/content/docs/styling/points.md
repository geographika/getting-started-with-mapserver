## Point Styling

Let's start with displaying the simplest spatial type - points.


We can make a direct request to MapServer by opening the following URL - 
[http://localhost:5000/?map=/etc/mapserver/points.map&mode=map&layer=pois](http://localhost:5000/?map=/etc/mapserver/points.map&mode=map&layer=pois){:target="_blank"}

There is an example web page available at [http://localhost:5001/points.html](http://localhost:5001/points.html){:target="_blank"} which displays the
MapServer layer on top of an OSM background using OpenLayers.

### Mapfile

The Mapfile symbolises the points using different [SYMBOLs](https://mapserver.org/mapfile/symbol.html). A symbol can point to an image file
on disk as in the example below:

```
SYMBOL
    NAME "city-hall"
    TYPE SVG
    IMAGE "data/icons/city-hall.svg"
END
```

It can also reference a character in a font file. References to different font files are added to a [FONTSET](https://mapserver.org/mapfile/fontset.html).
This file has an alias for the name of the font, and the path to the font file itself. This workshop uses the following `fontset.txt` file.

```
MaterialIcons          MaterialIcons-Regular.ttf
MaterialIconsRound     MaterialIconsRound-Regular.otf
LiberationMono         LiberationMono-Regular.ttf
LiberationSans         LiberationSans-Regular.ttf
```

In the Mapfile itself we can then reference this file and use any of the font aliases for symbols and labels. In the example below we're using a
cinema character from Google's [Material Symbols](https://fonts.google.com/icons).
We use HTML entity number of the symbol we want in the [CHARACTER](https://mapserver.org/mapfile/symbol.html#mapfile-symbol-character) keyword.
A list of these codes and their associated symbols can be seen at [http://localhost:5001/fonts.html](http://localhost:5001/fonts.html).

```
FONTSET "data/fonts/fontset.txt"
SYMBOL
    NAME "cinema"
    TYPE TRUETYPE
    FONT "MaterialIcons"
    CHARACTER "&#57388;"
END
```


### Possible Errors

If SVG symbols are not appearing, ensure they have a width and height set. You can view the contents of an SVG file in a text editor.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 50 50">
    <path fill="currentColor" d="M7.743 21.8h3.485v22.4h5.229V25h5.229v19.2h5.228...
</svg>
```



'hotel', 'greengrocer', 'butcher', 'travel_agent', 'fast_food', 'university', 'caravan_site', 'camera_surveillance', 'vending_machine', 'recycling_clothes', 
'tower', 'drinking_water', 'fire_station', 'playground', 'mobile_phone_shop', 'hostel', 'beauty_shop', 'jeweller', 'tourist_info', 'stationery', 'sports_shop',
'doityourself', 'gift_shop', 'car_wash', 'viewpoint', 'bookshop', 'dentist', 'convenience', 'hairdresser', 'supermarket', 'fountain', 'bank', 
'community_centre', 'museum', 'laundry', 'optician', 'doctors', 'recycling_paper', 'furniture_shop', 'hunting_stand', 'veterinary', 'toy_shop', 
'general', 'mall', 'computer_shop', 'post_office', 'bicycle_rental', 'post_box', 'market_place', 'cafe', 'sports_centre', 'bench', 'shelter', 
'shoe_shop', 'nightclub', 'artwork', 'car_dealership', 'pharmacy', 'recycling', 'guesthouse', 'theme_park', 'bakery', 'beverages', 'bicycle_shop', 
'recycling_glass', 'school', 'bar', 'kindergarten', 'theatre', 'memorial', 'waste_basket', 'clothes', 'chemist', 'newsagent', 'courthouse', 
'monument', 'pub', 'embassy', 'pitch', 'comms_tower', 'clinic', 'car_rental', 'atm', 'library', 'cinema', 'restaurant', 'toilet', 'vending_any', 
'attraction', 'kiosk', 'vending_parking', 'florist'