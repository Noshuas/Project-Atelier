
create table products (
    id int primary key,
    name varchar not null,
    slogan varchar not null,
    description varchar not null,
    category varchar not null,
    default_price int not null
  );

create table styles (
    id int primary key,
    "productId" int not null,
    name varchar not null,
    original_price int not null,
    sale_price int,
    default_style int not null,
    foreign key ("productId")
      references products (id)
  );


create table features (
    id int primary key,
    "productId" int not null,
    feature varchar not null,
    value varchar,
    foreign key ("productId")
      references products (id)
  );

create temporary table t (
  id int,
  "currentProductId" int,
  "relatedProductId" int
);

create table related (
    id serial primary key,
    "currentProductId" int not null,
    "relatedProductId" int not null,
    foreign key ("currentProductId")
      references products (id),
    foreign key ("relatedProductId")
      references products (id)
  );

create table photos (
    id int primary key,
    "styleId" int not null,
    thumbnail_url varchar not null,
    url varchar not null,
    foreign key ("styleId")
      references styles (id)
  );
create table skus (
    id int primary key,
    "styleId" int not null,
    quantity int not null,
    size varchar not null,
    foreign key ("styleId")
      references styles (id)
  );


COPY products(id, name, slogan, description, category, default_price)
FROM '/data/products.csv'
DELIMITER ','
NULL 'null'
CSV HEADER;

COPY styles(id,"productId",name,sale_price,original_price,default_style)
FROM '/data/styles.csv'
DELIMITER ','
NULL 'null'
CSV HEADER;

COPY features(id, "productId", feature, value)
FROM '/data/features.csv'
DELIMITER ','
NULL 'null'
CSV HEADER;

COPY t(id,"currentProductId","relatedProductId")
FROM '/data/related.csv'
DELIMITER ','
NULL 'null'
CSV HEADER;

INSERT INTO related ("currentProductId", "relatedProductId")
SELECT "currentProductId", "relatedProductId"
FROM t
WHERE "relatedProductId" != 0;

drop table t;

COPY photos(id,"styleId",url,thumbnail_url)
FROM '/data/photos.csv'
DELIMITER ','
NULL 'null'
CSV HEADER;

COPY skus(id,"styleId",size,quantity)
FROM '/data/skus.csv'
DELIMITER ','
NULL 'null'
CSV HEADER;
