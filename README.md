# Eternal Loop Web App

## Overview
Eternal Loop is a web application designed to provide a cycle of connection and calm through mood-based matching and anonymous communication. The application leverages Next.js for server-side rendering, Tailwind CSS for styling, and Firebase for authentication and data storage.

## Features
- **Mood-Based Matching**: Connect with users based on shared moods.
- **Anonymous Voice & Text**: Engage in conversations without revealing personal information.
- **Digital Sanctuary**: A safe space for users to explore their emotions and find peace.

## Getting Started

### Prerequisites
- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd eternal-loop
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
1. Set up Firebase:
   - Create a Firebase project in the Firebase console.
   - Add your Firebase configuration to `lib/firebase.js`.

### Running the Application
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

## Folder Structure
- **components/**: Contains reusable React components.
- **lib/**: Contains Firebase initialization and configuration.
- **pages/**: Contains the application's pages, each corresponding to a route.
- **public/**: Contains static assets like images.
- **styles/**: Contains global styles and Tailwind CSS directives.
- **tailwind.config.js**: Configuration for Tailwind CSS.
- **postcss.config.js**: Configuration for PostCSS.
- **package.json**: Project metadata and dependencies.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.