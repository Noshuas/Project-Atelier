create table products (
  id int primary key,
  name varchar not null,
  slogan varchar not null,
  description varchar not null,
  category varchar not null,
  default_price int not null,
);

create table styles (
  id int primary key,
  productId int not null,
  name varchar not null,
  original_price int not null,
  sale_price int not null,
  default_style boolean not null,
  foreign key (productId)
    references products (id),
);

create table features (
  id int primary key,
  productId int not null,
  feature varchar not null,
  value varchar not null,
  foreign key (productId)
    references products (id),
);

create table relatedProducts (
  id int primary key,
  productA int not null,
  productB int not null,
  foreign key (productA, productB)
    references products (id),
);

create table photos (
  id int primary key,
  styleId int not null,
  thumbnail_url varchar not null,
  url varchar not null,
  foreign key (styleId)
    references styles (id),
);

create table stock (
  id int primary key,
  styleId int not null,
  quantity int not null,
  size varchar not null,
  foreign key (styleId)
    references styles (id),
);