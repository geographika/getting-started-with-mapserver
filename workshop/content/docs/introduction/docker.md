## Docker

For the workshop We will be using MapServer on a Docker image. This ensures
that the MapServer version and the Apache web server configuration are identical.


https://github.com/camptocamp/docker-mapserver



https://github.com/camptocamp/docker-mapserver/blob/master/Dockerfile

See the Apache page for further details

Runs [mod_fcgid module](https://httpd.apache.org/mod_fcgid/), which is an Apache module that provides FastCGI support.
Runs on port 80 on the Docker container, which is mapped to port 5000 on the local machine:

```yaml
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