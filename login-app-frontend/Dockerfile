# stage 1 build
FROM node:12.18.3-alpine as builder
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm i \
  && npm run build

# stage 2 run
FROM nginx:1.17.1-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/login-app-frontend /usr/share/nginx/html
EXPOSE 80
