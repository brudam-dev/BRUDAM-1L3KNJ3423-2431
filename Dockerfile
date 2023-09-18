# Use a imagem base do Node.js
FROM node:18.16.1

WORKDIR /www

COPY . .

RUN npm install     

EXPOSE 3000

CMD ["npm", "start"]
