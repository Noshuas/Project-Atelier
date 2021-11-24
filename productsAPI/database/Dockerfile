 # syntax=docker/dockerfile=1
FROM postgres:13.3-alpine
ENV POSTGRES_USER=yurgandurgan
ENV POSTGRES_PASSWORD=ay78Dnn2lg0sj9nk3l]3
ENV POSTGRES_DB=products
COPY init.sh /docker-entrypoint-initdb.d/.
COPY init.dump .
EXPOSE 5432