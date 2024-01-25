---
title: Getting Started with MapServer
---

# Welcome to the Getting Started with MapServer workshop!

Version: 1.0

![mapserver logo](assets/images/mapserver-banner-large.png)

[MapServer](https://mapserver.org/) is an Open Source platform for publishing spatial data and interactive mapping applications to the web. 
Originally developed in the mid-1990’s at the University of Minnesota, MapServer is released under an MIT-style license, and runs on all 
major platforms (Windows, Linux, Mac OS X). 

**Getting Started with MapServer** is a half day workshop designed for users to become familiar with installing, configuring, 
and publishing data. This workshop will cover publishing geospatial data to the Web using MapServer in support of the suite of OGC API standards.

This workshop covers a wide range of topics (install/setup/configuration, publishing, cloud, templating, plugins, etc.). 
Please see the left hand navigation for the table of contents.

# About this tutorial

This tutorial is a combination of step-by-step explanations of various aspects of MapServer as well as a series of exercises to 
familiarize yourself with the project.

Exercises are indicated as follows:

!!! question "Example exercise"

    A section marked like this indicates that you can try out the exercise.

!!! example "Example exercise with tabs"

    A section marked like this indicates that you can try out the exercise and choose your environment (Linux/Mac or Windows).

    === "Linux/Mac"
        <div class="termy">
        ```bash
        docker run -p 5000:80 -v $(pwd)/default.config.yml:/pygeoapi/local.config.yml geopython/pygeoapi:latest
        ```
        </div>
    === "Windows"
        <div class="termy">
        ```bash
        docker run -p 5000:80 -v ${pwd}/default.config.yml:/pygeoapi/local.config.yml geopython/pygeoapi:latest
        ```
        </div>

Also you will notice tips and notes sections within the text:

!!! tip

    Tips share additional help on how to best achieve tasks

Examples are indicated as follows:

Code
``` {.html linenums="1"}
<html>
    <head>
        <title>This is an HTML sample</title>
    </head>
</html>
```

Configuration
``` {.yaml linenums="1"}
my-collection:
    type: collection
    title: my cool collection title
    description: my cool collection description
```

Snippets which need to be typed in a on a terminal/console are indicated as:

<div class="termy">
```bash
echo 'Hello world'
```
</div>

# Workshop location and materials

This workshop is always provided live at [https://geographika.github.io/getting-started-with-mapserver](https://geographika.github.io/getting-started-with-mapserver).

The workshop contents, wiki and issue tracker are managed on GitHub at [https://github.com/geographika/getting-started-with-mapserver](https://github.com/geographika/getting-started-with-mapserver).

# Support

For issues/bugs/suggestions or improvements/contributions, use the [GitHub issue tracker](https://github.com/geographika/getting-started-with-mapserver/issues).

All bugs, enhancements and issues can be reported on [GitHub](https://github.com/geographika/getting-started-with-mapserver/issues).

As always, core MapServer support and community information can be found on the MapServer [website](https://mapserver.org/community/index.html).

Contributions are always encouraged and welcome!


## Now, on to the workshop.  Let's go!
