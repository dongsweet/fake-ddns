FROM node:lts-alpine

WORKDIR /usr/src/fake-ddns
ADD . /usr/src/fake-ddns
RUN npm i --production

EXPOSE 7001
CMD ["npm", "run", "run"]