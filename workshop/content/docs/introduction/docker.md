# Docker

We will be using MapServer on a Docker image for the workshop. This ensures that the MapServer version and the Apache web server configuration are identical.

## Docker MapServer

The MapServer Docker image is provided by [Camptocamp](https://github.com/camptocamp/docker-mapserver), and the Dockerfile is found [here](https://github.com/camptocamp/docker-mapserver/blob/master/Dockerfile). 

MapServer runs on the Apache web server - see the [Apache page](../advanced/apache.md) page for further details. 

It uses the Apache [mod_fcgid module](https://httpd.apache.org/mod_fcgid/), module that provides FastCGI support.

MapServer runs on port 80 on the Docker container, which is mapped to port 5000 on the local machine, as can be seen in the Docker compose file
located at `workshop\exercises\docker-compose.yml`:

```yaml
  mapserver:
    image: camptocamp/mapserver:8.0
    container_name: mapserver
    ports:
      - 5000:80
    environment:
      MAPSERVER_CONFIG_FILE: "/etc/mapserver/mapserver.conf"
    volumes:
      - ./scripts:/scripts
      - ./mapfiles:/etc/mapserver
    networks:
      - mynetwork
```

## JavaScript Application

A second container that serves the JavaScript example pages is also run using Docker. This uses node and runs on port 5001 on both the container and the host machine.

```yaml
  node:
    image: node:lts-slim
    container_name: node
    ports:
      - 5001:5001
    working_dir: /home/node/app
    volumes:
      - ./app:/home/node/app
    networks:
      - mynetwork
    command: >
      sh -c "npm install && npm start"
```