const { Pool } = require('pg');
const pool = new Pool({
  host: '172.31.14.113',
  // host: 'localhost',
  // host: "database",
  database: 'products',
  user: 'yurgandurgan',
  password: 'ay78Dnn2lg0sj9nk3l]3',
  // port: 5432,
  port: 80,
  idleTimeoutMillis: 10000,
});

module.exports = {
  getProducts: () => pool.query('select * from products where id < 20'),
  getProduct: (productId) => pool.query(`select * from products where id = ${productId}`),
  getFeatures: (productId) => pool.query(`select feature, value from features where "productId" = ${productId}`),
  getStyles: (productId) => pool.query(`select * from styles where "product_id" = ${productId}`),
  getPhotos: (smallestStyleId, largestStyleId) => pool.query(`select style_id, thumbnail_url, url from photos where "style_id" BETWEEN ${smallestStyleId} AND ${largestStyleId}`),
  getSkus: (smallestStyleId, largestStyleId) => pool.query(`select * from skus where "style_id" BETWEEN ${smallestStyleId} AND ${largestStyleId}`),
  getRelated: (productId) => pool.query(`select "relatedProductId" from related where "currentProductId" = ${productId}`),
}