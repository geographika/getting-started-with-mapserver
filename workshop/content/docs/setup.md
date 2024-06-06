# Workshop Environment Setup

In this workshop we use the following materials:

1. **Documentation** - (like this page): the latest versions are available online [here](https://geographika.github.io/getting-started-with-mapserver/)
2. **Exercises** - download the [latest zip file](https://github.com/geographika/getting-started-with-mapserver/archive/refs/heads/main.zip), unzip, 
   and find exercises in `workshop/exercises`.

The first step is to download and unzip the `main.zip` file to a local folder on your system. 
Alternatively, if you are familiar with `git` and have it installed you can fork/clone the GitHub repository of this 
workshop directly from https://github.com/geographika/getting-started-with-mapserver/.

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

The main requirement for the training is to install Docker with Docker Compose on your system.
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

* Windows [installation](https://docs.Docker.com/desktop/install/windows-install) - install "Docker Desktop for Windows"
* Mac [installation](https://docs.Docker.com/desktop/install/mac-install)
* Linux [installation](https://docs.Docker.com/desktop/install/linux-install)

Some notes:

* On Windows we recommend using the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl) (WSL) as it also provides a powerful (Bash) command line and has optimal integration with Docker
* On Windows if you get "WSL update failed" you may need to first run `wsl --update`
* On Mac, if you are using [Homebrew](https://brew.sh), consider using the [brew Docker formula](https://formulae.brew.sh/formula/Docker)
* On MacOS Monterey, there is an issue with the port 5000 that is already used and therefore conflicting to the default one used by MapServer. 
  If you are facing with this error `OSError: [Errno 48] Address already in use` then you need to can disable the *Airplay Receiver* from `System Preference->Sharing` of your MacOS (detailed description in this blog [post](https://progressstory.com/tech/port-5000-already-in-use-macos-monterey-issue/)).
* On Linux, you can choose the relevant installer for your platform. You can also use Virtualbox with a Ubuntu image or use a cloud VM
* Docker Desktop includes a graphical user interface with some interesting options. You can see logs and information about running containers, open their service in a browser or even open a terminal inside the container

If all goes well, you should be able to run Docker from the command line as follows:

<div class="termy">
```bash
docker --version
Docker version 26.1.1, build 4cf5afa

docker compose version
Docker Compose version v2.27.0-desktop.2
```
</div>

(It is not required that your version numbers exactly match).


## Quickstart

Once Docker is available on your system, running the workshop containers with MapServer and all required datasets
is a one-liner. 

```bash
# make sure you are in the directory that contains docker-compose.yml
cd /getting-started-with-mapserver/workshop/exercises/
# now start the containers
docker compose up --detach
```

The first time this command is run it will start downloading the containers - this may take several minutes depending on your Internet connection.
On Windows you may be prompted to let Docker access ports through your Windows Firewall. 

When this command is next run it should only take a few seconds to start.The `detach` flag means the containers will run in the background so we 
can continue to use the shell. If you want to stop the containers you can run:

```bash
docker compose down
```

Once the containers are downloaded you can test they are running and you can connect to them. Open a web browser
and navigate to <http://localhost:5000/>. You should see the following message:

```bash
loadParams(): Web application error. No query information to decode. QUERY_STRING is set, but empty.
```

This is good! It means MapServer is running. Next we can check that the front-end container is running by opening <http://localhost:5001/points.html>.
Hopefully you'll see a map, and we're ready to start the workshop.
