# Introduction



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

# Displaying your First Map

- Ensure that you have MapServer setup and running at <http://localhost:5000>.
- Now try a MapServer URL - <http://localhost:5000/?map=/etc/mapserver/countries.map&mode=map>


!!! note

    You may also run the Docker container in the background (detached) as follows:

    <div class="termy">
    ```bash
    docker-compose up -d
    docker ls  # verify that the mapserver container is running
    # visit http://localhost:5000 in your browser
    docker logs --follow mapserver  # view logs
    docker-compose stop
    ```
    </div>


## Folder Structure

```
--8<-- "tree.md"
```



