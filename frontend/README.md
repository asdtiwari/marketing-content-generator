# Marketing Content Generator - Frontend

A modern React-based user interface for the Marketing Content Generator application. Built with Vite for lightning-fast development experience.

## Overview

The frontend is a single-page application (SPA) that provides:
- User authentication (login/signup)
- Dashboard for content generation
- Responsive design for desktop and tablet viewing
- Real-time content generation with AI

## Tech Stack

- **React 19** - Modern UI framework with improved features
- **Vite** - Next-generation build tool with HMR (Hot Module Replacement)
- **React Router DOM v7** - Client-side routing
- **Axios** - Promise-based HTTP client for API calls
- **React Markdown** - Render generated Markdown content
- **ESLint** - Code quality and style checking

## Project Structure

```
src/
├── pages/
│   ├── Login.jsx        # User login page
│   └── Signup.jsx       # User registration page
├── services/
│   └── api.js          # Axios API integration and helper functions
├── styles/
│   ├── auth.css        # Authentication pages styling
│   ├── home.css        # Home/dashboard styling
├── App.jsx             # Main application component with routing
├── Home.jsx            # Home/dashboard page component
├── App.css             # Global app styles
├── index.css           # Global index styles
└── main.jsx            # React entry point
```

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn package manager

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create environment file**:
   Create a `.env` file in the frontend root:
   ```
   VITE_API_URL=http://localhost:8000
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

   The application will open at `http://localhost:5173`

## Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR). Any changes to your code will automatically reflect in the browser.

### Build for Production
```bash
npm run build
```
Creates an optimized production build. Output is in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build before deploying.

### Lint Code
```bash
npm run lint
```
Run ESLint to check code style and quality issues.

## Key Features

### Authentication Flow
- Signup page for new users
- Login page for returning users
- JWT token-based authentication
- Protected routes for authenticated users

### Content Generation
- Input custom prompts for content generation
- Select content type (social media, blog, email, etc.)
- Real-time content generation with AI
- Display generated content in formatted markdown

### API Integration
- `services/api.js` handles all API communications
- Axios instance configured with backend URL
- Automatic token management in request headers
- Error handling for failed requests

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:8000` |

## Component Documentation

### App.jsx
Main application component with React Router setup:
- Routes for Home, Login, and Signup pages
- Navigation between authenticated and public pages
- Protected routes implementation

### Home.jsx
Dashboard/home page component:
- Content generation form
- Display generated content
- User information display

### Login.jsx
User authentication page:
- Email and password input
- Form validation
- Error handling

### Signup.jsx
User registration page:
- Email, password, and confirmation input
- Form validation
- New user creation

## API Integration

The frontend communicates with the backend API through:
- Base URL configured in `.env` file
- JWT tokens stored in localStorage
- Axios interceptors for automatic token injection
- Error handling and user feedback

Example API call:
```javascript
import api from './services/api'

// Login
const response = await api.post('/auth/login', {
  email: 'user@example.com',
  password: 'password123'
})

// Generate content
const response = await api.post('/generate', {
  prompt: 'Your prompt here',
  content_type: 'social_media'
})
```

## Development Best Practices

### Code Quality
- Run `npm run lint` before committing
- Follow ESLint rules
- Use meaningful variable and function names
- Add comments for complex logic

### Performance
- Code splitting handled automatically by Vite
- Lazy load routes when possible
- Optimize images and assets
- Use React.memo for expensive components

### Security
- Store sensitive tokens securely
- Never commit `.env` files
- Validate user input
- Use HTTPS in production

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the actual URL.

### CORS Errors
Ensure `VITE_API_URL` in `.env` matches your backend URL and CORS is properly configured on the backend.

### Module Not Found
Clear node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

### Build Fails
- Clear cache: `npm run build` after deleting node_modules
- Check Node.js version compatibility
- Verify all dependencies are installed

## Production Deployment

### Build
```bash
npm run build
```

### Deployment Options

**Static Hosting (Recommended)**
- Netlify: Connect repository, set build command to `npm run build`
- Vercel: Same as Netlify, automatic optimization
- GitHub Pages: Configure for `dist/` folder deployment

**Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch from `main`
2. Make your changes with clear commit messages
3. Test your changes thoroughly
4. Submit a pull request

## Performance Metrics

- **Build Time**: ~2-3 seconds with Vite
- **HMR Update**: <100ms for code changes
- **Bundle Size**: ~150KB (gzipped)

## License

This project is part of the Marketing Content Generator and is licensed under the MIT License.

## Support

For issues, questions, or suggestions, please refer to the main project README or contact the development team.
