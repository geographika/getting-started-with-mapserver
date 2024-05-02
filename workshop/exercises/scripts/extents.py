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