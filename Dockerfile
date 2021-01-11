from nginx
COPY dist/devtools/ /usr/share/nginx/html/
copy default.conf /etc/nginx/conf.d/default.conf