```bash
docker exec -it mapserver /bin/bash

echo "26.668678 58.339241" | gdaltransform -s_srs EPSG:4326 -t_srs EPSG:3857
echo "26.796582 58.409410" | gdaltransform -s_srs EPSG:4326 -t_srs EPSG:3857

# for centres

python -c "print((26.668678 + 26.796582) / 2)"
python -c "print((58.339241 + 58.409410) / 2)"
```