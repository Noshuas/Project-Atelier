const express = require('express');
const app = express();
const port = 5000;
const db = require('./querys');
const morgan = require('morgan');
const cache = require('./cache.js');
const compression = require('compression');

app.use(compression());


app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static('public'));


app.use((req, res, next) => {
  if (req.method !== 'GET') {
    res.send('nice try');
    return;
  }
  cache.check(req.originalUrl, (err, result) => {
    if (err) { throw err; }
    if (result !== null) {
      res.send(result);
      return;
    }
    next();
  });
});


app.get('/products', (req, res) => {
  db.getProducts()
    .then((result)=> {
      cache.add('/products', result);
      res.send(result.rows);
    })
    .catch((err) => { throw err; });
});


app.get(`/products/:productId`, async (req, res) => {
  result = {};
  let { productId } = req.params;
  let [info, features] = await Promise.all([
    db.getProduct(productId),
    db.getFeatures(productId)
  ]);

  Object.assign(result, info.rows[0]);
  result.features = features.rows;
  cache.add(req.originalUrl, result);
  res.send(result);
});


app.get(`/products/:product_id/styles`, async (req, res) => {
  const { product_id } = req.params;
  result = { product_id };

  const styles = await db.getStyles(product_id);
  if (!styles.rows.length) {
    result.results = [];
    res.send(result);
    return;
  }

  const styleIds = styles.rows.map((style) => style.style_id);
  const low = Math.min(...styleIds);
  const high = Math.max(...styleIds);

  const [ photos, skus ] = await Promise.all([
    db.getPhotos(low, high),
    db.getSkus(low, high)
  ]);

  result.results = styles.rows.map((style, i) => {
    style['default?'] = !!style['default?'];
    style.photos = photos.rows.filter(({style_id}) => style_id === style.style_id);
    style.skus = {};

    skus.rows.forEach(({id, style_id, quantity, size})=>{
      if (style_id !== style.style_id) { return; }
      style.skus[id] = {
        quantity,
        size
      };
    });

    return style;
  });
  cache.add(req.originalUrl, result);
  res.send(result);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});