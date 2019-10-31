FROM node:lts-alpine

WORKDIR /app

COPY . .

VOLUME /app

RUN npm install

EXPOSE 6006

CMD ["npm", "run", "storybook"]