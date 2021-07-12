#/!bin/bash

site_dir=${SITE_DIR:-"/home/igor/ws/sites/iroztropinski/site"}

docker build -t custom-nginx .
docker run -v "${site_dir}:/usr/share/nginx/site:ro"  -p 443:443 -p 80:80 custom-nginx