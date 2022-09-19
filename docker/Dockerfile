# Base image
FROM node:18-alpine

WORKDIR /app/client

COPY package*.json ./

RUN npm ci

COPY . ./
