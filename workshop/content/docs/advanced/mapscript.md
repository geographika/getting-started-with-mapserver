```
docker exec -it mapserver /bin/bash

apt install software-properties-common -y
add-apt-repository ppa:ubuntugis/ubuntugis-unstable -y
apt update
# the following still installs libmapserver etc.
apt install --no-install-recommends python3-mapscript -y

apt-cache search --names-only "mapscript"

apt remove python3-mapscript -y
apt autoremove -y

cd /scripts
apt download python3-mapscript
dpkg -i python3-mapscript_8.0.1-1~jammy2_amd64.deb

# python3-mapscript depends on libmapserver2 (>= 8.0.0); however:
#  Package libmapserver2 is not installed.
# can ignore these errors
```