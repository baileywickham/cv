#!/bin/bash

echo "Starting Python HTTP server on port 4200..."
python3 -m http.server 4200 & 
SERVER_PID=$!

# Ensure server is killed on script exit (success, error, or signal)
trap "echo 'Stopping server (PID: $SERVER_PID)...'; kill $SERVER_PID" EXIT

# Wait a moment for the server to start (optional, but can help)
sleep 1

echo "Generating PDF..."
# Use the new Node.js script with Puppeteer
node generatePDF.js 'http://localhost:4200' public/wickham.pdf A4
PDF_EXIT_CODE=$?

echo "PDF generation finished with exit code $PDF_EXIT_CODE."

# Trap will automatically kill the server on exit
exit $PDF_EXIT_CODE
