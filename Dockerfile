# syntax=docker/dockerfile:1

FROM node:16.17.0 AS base

# Create app directory, this is in our container
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

FROM base AS dev
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
CMD [ "node", "dist/main" ]


FROM base AS prod
RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm i -g @nestjs/cli
RUN npm run build

CMD [ "node", "dist/main" ]