FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache --virtual python

COPY package.json yarn.lock ./  

RUN npm install --frozen-lockfile

COPY . .

EXPOSE 5555

CMD "npm run dev"