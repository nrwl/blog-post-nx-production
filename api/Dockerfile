FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY app.js /usr/src/app

EXPOSE 9000

RUN npm install

CMD [ "npm", "start" ]