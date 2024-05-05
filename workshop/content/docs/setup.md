---
title: Workshop environment setup
---

# Workshop environment setup

In this workshop we use the following materials:

1. **Documentation** - (like this page): access latest [here](https://geographika.github.io/getting-started-with-mapserver/)
2. **Exercises** - download the [latest zip file](https://github.com/geographika/getting-started-with-mapserver/archive/refs/heads/main.zip), unzip, 
   and find exercises in `workshop/exercises` [^1]
3. **Docker** - all examples/exercises are run in a `Docker container` in `workshop/exercises`

[^1]: alternatively, you can fork/clone the GitHub repository of this workshop directly from https://github.com/geographika/getting-started-with-mapserver/.

## Text editor

Your text editor needs to be able to edit files in **plain text**. Below are some choices
for text editors (there may be others):

* Notepad or Notepad++ (Windows)
* Sublime Text
* IntelliJ IDEA
* Emacs
* Visual Studio Code
* `vi` / `vim`

Having said this, please feel free to use what works for you :)

## Docker

The main requirement for the training is to install Docker and/with Docker Compose on your system.
We strongly advise to install Docker before the workshop starts.

MapServer can be installed directly to various operating systems (see the [documentation](https://www.mapserver.org/installation/index.html)
for more information), but Docker is used so a fully reproducible environment can be setup.

[Docker Compose](https://docs.docker.com/compose) is an addition to Docker to facilitate
the orchestration (configuration) of one or more Docker 'Containers' (a Container is a running instance of a Docker image)
using a configuration convention (the Docker Compose YAML file), usually named `docker-compose.yml`.

## Docker Installation

Docker installation has greatly progressed over the years. This is the only part of the workshop
which is dependent on the system/OS you are running (e.g. Windows, Mac or Linux). For each
system the Docker website provides detailed installation instructions. Please follow these consistently.

For many platforms a product called `Docker Desktop` is available, which includes `Docker compose`:

* Windows [installation](https://docs.Docker.com/desktop/install/windows-install)
* Mac [installation](https://docs.Docker.com/desktop/install/mac-install)
* Linux [installation](https://docs.Docker.com/desktop/install/linux-install)

Some notes:

* On Windows we recommend using the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl) (WSL) as it also provides a powerful (Bash) command line and has optimal integration with Docker
* On Mac, if you are using [Homebrew](https://brew.sh), consider (as the author has) using the [brew Docker formula](https://formulae.brew.sh/formula/Docker)
* On MacOS Monterey, there is an issue with the port 5000 that is already used and therefore conflicting to the default one used by MapServer. 
  If you are facing with this error `OSError: [Errno 48] Address already in use` then you need to can disable the *Airplay Receiver* from `System Preference->Sharing` of your MacOS (detailed description in this blog [post](https://progressstory.com/tech/port-5000-already-in-use-macos-monterey-issue/)).
* On Linux, you can choose the relevant installer for your platform. You can also use Virtualbox with a Ubuntu image or use a cloud VM
* Docker Desktop includes a graphical user interface with some interesting options. You can see logs and information about running containers, open their service in a browser or even open a terminal inside the container

If all goes well, you should be able to run Docker from the command line as follows:

<div class="termy">
```bash
docker --version
Docker version 25.0.2, build 29cf629

docker compose version
Docker Compose version v2.24.3-desktop.1
```
</div>

(It is not required that your version numbers exactly match).


docker run --rm -p 5000:80 camptocamp/mapserver:latest

http://localhost:5000/?map=/etc/mapserver/example1-1.map&layer=states&mode=map
http://localhost:5000/
loadParams(): Web application error. No query information to decode. QUERY_STRING is set, but empty.