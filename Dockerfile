FROM node:14.17.0-stretch AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/www /usr/share/nginx/html
EXPOSE 80
