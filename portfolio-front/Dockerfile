# # Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package.json package-lock.json ./  
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

# Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# FROM node:18 AS builder
# WORKDIR /app
# COPY package.json package-lock.json ./  
# RUN npm install --frozen-lockfile
# COPY . .
# RUN npm run build
#
# # Serve with a minimal static file server
# FROM busybox:1.35
# WORKDIR /www
# COPY --from=builder /app/dist /www
# EXPOSE 80
# CMD ["httpd", "-f", "-v", "-p", "80"]
#
