FROM node:20.3.0

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3069
CMD ["npm", "start"]
