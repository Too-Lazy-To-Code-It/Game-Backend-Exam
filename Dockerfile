FROM node:16

LABEL maintainer="Project Manager <pm@esprit.tn>"

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN chown -R node:node /home/node/app

USER node

EXPOSE 9090

CMD ["node", "index.js"]