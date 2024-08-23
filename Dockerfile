# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of your application files
COPY . .

# Build the application (if needed)
RUN npm run build

# Make port 3000 available to the outside world
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
