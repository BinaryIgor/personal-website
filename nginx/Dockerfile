FROM nginx:1.10.3

COPY /certs/selfsigned.crt /etc/letsencrypt/live/igor.roztropinski.com/fullchain.pem
COPY /certs/selfsigned.key /etc/letsencrypt/live/igor.roztropinski.com/privkey.pem

COPY nginx.conf /etc/nginx/conf.d/default.conf