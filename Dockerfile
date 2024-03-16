# Use an official Node.js runtime as a parent image
FROM node:18-alpine



# Set the working directory in the container
WORKDIR /src

COPY . .

RUN yarn install

# Install dependencies
RUN yarn build

# Expose port 5000
EXPOSE 5000

# Command to run the application
CMD ["yarn", "start"]
