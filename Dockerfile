FROM elsols-docker.jfrog.io/eols/tio-centos7-nginx:1.2
COPY dist /usr/share/nginx/html

COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]

