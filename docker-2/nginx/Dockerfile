FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf
COPY server.conf.template /etc/nginx/templates/

RUN mkdir /etc/ssl/nginx && \
  openssl dhparam -out /etc/ssl/nginx/dhparam.pem 2048
