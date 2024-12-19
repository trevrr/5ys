# 5 Why's Root Cause Analysis Tool

This is a playground application just to see how to build a Bolt type application with vite, typescript and react. I'm alwyas looking for a nice five why's template. So if you find this useful then please enjoy. There's no support. Do what you will with it.

It's just for fun.

## Deployment Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Local Development
1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

### Production Deployment
1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. The build output will be in the `dist` directory. You can serve these static files using any web server like Nginx, Apache, or a static file hosting service.

#### Example Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/your/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Using a Simple Static Server
Alternatively, you can use a simple static file server:

1. Install serve globally:
```bash
npm install -g serve
```

2. Serve the dist directory:
```bash
serve -s dist
```

The application will be available at http://localhost:3000 by default.

### Environment Variables
This application doesn't require any environment variables for basic functionality.

### Notes
- This is a client-side only application that uses localStorage for data persistence
- No database setup is required
- All data is stored in the user's browser