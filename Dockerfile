# environment variables: image
ARG NODE_VERSION=16.13.1
ARG ALPINE_VERSION=alpine3.14

# multi-stage: base (build)
FROM node:$NODE_VERSION-$ALPINE_VERSION AS base

# create directory where the application will be built
WORKDIR /app

# copy over the dependency manifests, both the package.json 
# and the package-lock.json are copied over
COPY package*.json ./

# installs packages and their dependencies
RUN npm ci

# copy over the code base
COPY . .

# create the bundle of the application
RUN npm run build

# multi-stage: production (runtime)
FROM node:$NODE_VERSION-$ALPINE_VERSION AS runtime

# environment variables: user & configuration
ARG user=amplication
ARG group=${user}
ARG uid=1001
ARG gid=$uid
ENV NODE_ENV=production

# create directory where the application will be built
WORKDIR /app

# add the user
RUN addgroup --system --gid ${gid} ${group}
RUN adduser --system --uid ${uid} ${user}

# copy and change ownership of directories and files
COPY --from=base --chown=${user}:${group} /app/package.json ./
COPY --from=base --chown=${user}:${group} /app/node_modules ./node_modules
COPY --from=base --chown=${user}:${group} /app/public ./public
COPY --from=base --chown=${user}:${group} /app/.next ./.next
COPY --from=base --chown=${user}:${group} /app/next.config.js ./

# set user to the created non-privileged user
USER ${user}

# expose a specific port on the docker container
ENV PORT=3000
EXPOSE ${PORT}

# start the server using the previously build application
CMD ["npx", "next", "start"]