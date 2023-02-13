# Create image based off of the official Node 6 image
FROM node:alpine

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/node-app

# Change directory so that our commands run inside this new dir
WORKDIR /usr/src/node-app

# Copy dependency definitions
COPY package.json /usr/src/node-app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/node-app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
