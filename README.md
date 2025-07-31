# birthday-event-planner-react-vite-springboot

A modern and dynamic **Birthday Event Planner** application designed to help users plan, organize, and manage birthday events. This project integrates a **React** frontend powered by **Vite** and a **Spring Boot** backend to deliver a seamless and efficient experience. It allows users to create, view, and manage birthday events with all necessary details, like invitations, guest lists, themes, and reminders.The project includes a backend API for managing events, users, and payments, and a frontend for user interaction and admin functionalities.

---

## 🛠️ **Tech Stack** 

### 🔧 **Backend Stack (Java - Spring Boot)**  
   
#### **Language & Frameworks**  
- **Java** - Core language used for backend development
- **Spring Boot** - Framework for building REST APIs
- **Spring Security** - Secures endpoints with JWT-based authentication   
- **Spring Web** - For building web controllers and handling HTTP requests  
- **Spring Data JPA** - ORM for database interaction (e.g., MySQL, PostgreSQL)

#### **Authentication & Authorization**
- **JWT (JSON Web Tokens)** - Stateless token-based authentication 
- **Custom Authentication Filter** - `JwtAuthenticationFilter.java` for token validation
- **User Roles and Permissions** - Managed through `Enum/Role.java` and `Permission.java`

#### **Database**
- **MySQL/PostgreSQL/H2** (Implied) - Database used via Spring Data JPA

#### **Project Management & Build Tool**
- **Maven** - Build tool, dependencies managed via `pom.xml` (found in `.mvn/` directory)

#### **Documentation**
- **Swagger / OpenAPI** - API documentation generated through `SwaggerConfig.java`

#### **Architecture Patterns**
- **Layered Architecture** - Organizing the project into controllers, services, repositories, and entities
- **DTO Pattern** - Data Transfer Object pattern to decouple API layer from internal models
- **Service Interface + Impl Pattern** - For better maintainability and easier testing

#### **Utilities**
- **Custom Utility Classes** - `JwtUtils.java`, `LogoutUtils.java` for handling JWT logic and logout functionality

#### **Others**
- **VSCode Settings** - Custom settings for development (found in `.vscode/`)

---

### 🎨 **Frontend Stack (React + Vite)**

#### **Framework & Tooling**
- **React** - Frontend library for building the user interface
- **Vite** - Fast build tool for frontend development
- **JSX** - Syntax extension for JavaScript to write HTML-like structures
- **CSS** - Plain CSS modules for styling individual components/pages
- **React Router** - For navigation and routing between different pages

#### **State Management**
- **Redux Toolkit** - Centralized state management for handling the user state across the app (found in `redux/store.jsx` and `redux/UserSlice.jsx`)

#### **Auth & API Integration**
- **JWT Handling** - To manage user authentication and persist login state
- **Axios/fetch API** - For making HTTP requests (likely used for communication with the backend)

#### **Error Handling & Performance**
- **ErrorBoundary.jsx** - Catches JavaScript errors in the component tree and displays fallback UI
- **LazySuspense.jsx** - For code splitting and lazy loading of components

#### **UI / Page Structure**
- **Modular Components** - Organized under `Pages/`, `Admin/`, and `User/` directories
- **Responsive Styling** - Each page/component has its own `.css` file
- **Images** - Static images like `gify.gif` stored under `Images/`

#### **Payment Integration**
- **RazorPay** - Integrated payment gateway (found in `RazorPay.jsx`)

---

## 📁 **Project-Level Configuration & Tooling**

### **Version Control**
- **Git** - Version control for managing the project with `.gitignore` to ignore unnecessary files

### **Project Configs**
- **Backend Config** - Configurations for the backend application (found in `application.properties`)
- **Frontend Config** - Vite-specific configurations for the frontend build (found in `vite.config.js`)

---

## 🛠️ **Getting Started**

### **Prerequisites**

Make sure you have the following installed:
- **Java 17+** (for the backend)
- **Maven** (for building the backend)
- **Node.js 16+** (for the frontend)
- **npm or yarn** (for managing frontend dependencies)

### **Backend Setup**

