FROM node:14

# Create app directory

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . ./

RUN ls

RUN npm install
RUN npm run build
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .
EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]