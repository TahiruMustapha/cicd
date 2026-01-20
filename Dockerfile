# ................... Build Stage ..............
FROM node:20-alpine AS build

#Set a working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

#Install Dependencies
RUN npm install

#Copy the rest of the source codes
COPY . .

#Build the Next app
RUN npm run build

# ....................Production stage ..................
FROM nginx:alpine AS production

#Copy the react buld to the inginx web directory
COPY --from=build /app/out /usr/share/nginx/html

#Expose the port
EXPOSE 80

#Start nginx

CMD ["nginx", "-g", "daemon off;"]
