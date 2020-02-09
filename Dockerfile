# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY src /app/src
COPY public /app/public
RUN npm install
RUN npm install node-sass

# start app
CMD ["npm", "start"]