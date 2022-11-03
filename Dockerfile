FROM node:latest
WORKDIR /usr/src/app
COPY . ./
RUN npm install
COPY . ./
RUN ls -l
EXPOSE 5000
ENV HOST=0.0.0.0
CMD [ "npm", "start" ]
