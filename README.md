# CI/CD Pipeline with GitHub Actions & Docker

## 📁 Project Overview
This project demonstrates a complete CI/CD workflow using:
- Node.js & Express for the web app
- Docker & Docker Compose for containerization
- GitHub Actions for CI/CD automation

## Docker Image
Image: https://hub.docker.com/repository/docker/nishantpatil01/my-app/general 
Tag: `latest`

## CI/CD Workflow
Located at `.github/workflows/main.yml`  
Automated pipeline includes:
- Install dependencies
- Run Jest tests
- Build Docker image
- Push to Docker Hub

### Status
All jobs passed successfully.  
Pipeline duration: ~25 seconds

## Deployment
Run locally using:

```bash
docker-compose up --build
