FROM node:22

WORKDIR /app

COPY package.json package-lock.json webpack.config.js /app
COPY ./src /app/src

RUN npm i
RUN npm run build

FROM node:22

EXPOSE 3000

WORKDIR /app

COPY --from=0 /app/dist/app.js /app
COPY ./public /app/public

RUN 

CMD ["node", "/app/app.js"]
