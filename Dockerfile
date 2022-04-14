ARG NODE_VERSION=16.13.1
ARG ALPINE_VERSION=alpine3.14

FROM node:$NODE_VERSION-$ALPINE_VERSION AS deps
WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:$NODE_VERSION-$ALPINE_VERSION AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:$NODE_VERSION-$ALPINE_VERSION
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -g 1001 -S amp
RUN adduser -S amp -u 1001
COPY --from=build --chown=amp:amp /app/package.json ./
COPY --from=build --chown=amp:amp /app/node_modules ./node_modules
COPY --from=build --chown=amp:amp /app/public ./public
COPY --from=build --chown=amp:amp /app/.next ./.next
COPY --from=build --chown=amp:amp /app/next.config.js  ./
USER amp
EXPOSE 8080
CMD [ "npm", "run", "start" ]