


# BlogVerse

BlogVerse is a full-stack blog application that allows users to share and discover articles. It includes user authentication, blog creation, and a responsive design with both light and dark mode support.

## Project Overview



### Features

- User authentication with JWT
- Blog creation and publishing
- Light and dark theme support
- Responsive design
- Serverless API with Hono.js and Cloudflare Workers
- Custom Node.js package for type verification
- Database interactions with Prisma

## Tech Stack

### Backend
- Node.js
- Hono.js for API routing
- Cloudflare Workers for serverless deployment
- Prisma ORM for database interactions
- JWT for authentication

### Frontend
- React.js
- Vite as the build tool
- Tailwind CSS for styling
- Axios for API requests
- React Router for navigation

### Common
- TypeScript for type checking
- Custom Node.js with zod package for shared utilities and types

### Database
- PostgreSQL 

### Deployment
- Cloudflare Workers for backend deployment
- Vercel for frontend deployment

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Cloudflare account](https://dash.cloudflare.com/sign-up) for Workers deployment
- [Docker](https://www.docker.com/) (optional, for running the database locally)

### Backend

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the backend folder and add your environment variables. For example:
   ```
   DATABASE_URL="your-database-url"
   JWT_SECRET="your-secret-key"
   ```

4. **Run database migrations:**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server:**
   Use Wrangler to start the Cloudflare Worker locally:
   ```bash
   npm run dev
   ```

6. **Deploy to Cloudflare Workers:**
   Configure your `wrangler.toml` with your Cloudflare account details and run:
   ```bash
   npm run deploy
   ```

### Common

1. **Navigate to the common folder:**
   ```bash
   cd common
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the package:**
   ```bash
   npm run build
   ```

### Frontend

1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the frontend folder if needed.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Deploy to Vercel:**
   Use Vercel CLI or connect your GitHub repository to Vercel for automatic deployments.

## Usage

Once everything is set up, you can access the application in your browser. Users can sign up, sign in, create,  and view blogs. The landing page provides an overview of the app with options to switch themes between light and dark mode.

## Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Submit a pull request with a description of your changes.

## License
This project is licensed under the MIT License.

## Contact

If you have any questions or feedback, please contact us at gvvishal95@gmail.com.


