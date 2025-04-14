FROM arm64v8/ubuntu:latest

# Install base dependencies + Node.js + pnpm + Python + Chromium + fonts
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    gnupg \
    wget \
    python3 \
    # Use the 'chromium' package instead of 'chromium-browser' to avoid snaps
    chromium \
    fonts-liberation \
    && rm -rf /var/lib/apt/lists/*

# Verify chromium installation and list contents
RUN echo "Listing /usr/bin..." && ls -la /usr/bin | grep chrom

# Install Node.js (using NodeSource LTS)
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Set env var to skip puppeteer's download BEFORE installing dependencies
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
# Explicitly tell Puppeteer the path (though we'll also set it in the script)
# ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Copy dependency manifests
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# No ENTRYPOINT needed, we'll specify command in docker run 