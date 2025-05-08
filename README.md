# birthday-event-planner-react-vite-springboot

A modern and dynamic **Birthday Event Planner** application designed to help users plan, organize, and manage birthday events. This project integrates a **React** frontend powered by **Vite** and a **Spring Boot** backend to deliver a seamless and efficient experience. It allows users to create, view, and manage birthday events with all necessary details, like invitations, guest lists, themes, and reminders.

## Technologies Used

- **Frontend**: 
  - React (with **Vite** as the build tool for fast development)
- **Backend**: 
  - Spring Boot (RESTful API)
- **Database**: 
  - H2 (in-memory for development, can be replaced with any SQL-based DB)
- **Authentication**: 
  - JWT (JSON Web Tokens) for secure user login
- **Styling**: 
  - Tailwind CSS or Material-UI for UI components
- **State Management**: 
  - React Context or Redux (if needed)
- **API Communication**: 
  - Axios for HTTP requests

## Features

- **Create and Manage Birthday Events**: 
  - Users can create events with details such as **date**, **time**, **venue**, and **theme**.
  
- **Guest List**: 
  - Users can add, edit, and remove guests for their birthday events.
  
- **Event Reminders**: 
  - Get notifications about upcoming events and deadlines.
  
- **Event Invitations**: 
  - Send invitations to guests via **email** or other communication methods (integration with email services possible).
  
- **User Authentication**: 
  - Login and registration functionality with **JWT-based authentication** for secure access.
  
- **Responsive Design**: 
  - Mobile-friendly UI optimized for **all screen sizes**.

## Project Structure

```plaintext
├── backend (Spring Boot)
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── example
│   │   │   │           └── eventplanner
│   │   │   │               ├── controller
│   │   │   │               ├── model
│   │   │   │               ├── repository
│   │   │   │               ├── service
│   │   │   │               ├── security
│   │   │   │               └── exception
│   │   │   └── resources
│   │   │       ├── application.properties
│   │   │       └── data.sql (optional for seeding DB)
├── frontend (React with Vite)
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── EventForm.js
│   │   │   ├── GuestList.js
│   │   │   ├── EventCard.js
│   │   │   └── Navbar.js
│   │   ├── pages
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── EventDetails.js
│   │   ├── services
│   │   │   └── apiService.js
│   │   ├── App.js
│   │   └── main.js
│   └── vite.config.js
├── .gitignore
├── README.md
└── package.json (frontend)
