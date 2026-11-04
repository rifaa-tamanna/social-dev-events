# 🌍 Social Development Events

A full-stack web application that connects people with meaningful community events and social development activities. Users can explore events, join volunteer activities, manage their participation, and contribute to positive social change.

## 🔗 Live Demo

- **Live Website:** https://social-dev-events.vercel.app
- **Frontend Repository:** https://github.com/rifaa-tamanna/social-dev-events
- **Backend Repository:** https://github.com/rifaa-tamanna/social-dev-events-server

---

## ✨ Key Features

### 👤 Authentication & Security

- User authentication with Better Auth.
- Google OAuth integration for easy signup and login.
- Protected user-specific features.
- JWT verification on the backend to validate authenticated requests.
- Secure authentication and authorization flow.

### 📅 Event Management

- Browse upcoming community events.
- View event details, dates, locations, and descriptions.
- Create and publish new events.
- Manage personal events.
- Edit and delete events.
- View event categories and information.

### 🤝 Event Participation

- Join available events.
- View all joined events.
- Leave previously joined events.
- Track participation through a personal dashboard.

### 🎨 User Experience

- Responsive design for mobile, tablet, and desktop.
- Light and dark theme support.
- Interactive UI components.
- Loading skeletons and user-friendly empty states.
- Toast notifications for success and error feedback.
- Custom 404 Not Found page.

---

## 🛠️ Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- Better Auth Client
- React Toastify
- next-themes

### Backend

- Node.js
- Express.js
- MongoDB
- VerificationJWT&#x20;

### Authentication

- Better Auth
- Google OAuth 2.0
- JWT Verification

### Deployment

- Vercel (Frontend)
  https://vercel.com

---

## 🔐 Authentication & Security

This application uses Better Auth for user authentication and Google OAuth for social login.

The backend verifies JWT tokens to validate authenticated requests before allowing access to protected resources.

Security features include:

- Google OAuth authentication.
- Protected API endpoints.
- JWT token verification on the backend.
- User-specific event management.
- Authentication-based access control.

---

## 📂 Project Structure

### Frontend

```text
frontend/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   │   ├── ui/
│   │   └── skeletons/
│   ├── lib/
│   ├── hooks/
│   └── types/
├── .env.local
├── package.json
└── README.md
```

### Backend

```text
backend/
├── routes/
├── middleware/
├── config/
├── controllers/
├── index.js
├── .env
└── package.json
```

*Adjust the folder names above to match your actual project structure.*

---

**Important:** Never commit `.env` or `.env.local` files to GitHub. Keep all secret keys and credentials private.

Use the exact environment variable names configured in your application.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB account or local MongoDB
- Google Cloud OAuth credentials

### 1. Clone the Frontend Repository

```bash
git clone https://github.com/rifaa-tamanna/social-dev-events
```

```bash
cd frontend
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file and add your frontend environment variables.

### 4. Start the Frontend

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:3000
```

### 5. Clone the Backend Repository

```bash
git clone https://github.com/rifaa-tamanna/social-dev-events-server
```

```bash
cd backend
```

### 6. Install Backend Dependencies

```bash
npm install
```

### 7. Configure Backend Environment Variables

Create a `.env` file and configure MongoDB, JWT, and frontend URL settings.

### 8. Start the Backend

```bash
npm run dev
```

*Use the start command defined in your backend `package.json`.*

---

## 🌐 Deployment

The frontend is deployed on Vercel.

For production deployment:

1. Push the latest code to GitHub.
2. Connect the repository to Vercel.
3. Configure the required environment variables.
4. Set the correct production URL in Better Auth.
5. Add the production Google OAuth origin and redirect URI in Google Cloud Console.
6. Deploy the application.
7. Verify Google authentication and protected API endpoints.

---

## 🔒 Google OAuth Configuration

For local development:

**Authorized JavaScript Origin**

```text
http://localhost:3000
```

**Authorized Redirect URI**

```text
https://social-dev-events.vercel.app/api/auth/callback/google
```

For production, add your actual Vercel domain and its corresponding Better Auth callback URL.

---

## 🎯 Project Goals

The goal of Social Development Events is to make community participation easier by connecting people with meaningful social initiatives.

It provides a platform where organizers can manage events and users can discover opportunities to contribute to their communities.

---

## 👩‍💻 Developer

**Rifa Tamanna**

Full Stack Web Developer

- GitHub: https://github.com/rifaa-tamanna

---

⭐ If you find this project useful, feel free to explore the repository and share your feedback.

**Built with ❤️ to encourage community engagement and social impact.**

