# Mapfile Introduction

!!! note

    Ensure that you have MapServer setup and running at <http://localhost:5000>.

# Displaying your First Map

- <http://localhost:5000/?map=/etc/mapserver/points.map&mode=map&layer=pois>

## Verify the existing Docker Compose config

Before making any changes, we will make sure that the initial Docker Compose
setup provided to you is actually working. Two files are relevant:

* `workshop/exercises/docker-compose.yml`

To test:

!!! question "Test the workshop configuration"

    1. In a terminal shell navigate to the workshop folder and type:

    <div class="termy">
    ```bash
    cd workshop/exercises
    docker-compose up
    ```
    </div>
    1. Open <http://localhost:5000> in your browser, you should see an error message!
    1. Close by typing `CTRL-C`

!!! note

    You may also run the Docker container in the background (detached) as follows:

    <div class="termy">
    ```bash
    docker-compose up -d
    docker ls  # verify that the pygeoapi container is running
    # visit http://localhost:5000 in your browser, verify some collections
    docker logs --follow pygeoapi  # view logs
    docker-compose stop
    ```
    </div>


Interacting with MapServer on the command-line:

```
docker exec -it mapserver /bin/bash
mapserv -v
```

## JavaScript

Map name to show all layers
Or define individually
