# Portfolio Next - Dokploy Deployment Guide

This is a modern React portfolio website built with Vite, TailwindCSS, and deployed using Dokploy with Docker Compose.

## 🚀 Deployment on Dokploy

### Prerequisites

1. **Install Dokploy on your VPS:**
   ```bash
   curl -sSL https://dokploy.com/install.sh | sh
   ```

2. **Access Dokploy Dashboard:**
   - Navigate to `http://your-server-ip:3000`
   - Complete the initial setup

### Deployment Steps

1. **Create New Project:**
   - Go to Projects → Create New Project
   - Name your project (e.g., "Portfolio")

2. **Add Docker Compose Application:**
   - Click "Add Application"
   - Choose "Docker Compose"
   - Connect your Git repository
   - Set the compose file path: `docker-compose.yml`

3. **Configure Environment Variables:**
   ```bash
   NODE_ENV=production
   ```

4. **Domain Configuration:**
   - Update `docker-compose.yml` and replace `your-domain.com` with your actual domain
   - In Dokploy, go to Domains tab and add your domain
   - SSL certificates will be automatically generated

### Docker Compose Configuration

The `docker-compose.yml` file is configured with:
- **Traefik labels** for automatic routing
- **Health checks** for reliability
- **dokploy-network** for service communication
- **Automatic SSL** with Let's Encrypt

### Local Testing

```bash
# Test the Docker build
docker-compose build

# Run locally
docker-compose up

# Access at http://localhost:3000
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure

```
portfolio_next/
├── docker-compose.yml    # Dokploy configuration
├── Dockerfile           # Container definition
├── src/                # React source code
├── public/             # Static assets
├── dist/               # Build output (generated)
└── package.json        # Dependencies
```

## 🔧 Configuration Details

### Vite Configuration
- Optimized build with code splitting
- Network access configuration for Docker
- Static asset optimization

### Docker Setup
- Multi-stage build for optimization
- Health checks for monitoring
- Serves static files with `serve`

## 🚀 Deployment Flow

1. **Push to Git** → Triggers automatic deployment
2. **Dokploy builds** → Uses Docker Compose
3. **Health check** → Ensures app is running
4. **Traefik routing** → Routes traffic to your domain
5. **SSL certificate** → Automatic HTTPS

## 🔧 Troubleshooting

### Common Issues:

1. **Build fails:**
   - Check Node.js version (using Node 20)
   - Verify all dependencies in package.json
   - Check build logs in Dokploy

2. **Domain not working:**
   - Verify DNS points to your server IP
   - Check domain configuration in docker-compose.yml
   - Ensure port 80/443 are open

3. **App not starting:**
   - Check container logs in Dokploy
   - Verify health check endpoint
   - Check if port 3000 is exposed correctly

### Health Check

The application includes a health check that verifies the app is responding on port 3000.

### Monitoring

Dokploy provides:
- Container logs
- Resource usage metrics
- Deployment history
- Health status monitoring

## 📞 Support

For deployment issues:
- Check Dokploy documentation: https://docs.dokploy.com
- Review container logs in Dokploy dashboard
- Verify domain DNS settings
- Check Docker Compose configuration
