FROM node:15.13.0-alpine3.10 as builder

WORKDIR /opt 
COPY . ./
RUN npm install
RUN npm run ng build --prod


FROM node:15.13.0-alpine3.10

RUN npm install -g http-server
COPY --from=builder /opt/dist/rugby-data /opt/dist/rugby-data

EXPOSE $PORT

CMD http-server -p $PORT -c-1 /opt/dist/rugby-data
