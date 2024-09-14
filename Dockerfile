#FROM node:latest
FROM node:20.12.2

#USER node
WORKDIR /app
COPY package*.json ./
#RUN apt-get update
#RUN apt-get install -y nodejs
RUN npm install
#COPY --chown=node:node . .
COPY . .
EXPOSE 3000
#CMD ["npm", "start"]
CMD npm run dev






