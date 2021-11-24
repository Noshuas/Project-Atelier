 # syntax=docker/dockerfile=1
FROM node:16-alpine3.11
COPY . .
RUN npm install
EXPOSE 5000
CMD ["node", "index.js"]
