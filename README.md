# BrewBuddy

**BrewBuddy** is a web application that allows users to explore coffee shops, submit reviews, and manage recipes. It includes user authentication and features for tracking favorite coffee spots, submitting reviews, and sharing recipes.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)

## Features

- **Coffee Shop Locator:** Find nearby coffee shops and explore their details.
- **User Authentication:** Secure login and registration system.
- **Recipe Management:** Create, edit, and delete coffee-related recipes.
- **Review System:** Submit and manage reviews for coffee shops.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Installation

To get started with BrewBuddy, follow these steps:

1. **Clone the repository:**
   git clone https://github.com/yourusername/BrewBuddy.git

2. **Navigate to the project directory:**
  cd BrewBuddy
  
3. **Install the dependencies:**
  npm install
   
4. **Start the development server:**
  npm run start

## Usage
After completing the installation steps, you can access the application in your browser at http://localhost:3000.

Home Page: Explore coffee shops and see a list of nearby places.
Login/Register: Access your account or create a new one.
Submit Reviews: Share your experience at different coffee shops.
Manage Recipes: Create, edit, and delete coffee-related recipes.

## File Structure
```plaintext
BrewBuddy/
│
├── public/
│   ├── index.html               # Home page
│   ├── login.html               # Login page
│   ├── register.html            # Registration page
│   ├── recipes.html             # Recipes management
│   ├── submit-review.html       # Review submission form
│   ├── tracker.html             # Coffee shop tracker
│   ├── includes/navbar.html     # Common navigation bar
│   ├── scripts/
│   │   ├── coffee-shop.js       # Coffee shop logic
│   │   ├── index.js             # Home page logic
│   │   ├── login.js             # Login logic
│   │   ├── navbar.js            # Navbar interactions
│   │   ├── recipes.js           # Recipe management logic
│   │   ├── register.js          # Registration logic
│   │   ├── submit-review.js     # Review submission logic
│   │   └── tracker.js           # Tracker page logic
│   └── styles/
│       ├── output.css           # Compiled CSS
│       ├── tailwind.css         # Tailwind CSS
│
├── server/
│   └── server.js                # Backend server
│
├── postcss.config.js            # PostCSS configuration
└── tailwind.config.js           # Tailwind CSS configuration

```

## Technologies Used

Frontend:
HTML, CSS (Tailwind)
JavaScript

Backend:
Node.js

Additional Libraries:
Tailwind CSS for styling
PostCSS for processing CSS
