# ---------- Base Build Stage ----------
FROM node:22-alpine AS build
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm ci

# Copy all project files
COPY . .

# Build Next.js app
RUN npm run build

# Optionally, prebuild Storybook (so it’s ready to run immediately)
RUN npm run build-storybook || echo "Storybook build skipped (dev mode)"

# ---------- Runtime Stage ----------
FROM node:22-alpine
WORKDIR /app

# Copy from build stage
COPY --from=build /app ./

# Install concurrently for running both servers
RUN npm install -g concurrently

# Environment
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV NEXT_PORT=3000
ENV STORYBOOK_PORT=6006

# Expose both ports
EXPOSE 3000 6006

# ---------- Start both apps ----------
CMD concurrently \
  "npm start -- --port $NEXT_PORT" \
  "npm run storybook -- --port $STORYBOOK_PORT --ci --host 0.0.0.0"
