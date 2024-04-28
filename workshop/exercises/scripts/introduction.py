"""

docker exec -it mapserver /bin/bash
dpkg -i /scripts/python3-mapscript_8.0.1-1~jammy2_amd64.deb

python /scripts/introduction.py
Segmentation fault if versions don't match
"""

import mapscript


def get_values(mapfile, layer_name, class_field):
    m = mapscript.mapObj(mapfile)

    lyr = m.getLayerByName(layer_name)
    # print(lyr.extent)
    # print(lyr.getExtent().toString())

    # for any query to be successful it needs to have a template
    # set - any value here will do
    if not lyr.template:
        lyr.template = "ttt"

    lyr.metadata.set("gml_types", "auto")

    lyr.queryByFilter(m, "")

    # print(lyr.getNumResults())
    results = lyr.getResults()
    # itemdefinitions = list(lyr.getItemDefinitions())

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
        class_idx = 0
        print("Field not found!")

    values = {}

    print(f"Result count: {results.numresults}")

    for i in range(results.numresults):  # iterate over results
        result = results.getResult(i)
        shape = lyr.getShape(result)
        val = shape.getValue(class_idx)
        if val in values:
            values[val] += 1
        else:
            values[val] = 1

    for val, count in sorted(values.items()):
        print(val, count)
    #
    #    # see https://github.com/MapServer/MapServer/pull/5765
    #
    #    # get the value of the attribute at index 1
    #    # print(shape.getValue(1))
    #    shape.itemdefinitions = itemdefinitions
    #    # print(shape.__geo_interface__)
    #


if __name__ == "__main__":
    mapfile = "/etc/mapserver/polygons.map"
    mapfile = "/etc/mapserver/landuse.map"
    mapfile = "/etc/mapserver/raster.map"
    layer_name = "dtm"  # landuse poi
    class_field = "pixel"  # type fclass
    get_values(mapfile, layer_name, class_field)
print("Done!")