FROM nginx
COPY /certs/selfsigned.crt /etc/ssl/certs/selfsigned.crt
COPY /certs/selfsigned.key /etc/ssl/private/selfsigned.key
COPY nginx.conf /etc/nginx/conf.d/default.conf