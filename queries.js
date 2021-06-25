exports.Q = {
  createProducts: `create table products (
    id int primary key,
    name varchar not null,
    slogan varchar not null,
    description varchar not null,
    category varchar not null,
    default_price int not null
  );`,
  createStyles: `create table styles (
    id int primary key,
    "productId" int not null,
    name varchar not null,
    original_price int not null,
    sale_price int,
    default_style int not null,
    foreign key ("productId")
      references products (id)
  );`,
  createFeatures: `create table features (
    id int primary key,
    "productId" int not null,
    feature varchar not null,
    value varchar,
    foreign key ("productId")
      references products (id)
  );`,
  createReleated: `create table related (
    id int primary key,
    current_product_id int not null,
    related_product_id int not null,
    foreign key (current_product_id)
      references products (id),
    foreign key (related_product_id)
      references products (id)
  );`,
  createPhotos: `create table photos (
    id int primary key,
    "styleId" int not null,
    thumbnail_url varchar not null,
    url varchar not null,
    foreign key ("styleId")
      references styles (id)
  );`,
  createSkus: `create table skus (
    id int primary key,
    "styleId" int not null,
    quantity int not null,
    size varchar not null,
    foreign key ("styleId")
      references styles (id)
  );`,
  products: `products(id, name, slogan, description, category, default_price)`,
  styles: `styles(id, "productId", name, original_price, sale_price, default_style)`,
  features: `features(id, "productId", feature, value)`,
  related: 'related(id, '

}