const { Pool } = require('pg');
const etl = require('etl');
const { Q } = require('./queries.js');

// const connectionString = ':products://postgres:password@localhost:5432'
const pool = new Pool({
  host: 'localhost',
  database: 'products',
  user: 'yurgandurgan',
  password: 'ay78Dnn2lg0sj9nk3l]3',
  port: 8001,
  idleTimeoutMillis: 10000,
});

const setupTables = function () {
  pool.query(Q.createProducts, (err, res) => {
    console.log(err, res)
      pool.query(Q.createStyles, (err, res) => {
        console.log(err, res)
          pool.query(Q.createReleated, (err, res) => {
            console.log(err, res)
              pool.query(Q.createFeatures, (err, res) => {
                console.log(err, res)
                  pool.query(Q.createPhotos, (err, res) => {
                    console.log(err, res)
                      pool.query(Q.createSkus, (err, res) => {
                        console.log(err, res)
                        fillTables();
                      });
                  });
              });
          });
      });
  });
}

const fillTables = function() {
  // addRows('products', () => {
    addRows('styles', () => {
      addRows('features', () => {
        addRows('related', () => {
          console.log('hey....')
          addRows('photos', () => {
            addRows('skus', () => {})
          })
        })
      })
    })
  // });
}

const addRows = function (tableName, cb) {
  console.log(`importing files for ${tableName}`, new Date());

  etl.file(`./data/${tableName}.csv`)
    .pipe(etl.csv())
    .pipe(etl.map(r=>{
      if (r.sale_price === 'null') {r.sale_price = null;}
      if (r.value === 'null') {r.value = null;}
      return r;
    }))
    .pipe(etl.postgres.upsert(pool,'public',tableName,{concurrency:50000}))
    .promise()
    .then(()=>{cb()});
}

setupTables();

// pool.query("select * from features;", (err, res) => {
//   console.log(err, res)
// });