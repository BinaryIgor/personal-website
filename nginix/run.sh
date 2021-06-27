#/!bin/bash
docker build -t custom-nginx .
docker run -v /home/igor/ws/sites/iroztropinski:/usr/share/nginx/html:ro  -p 8080:80 custom-nginx