1. Clone the repository:

   ```bash
   git clone https://github.com/baladurgag24/birthday-event-planner-react-vite-springboot.git
   cd birthday-event-planner-react-vite-springboot/backend


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

## 📁 Project Structure

```
├── backend (Spring Boot, Spring Security, Java, JWT)
│   └── BIRTHDAY/
│       ├── .mvn/
│       ├── .vscode/
│       ├── src/
│       │   └── main/
│       │       ├── java/
│       │       │   └── com/
│       │       │       └── java/
│       │       │           └── birthday/
│       │       │               ├── config/
│       │       │               │   ├── ApplicationConfig.java
│       │       │               │   ├── JwtAuthenticationFilter.java
│       │       │               │   ├── SecurityConfig.java
│       │       │               │   └── SwaggerConfig.java
│       │       │               ├── controller/
│       │       │               │   ├── AddonController.java
│       │       │               │   ├── AuthenticationController.java
│       │       │               │   ├── EventController.java
│       │       │               │   ├── FeedbackController.java
│       │       │               │   ├── FoodController.java
│       │       │               │   ├── PaymentController.java
│       │       │               │   ├── ThemeController.java
│       │       │               │   └── UserController.java
│       │       │               ├── dto/
│       │       │               │   ├── request/
│       │       │               │   │   ├── ForgotPasswordRequest.java
│       │       │               │   │   ├── LoginRequest.java
│       │       │               │   │   └── RegisterRequest.java
│       │       │               │   └── response/
│       │       │               │       ├── BasicResponse.java
│       │       │               │       └── LoginResponse.java
│       │       │               ├── Enum/
│       │       │               │   ├── Permission.java
│       │       │               │   ├── Role.java
│       │       │               │   └── TokenType.java
│       │       │               ├── model/
│       │       │               │   ├── Addon.java
│       │       │               │   ├── Event.java
│       │       │               │   ├── Feedback.java
│       │       │               │   ├── Food.java
│       │       │               │   ├── Payment.java
│       │       │               │   ├── Theme.java
│       │       │               │   ├── Token.java
│       │       │               │   └── User.java
│       │       │               ├── repository/
│       │       │               │   ├── AddonRepository.java
│       │       │               │   ├── EventRepository.java
│       │       │               │   ├── FeedbackRepository.java
│       │       │               │   ├── FoodRepository.java
│       │       │               │   ├── PaymentRepository.java
│       │       │               │   ├── ThemeRepository.java
│       │       │               │   ├── TokenRepository.java
│       │       │               │   └── UserRepository.java
│       │       │               ├── service/
│       │       │               │   ├── impl/
│       │       │               │   │   └── AuthenticationServiceImpl.java
│       │       │               │   ├── AddonService.java
│       │       │               │   ├── AuthenticationService.java
│       │       │               │   ├── EventService.java
│       │       │               │   ├── FeedbackService.java
│       │       │               │   ├── FoodService.java
│       │       │               │   ├── PaymentService.java
│       │       │               │   ├── ThemeService.java
│       │       │               │   └── UserService.java
│       │       │               └── utils/
│       │       │                   ├── JwtUtils.java
│       │       │                   └── LogoutUtils.java
│       │       ├── resources/
│       │       │   ├── META-INF/
│       │       │   │   └── additional-spring-configuration-metadata.json
│       │       │   └── application.properties
│       │       └── BirthdayApplication.java
│
├── frontend (React with Vite)
│   ├── node_modules/
│   ├── src/
│   │   ├── assets/
│   │   ├── Admin/
│   │   │   ├── AdminHome.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── AdminUserDetails.jsx
│   │   │   ├── EventList.jsx
│   │   │   ├── EventView.jsx
│   │   │   └── Feedback.jsx
│   │   ├── Auth/
│   │   │   ├── Forgot.jsx
│   │   │   ├── Signin.jsx
│   │   │   └── Signup.jsx
│   │   ├── Components/
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── LazySuspense.jsx
│   │   │   └── CSS/
│   │   │       ├── AboutUs.css
│   │   │       ├── AdminHome.css
│   │   │       ├── AdminLogin.css
│   │   │       ├── ContactUs.css
│   │   │       ├── EventDisplay.css
│   │   │       ├── EventList.css
│   │   │       ├── EventRegistrationForm.css
│   │   │       ├── EventViewForm.css
│   │   │       ├── Faq.css
│   │   │       ├── FoodItems.css
│   │   │       ├── Footer.css
│   │   │       ├── Forgot.css
│   │   │       ├── Home.css
│   │   │       ├── Navbar.css
│   │   │       ├── ProfileDashboard.css
│   │   │       ├── Services.css
│   │   │       ├── Signin.css
│   │   │       ├── Signup.css
│   │   │       ├── Stats.css
│   │   │       ├── StoryPage.css
│   │   │       ├── Video.css
│   │   │       ├── WhatWeDo.css
│   │   │       └── WhyUs.css
│   │   ├── Images/
│   │   │   └── gify.gif
│   │   ├── Pages/
│   │   │   ├── AboutUs.jsx
│   │   │   ├── Contactus.jsx
│   │   │   ├── EventDisplay.jsx
│   │   │   ├── EventList.jsx
│   │   │   ├── EventRegistrationForm.jsx
│   │   │   ├── EventViewForm.jsx
│   │   │   ├── F.jsx
│   │   │   ├── Faq.jsx
│   │   │   ├── FoodItems.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Privacy.jsx
│   │   │   ├── ProfileDashboard.jsx
│   │   │   ├── RazorPay.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Terms.jsx
│   │   │   ├── WhatWeDo.jsx
│   │   │   └── WhyUs.jsx
│   │   ├── redux/
│   │   │   ├── store.jsx
│   │   │   └── UserSlice.jsx
│   │   ├── User/
│   │   │   └── UserProfile.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
```

