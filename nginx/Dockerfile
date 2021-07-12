FROM nginx

COPY /certs/selfsigned.crt /etc/letsencrypt/live/igor.roztropinski.com/cert.pem
COPY /certs/selfsigned.key /etc/letsencrypt/live/igor.roztropinski.com/privkey.pem

COPY nginx.conf /etc/nginx/conf.d/default.conf