#Base image
FROM node:22-alpine


#Set working directory
WORKDIR /app

#Copy package.json & install dependencies
COPY package.json tsconfig.json ./
COPY src ./src
RUN npm install

#Build the Typescript code
RUN npm run build

#Expose port
EXPOSE 4000

#Start the app
CMD ["npm", "start"]