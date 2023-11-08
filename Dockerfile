FROM alpine:3.18
WORKDIR /app
RUN apk --no-cache add nodejs npm
COPY ./server .
RUN rm -rf .git && rm -rf node_modules && npm i --production
CMD ["node", "server.js"]