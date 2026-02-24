# Marketing Content Generator

A full-stack application that leverages AI to automatically generate creative and engaging marketing content. This platform combines a modern React frontend with a powerful FastAPI backend integrated with Google's Generative AI.

## Features

- **User Authentication**: Secure user registration and login with JWT tokens
- **AI-Powered Content Generation**: Generate marketing content using Google Generative AI
- **Prompt Engineering**: Customizable prompts for different content types
- **User Database**: SQLAlchemy-based database for user management
- **RESTful API**: Well-documented API endpoints for content generation
- **Responsive UI**: Modern React frontend with Vite for fast development
- **CORS Support**: Cross-origin resource sharing enabled for development

## Tech Stack

### Backend
- **Framework**: FastAPI
- **Database**: SQLAlchemy with SQLite
- **Authentication**: JWT (JSON Web Tokens)
- **AI Integration**: Google Generative AI
- **Server**: Uvicorn
- **Additional Tools**: 
  - ChromaDB for embeddings
  - Hugging Face integration
  - oauthlib for authentication

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Markdown Rendering**: React Markdown
- **Linting**: ESLint

## Project Structure

```
marketing-content-generator/
├── backend/
│   ├── app/
│   │   ├── models/
│   │   │   ├── schemas.py       # Pydantic schemas
│   │   │   └── user.py          # User database models
│   │   ├── routes/
│   │   │   ├── auth.py          # Authentication endpoints
│   │   │   └── generate.py      # Content generation endpoints
│   │   ├── services/
│   │   │   ├── llm_service.py   # LLM integration
│   │   │   └── prompt_engineering.py  # Prompt management
│   │   ├── database.py          # Database configuration
│   │   └── main.py              # FastAPI app setup
│   └── requirements.txt         # Python dependencies
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Login.jsx         # Login page
    │   │   └── Signup.jsx        # Registration page
    │   ├── services/
    │   │   └── api.js            # API integration
    │   ├── styles/
    │   │   ├── auth.css          # Authentication styles
    │   │   └── home.css          # Home page styles
    │   ├── App.jsx               # Main app component
    │   ├── Home.jsx              # Home page component
    │   └── main.jsx              # Entry point
    ├── public/                   # Static assets
    ├── package.json              # Node dependencies
    ├── vite.config.js            # Vite configuration
    └── eslint.config.js          # ESLint configuration
```

## Getting Started

### Prerequisites

- Python 3.8+ (for backend)
- Node.js 16+ and npm (for frontend)
- Git

### Backend Setup

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Create a virtual environment** (recommended):
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

5. **Set up environment variables**:
   Create a `.env` file in the backend directory:
   ```
   GOOGLE_API_KEY=your_google_api_key
   DATABASE_URL=sqlite:///./marketing.db
   SECRET_KEY=your_secret_key_here
   ALGORITHM=HS256
   ACCESS_TOKEN_EXPIRE_MINUTES=30
   ```

6. **Run the backend server**:
   ```bash
   uvicorn app.main:app --reload
   ```
   The API will be available at `http://localhost:8000`

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the frontend directory:
   ```
   VITE_API_URL=http://localhost:8000
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## API Endpoints

### Authentication Routes (`/auth`)

- **POST** `/auth/signup` - Register a new user
  - Body: `{ "email": "user@example.com", "password": "password123" }`
  - Returns: User details and access token

- **POST** `/auth/login` - Login user
  - Body: `{ "email": "user@example.com", "password": "password123" }`
  - Returns: Access token

- **POST** `/auth/logout` - Logout user
  - Returns: Success message

### Content Generation Routes

- **POST** `/generate` - Generate marketing content
  - Headers: `Authorization: Bearer {token}`
  - Body: `{ "prompt": "Generate a catchy social media post about...", "content_type": "social_media" }`
  - Returns: Generated content

## Configuration

### Backend Configuration

Configuration is managed through environment variables:
- `GOOGLE_API_KEY`: Your Google Generative AI API key
- `DATABASE_URL`: Database connection string
- `SECRET_KEY`: Secret key for JWT tokens
- `ALGORITHM`: JWT algorithm (HS256)
- `ACCESS_TOKEN_EXPIRE_MINUTES`: Token expiration time in minutes

### Frontend Configuration

Configure API endpoints in `.env`:
- `VITE_API_URL`: Backend API base URL

## Running in Production

### Backend Production Build

```bash
gunicorn -w 4 -b 0.0.0.0:8000 app.main:app
```

### Frontend Production Build

```bash
npm run build
```

This creates an optimized build in the `dist` folder that can be served by any static file server.

## Available Scripts

### Backend
- `uvicorn app.main:app --reload` - Run development server with auto-reload
- `python -m pytest` - Run tests (if configured)

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Troubleshooting

### Backend Issues

- **ModuleNotFoundError**: Ensure virtual environment is activated and all dependencies are installed
- **Database Errors**: Delete the SQLite database file and let it recreate on the next run
- **CORS Errors**: Check that the frontend URL is allowed in CORS configuration

### Frontend Issues

- **API Connection Errors**: Verify the `VITE_API_URL` in `.env` matches the backend URL
- **Build Errors**: Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## Security Notes

⚠️ **Development**: The current CORS configuration allows all origins (`*`) for development. This must be restricted in production.

**Security Improvements for Production**:
1. Update CORS to only allow specific frontend domain
2. Use HTTPS for all connections
3. Implement rate limiting
4. Use strong secret keys and store securely
5. Implement proper error handling to avoid exposing sensitive information
6. Use environment variables for all configuration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Workflow

1. Create a new branch for your feature
2. Make your changes with clear commit messages
3. Test thoroughly before submitting a PR
4. Ensure code follows project style guidelines

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@marketingcontentgenerator.com or open an issue on the repository.

## Roadmap

- [ ] Multi-language content generation
- [ ] Content scheduling and publishing
- [ ] Analytics and performance tracking
- [ ] Team collaboration features
- [ ] Advanced prompt templates
- [ ] API rate limiting
- [ ] User billing and subscription plans
- [ ] Mobile app integration

## Authors

- Development Team

## Acknowledgments

- Google Generative AI for AI capabilities
- FastAPI for the robust backend framework
- React and Vite for the modern frontend stack
