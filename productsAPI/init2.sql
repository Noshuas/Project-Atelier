CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR NOT NULL,
  slogan VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  default_price INT NOT NULL
);

CREATE TABLE styles (
  style_id INT PRIMARY KEY,
  "product_id" INT NOT NULL,
  name VARCHAR NOT NULL,
  original_price INT NOT NULL,
  sale_price INT,
  "default?" INT NOT NULL,
  FOREIGN KEY ("product_id")
    REFERENCES products (id)
);

CREATE TABLE features (
  id INT PRIMARY KEY,
  "productId" INT NOT NULL,
  feature VARCHAR NOT NULL,
  value VARCHAR,
  FOREIGN KEY ("productId")
    REFERENCES products (id)
);

create temporary table t (
  id INT,
  "currentProductId" INT,
  "relatedProductId" INT
);

CREATE TABLE related (
  id SERIAL PRIMARY KEY,
  "currentProductId" INT NOT NULL,
  "relatedProductId" INT NOT NULL,
  FOREIGN KEY ("currentProductId")
    REFERENCES products (id),
  FOREIGN KEY ("relatedProductId")
    REFERENCES products (id)
);

CREATE TABLE photos (
  id INT PRIMARY KEY,
  "style_id" INT NOT NULL,
  thumbnail_url VARCHAR NOT NULL,
  url VARCHAR NOT NULL,
  FOREIGN KEY ("style_id")
    REFERENCES styles (style_id)
);

CREATE TABLE skus (
    id INT PRIMARY KEY,
    "style_id" INT NOT NULL,
    quantity INT NOT NULL,
    size VARCHAR NOT NULL,
    FOREIGN KEY ("style_id")
      REFERENCES styles (style_id)
  );

CREATE INDEX styles_pid ON styles (product_id);
CREATE INDEX features_pid ON features ("productId");
CREATE INDEX related_pid ON related ("currentProductId");
CREATE INDEX photos_sid ON photos (style_id);
CREATE INDEX skus_sid ON skus (style_id);

COPY products(id, name, slogan, description, category, default_price)
FROM '/home/noshua/HackReactor/Coding/sdc/productsAPI/server/public/products.csv'
-- FROM PROGRAM 'curl http://3.128.172.80/products.csv'
DELIMITER ',' 
NULL 'null'
CSV HEADER;

COPY styles(style_id,"product_id",name,sale_price,original_price,"default?")
-- FROM PROGRAM 'curl http://3.128.172.80/styles.csv'
FROM '/home/noshua/HackReactor/Coding/sdc/productsAPI/server/public/styles.csv'
DELIMITER ','
NULL 'null'
CSV HEADER;

COPY features(id, "productId", feature, value)
FROM '/home/noshua/HackReactor/Coding/sdc/productsAPI/server/public/features.csv'
-- FROM PROGRAM 'curl http://3.128.172.80/features.csv'
DELIMITER ','
NULL 'null'
CSV HEADER;

COPY t(id,"currentProductId","relatedProductId")
FROM '/home/noshua/HackReactor/Coding/sdc/productsAPI/server/public/related.csv'
-- FROM PROGRAM 'curl http://3.128.172.80/related.csv'
DELIMITER ','
NULL 'null'
CSV HEADER;

INSERT INTO related ("currentProductId", "relatedProductId")
SELECT "currentProductId", "relatedProductId"
FROM t
WHERE "relatedProductId" != 0;

DROP TABLE t;

COPY photos(id,"style_id",url,thumbnail_url)
FROM '/home/noshua/HackReactor/Coding/sdc/productsAPI/server/public/photos.csv'
-- FROM PROGRAM 'curl http://3.128.172.80/photos.csv'
DELIMITER ','
NULL 'null'
CSV HEADER;

COPY skus(id,"style_id",size,quantity)
FROM '/home/noshua/HackReactor/Coding/sdc/productsAPI/server/public/skus.csv'
-- FROM PROGRAM 'curl http://3.128.172.80/skus.csv'
DELIMITER ','
NULL 'null'
CSV HEADER;
