FROM node:18
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "app.js" ]