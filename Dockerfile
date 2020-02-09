# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY yarn.lock /app/yarn.lock
COPY config /app/config
RUN yarn install
RUN yarn add node-sass@latest
COPY public /app/public
# start app
CMD ["npm", "start"]