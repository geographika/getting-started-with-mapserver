"""

docker exec -it mapserver /bin/bash
dpkg -i /scripts/python3-mapscript_8.0.1-1~jammy2_amd64.deb

python /scripts/introduction.py
Segmentation fault if versions don't match
"""

import mapscript

mapfile = "/etc/mapserver/polygons.map"
mapfile = "/etc/mapserver/points.map"
m = mapscript.mapObj(mapfile)

lyr = m.getLayerByName("pois")

print(lyr.extent)

print(lyr.getExtent().toString())

# for any query to be successful it needs to have a template
# set - any value here will do
if not lyr.template:
    lyr.template = "ttt"

lyr.metadata.set("gml_types", "auto")

lyr.queryByFilter(m, "")
print(lyr.getNumResults())
results = lyr.getResults()
itemdefinitions = list(lyr.getItemDefinitions())

class_field = "type"
class_field = "fclass"
class_idx = -1

for i in range(lyr.numitems):

    item = lyr.getItem(i)
    print(item)
    if item == class_field:
        class_idx = i
    item_type = lyr.getItemType(i)
    if item_type:
        print(item_type)

if class_idx == -1:
    print("Field not found!")

values = []

for i in range(results.numresults):  # iterate over results
    result = results.getResult(i)
    shape = lyr.getShape(result)
    values.append(shape.getValue(class_idx))


print(set(values))
#
#    # see https://github.com/MapServer/MapServer/pull/5765
#
#    # get the value of the attribute at index 1
#    # print(shape.getValue(1))
#    shape.itemdefinitions = itemdefinitions
#    # print(shape.__geo_interface__)
#
print("Done!")