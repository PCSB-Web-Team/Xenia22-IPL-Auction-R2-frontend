FROM node:15.13-alpine
WORKDIR /react
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
# CMD ["npm", "start"]