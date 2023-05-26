# Fijarse, que se le agregó (AS build-env) a esta línea
FROM node:14.17.0 AS build-env

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build:prod

FROM nginx:1.13.9-alpine

COPY --from=build-env /app/dist/aunor-web/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf


# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.sample.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
