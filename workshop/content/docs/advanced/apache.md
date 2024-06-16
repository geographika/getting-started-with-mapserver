# MapServer and Apache

Apache - used by the workshop Docker image

Since version 8.0 MapServer has a global config file.

At its heart MapServer is a command-line application that can be accessed through a web server.

https://github.com/camptocamp/docker-mapserver/blob/master/runtime/usr/local/bin/start-server

Apache has a configuration file

https://github.com/camptocamp/docker-mapserver/blob/master/runtime/etc/apache2/conf-enabled/mapserver.conf

[mod_fcgid module](https://httpd.apache.org/mod_fcgid/), which is an Apache module that provides FastCGI support.

```
FcgidMaxRequestsPerProcess ${MAX_REQUESTS_PER_PROCESS}
FcgidMinProcessesPerClass ${MIN_PROCESSES}
FcgidMaxProcessesPerClass ${MAX_PROCESSES}
FcgidBusyTimeout ${BUSY_TIMEOUT}
FcgidIdleTimeout ${IDLE_TIMEOUT}
FcgidIOTimeout ${IO_TIMEOUT}
```

These are all documented on the [reference page(https://httpd.apache.org/mod_fcgid/mod/mod_fcgid.html).

These all have defaults in the Docker file, but can be overriden using environment variables.

```

ENV MS_DEBUGLEVEL=0 \
    MS_ERRORFILE=stderr \
    MAPSERVER_CONFIG_FILE=/etc/mapserver.conf \
    MAPSERVER_BASE_PATH= \
    MAX_REQUESTS_PER_PROCESS=1000 \
    MIN_PROCESSES=1 \
    MAX_PROCESSES=5 \
    BUSY_TIMEOUT=300 \
    IDLE_TIMEOUT=300 \
```


All requests to the server are mapped to `mapserv_wrapper` - a small 

```
ScriptAliasMatch "^${MAPSERVER_BASE_PATH}/(.*)" /usr/local/bin/mapserv_wrapper/$1
ScriptAliasMatch "^${MAPSERVER_BASE_PATH}" /usr/local/bin/mapserv_wrapper
```



IIS - https://mapserver.org/installation/iis.html
