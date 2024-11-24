E-commerce Website

This is a modern, scalable e-commerce application built with React, TypeScript, and Vite. It leverages several popular libraries and frameworks for an optimized, user-friendly experience.

Features

	•	React for a dynamic, component-based UI
	•	Ant Design for a sleek, responsive design system
	•	Firebase for authentication and database integration
	•	Axios for API calls
	•	Lottie for animated, interactive elements
	•	Notistack for customizable notifications
	•	React Router DOM for navigation
	•	Swiper for interactive sliders and carousels
	•	Zustand for state management
	•	Sass for advanced styling capabilities

Prerequisites

Before running this project, ensure you have the following installed:
	•	Node.js (>= 16.x)
	•	npm (or yarn)

Getting Started

	1.	Clone the repository:

git clone <repository-url>
cd ecommerce_splitted


	2.	Install dependencies:

npm install


	3.	Start the development server:

npm run dev

The app will be available at http://localhost:5173.

	4.	Build for production:

npm run build


	5.	Preview the production build:

npm run preview



Project Structure

├── src/
│   ├── components/        # Reusable components
│   ├── pages/             # Page components
│   ├── routes/            # Application routes
│   ├── services/          # API calls and utilities
│   ├── state/             # Zustand store configurations
│   ├── styles/            # Global and modular styles (Sass)
│   └── App.tsx            # Main application file
├── public/                # Static assets
├── package.json           # Project dependencies and scripts
└── vite.config.ts         # Vite configuration

Scripts

	•	npm run dev: Start the development server.
	•	npm run build: Build the app for production.
	•	npm run preview: Preview the production build.
	•	npm run lint: Run linting checks.

Key Dependencies

Runtime

	•	React: A JavaScript library for building user interfaces.
	•	Ant Design: A design system for enterprise-level products.
	•	Axios: HTTP client for making API requests.
	•	Firebase: Backend-as-a-Service for authentication and real-time database.
	•	Swiper: Modern touch slider.
	•	Zustand: Simplified state management.

Development

	•	Vite: Fast build tool and development server.
	•	TypeScript: JavaScript with static types.
	•	ESLint: Linter for finding and fixing problems in JavaScript/TypeScript code.

Deployment

	1.	Build the project for production:

npm run build


	2.	Serve the dist/ folder with a static file server, or deploy to a hosting service like Firebase Hosting, Vercel, or Netlify.

Contribution

	1.	Fork the repository.
	2.	Create a feature branch:

git checkout -b feature/your-feature


	3.	Commit your changes:

git commit -m "Add your message here"


	4.	Push to the branch:

git push origin feature/your-feature


	5.	Open a pull request.

License

This project is licensed under the MIT License.

Feel free to contribute and enhance the e-commerce platform. Happy coding!
