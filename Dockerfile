
FROM node:lts-alpine
WORKDIR /usr/src/app
COPY . ./
RUN npm install
COPY . ./
RUN ls -l
CMD [ "npm", "start" ]