# stage 1 build
FROM node:12.18.3-alpine as builder
ENV NODE_ENV build
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm i \
  && npm run build

# stage 2 run
FROM node:12.18.3-alpine
ENV NODE_ENV production
ENV SERVER_PORT 3000
ENV UI_HOST *
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/package*.json /usr/src/app/
COPY --from=builder /usr/src/app/dist/ /usr/src/app/dist/
RUN npm i
CMD ["node", "dist/main.js"]