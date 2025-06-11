FROM node:20-alpine

RUN apk add --no-cache python3 make g++

WORKDIR /app

# copy over package.json files
COPY package.json yarn.lock /app/

RUN yarn install

# Copy toàn bộ mã nguồn từ thư mục app/ ở context root
ADD . /app

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
