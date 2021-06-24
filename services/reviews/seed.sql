COPY reviews(id, rating, date, summary, body, recommend, reported, reviewer_name, response, helpfulness)
FROM './data/reviews.csv'
DELIMITER ','
CSV HEADER;