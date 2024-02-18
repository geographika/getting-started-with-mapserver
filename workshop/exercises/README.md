# Environment

## Docker compose environment

### Start
To start Docker Compose, from `workshop/exercises`, run the following command:

```bash
docker compose up -d
```

This will start a Docker container with MapServer (reachable from the browser at <http://localhost:5000/>), and
a Docker container with an OpenLayers development environment (reachable from the browser at <http://localhost:5001/>).

To stop, use the command:

```bash
docker compose down
```
