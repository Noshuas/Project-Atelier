 # syntax=docker/dockerfile:1
 FROM node:14
 COPY . .
 RUN npm start
 EXPOSE 5000
 CMD ["node", "server.js"]
