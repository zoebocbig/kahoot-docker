FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# Copier le dossier kahoot dans nginx
COPY kahoot/ /usr/share/nginx/html/

EXPOSE 80
