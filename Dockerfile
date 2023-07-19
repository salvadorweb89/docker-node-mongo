# Declare parent image, Node V18
FROM node:12

# Create working dir inside the container
WORKDIR /usr/src/app

# Copies package.json file and make npm install
COPY package*.json ./
RUN npm install

# Exposes desired port
EXPOSE 4000

# Copies all files from Node Package Module
COPY . .

# Runs 'start' script from package.json
CMD npm start