FROM node:14.17.6

WORKDIR /var/www/html

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "dev"]
