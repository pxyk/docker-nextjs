FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js

# COPY src/pages ./src/pages
# COPY public ./public
# COPY src/styles ./src/styles

CMD ["npm", "run", "dev"]