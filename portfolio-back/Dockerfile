# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Generate Prisma Client
COPY prisma ./prisma
RUN npx prisma generate

# Copy rest of the app
COPY . .

# Build the project
RUN npm run build

# Start the server
CMD [ "node", "dist/main.js" ]

