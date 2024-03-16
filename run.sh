#!/bin/bash

# Build Docker image
docker build -t questionnaire_app  --progress=plain .

# Run Docker container
docker run -d -p 5000:5000 --name questionnaire_app_container questionnaire_app

echo "Application is running and reachable at http://localhost:5000"
