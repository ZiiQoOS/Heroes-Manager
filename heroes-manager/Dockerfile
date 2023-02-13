# Stage 1
FROM node as nodeStage

RUN mkdir -p /app

WORKDIR /app

# COPY package.json /app/
COPY . .
RUN npm install
RUN npm run build

# Stage 2
FROM nginx
COPY --from=nodeStage /app/dist/heroes-manager /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf