# Centro Social de Ermesinde Web Application

It is a web-based platform designed to provide information and resources related to the Centro Social de Ermesinde. The application aims to enhance the qualification levels of adults and youth, offering various educational programs and support services. It serves as a hub for users to learn about available courses, contact information, and project initiatives.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User-Friendly Interface**: The application provides an intuitive and responsive design, ensuring a seamless user experience across devices.
- **Information Sections**: Detailed sections on objectives, target audiences, contact information, and available courses.
- **Video Resources**: Embedded videos to provide additional information and insights into the programs offered.
- **Contact Form**: A contact section that allows users to send inquiries directly through the application.
- **Dynamic Content**: The application fetches data from a centralized features file, making it easy to update and manage content.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework that provides pre-designed components for faster development.
- **Firebase**: Used for authentication and database services.
- **Leaflet**: A JavaScript library for interactive maps.
- **EmailJS**: A service to send emails directly from the client-side application.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/centro-qualifica.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd centro-qualifica
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up Firebase**:
   - Create a Firebase project and configure authentication and Firestore.
   - Replace the Firebase configuration in `src/data/firebase/FirebaseConfig.js` with your project's credentials.

5. **Run the application**:
   ```bash
   npm start
   ```

6. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Usage

Once the application is running, users can:

- Navigate through different sections to learn about the Centro Qualifica programs.
- Watch embedded videos for more information.
- Use the contact form to send inquiries or feedback.
- Access project information and resources related to co-financed initiatives.

## Folder Structure

The project is organized as follows:

```
centro-qualifica/
├── src/
│   ├── assets/                # Static assets like images and animations
│   ├── components/            # Reusable components
│   ├── data/                  # Data fetching and configuration files
│   ├── domain/                # Domain models
│   ├── presentation/          # UI components and pages
│   ├── theme/                 # Theme configuration
│   ├── App.tsx                # Main application component
│   └── index.tsx              # Entry point of the application
├── public/                    # Public assets
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation
```

## Contributing

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
