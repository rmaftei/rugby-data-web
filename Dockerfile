FROM node:15.13.0-alpine3.10 as builder

WORKDIR /opt 
COPY . ./
RUN npm install
RUN npm run ng build --prod


FROM nginx:1.19.9-alpine

COPY --from=builder /opt/dist/rugby-data /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]
