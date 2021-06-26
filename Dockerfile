 # syntax=docker/dockerfile=1
FROM postgres
ENV POSTGRES_USER=yurgandurgan
ENV POSTGRES_PASSWORD=ay78Dnn2lg0sj9nk3l]3
ENV POSTGRES_DB=products
COPY init.sql /docker-entrypoint-initdb.d/
RUN mkdir data
COPY /data /data
EXPOSE 5432
