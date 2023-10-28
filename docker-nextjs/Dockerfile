FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js

COPY src/pages ./src/pages
COPY public ./public
COPY src/styles ./src/styles
COPY src/pages/api ./src/pages/api

ENV NEXT_PUBLIC_API_URL=test
ENV NEXT_PUBLIC_API_TOKEN=test

CMD ["npm", "run", "dev"]