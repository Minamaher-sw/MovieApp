<div align="center">

# 🎬 Movie App

### A Modern Netflix-Style Movie Streaming Platform

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-Latest-764ABC?style=flat-square&logo=redux)](https://redux-toolkit.js.org)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap)](https://getbootstrap.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Deployed](https://img.shields.io/badge/Deployed-Vercel-000?style=flat-square&logo=vercel)](https://movie-app-pied-xi.vercel.app)

*Fast • Responsive • Feature-Rich • Production-Ready*

---

</div>

## 🚀 Quick Links

| 🌐 Live Demo | 📚 Backend API | 📖 GitHub |
|---|---|---|
| [View App](https://movie-app-pied-xi.vercel.app/) | [Swagger Docs](https://movie-app-production-22b0.up.railway.app/api/v1/swagger) | [Repository](https://github.com/yourusername/movie-app) |

---

## ✨ Features

<details open>
<summary><b>🔐 Authentication & Security</b></summary>

- User registration & login
- JWT token-based authentication
- Protected routes with guards
- Session management

</details>

<details open>
<summary><b>🎥 Movie Content</b></summary>

- Trending movies feed
- Hero section showcase
- Advanced search functionality
- Movie details & metadata
- Category browsing

</details>

<details open>
<summary><b>⭐ User Experience</b></summary>

- Add/Remove favorites
- Dark & light theme toggle
- Multi-language support (i18n)
- User profile management
- Fully responsive UI

</details>

<details open>
<summary><b>⚡ Technical Excellence</b></summary>

- Real-time data fetching via Axios
- Redux Toolkit state management
- SweetAlert2 notifications
- Clean component architecture
- ESLint code quality

</details>

---

## 🛠️ Tech Stack

### Frontend Technologies

| Category | Technologies |
|----------|---|
| **Framework** | React 19, Vite |
| **State Management** | Redux Toolkit, Context API |
| **Styling** | Bootstrap 5, React-Bootstrap |
| **HTTP Client** | Axios + Interceptors |
| **Routing** | React Router DOM v6 |
| **Notifications** | SweetAlert2 |
| **Icons** | React Icons |
| **Utilities** | Lodash, ES2023+ |

### Development Tools

```
├── ESLint (Code Quality)
├── Babel / SWC (Transpilation)
├── HMR (Hot Module Replacement)
└── Modern JavaScript (ES2023+)
```

---

## 📁 Project Structure

```
src/
├── assets/                    # Images, fonts, static files
│
├── Components/                # React Components
│   ├── alert/                # Alert system
│   ├── favorite/             # Favorites module
│   ├── Guards/               # Route guards
│   ├── Home/                 # Homepage
│   ├── login/                # Login page
│   ├── movies/               # Movie list & details
│   ├── navBar/               # Navigation
│   ├── profile/              # User profile
│   ├── register/             # Registration
│   └── notfound/             # 404 page
│
├── context/                  # Global Context
│   ├── auth.js              # Authentication context
│   ├── lang.js              # Language/i18n context
│   └── them.js              # Theme context
│
├── instant/
│   └── instance.js          # Axios instance config
│
├── store/                    # Redux Store
│   ├── slices/
│   │   ├── favorite.js
│   │   └── product.js
│   └── store.js
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🔌 API Integration

### Base URL
```
https://movie-app-production-22b0.up.railway.app/api/v1
```

### Endpoints Overview

<details>
<summary><b>🔐 Authentication</b></summary>

| Method | Endpoint | Description |
|--------|----------|---|
| `POST` | `/auth/register` | Create new account |
| `POST` | `/auth/login` | User login |
| `GET` | `/auth/me` | Get current user |

</details>

<details>
<summary><b>🎬 Movies</b></summary>

| Method | Endpoint | Description |
|--------|----------|---|
| `GET` | `/movies` | List all movies |
| `GET` | `/movies/:id` | Movie details |
| `GET` | `/movies/trending` | Trending movies |

</details>

<details>
<summary><b>⭐ Favorites</b></summary>

| Method | Endpoint | Description |
|--------|----------|---|
| `GET` | `/favorites` | User's favorites |
| `POST` | `/favorites` | Add to favorites |
| `DELETE` | `/favorites/:id` | Remove favorite |

</details>

---

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Step-by-Step Setup

```bash
# 1️⃣ Clone repository
git clone https://github.com/yourusername/movie-app.git
cd movie-app

# 2️⃣ Install dependencies
npm install

# 3️⃣ Create environment file
touch .env
```

### Environment Configuration

```env
VITE_API_URL=https://movie-app-production-22b0.up.railway.app
VITE_APP_NAME=MovieApp
```

### Run Locally

```bash
# Development server
npm run dev

# Vite runs at: http://localhost:5173
```

---

## 🖥️ Usage Guide

1. **Browse Movies** → Visit homepage to see trending content
2. **Search** → Use search bar to find specific titles
3. **Add Favorites** → Click heart icon to save movies
4. **Theme Toggle** → Switch between dark/light mode
5. **User Profile** → Manage account settings
6. **Multi-Language** → Select preferred language

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Build production bundle
npm run build

# Output: dist/
```

Then connect your GitHub repo to Vercel dashboard.

### Netlify

```bash
npm run build
# Deploy the dist/ folder
```

### Render (Static Hosting)

- **Build command:** `npm run build`
- **Publish folder:** `dist/`

---

## 🧩 Architecture

### State Management Flow

```
┌─────────────────────────────────────┐
│      Redux Store (Server Data)      │
├─────────────────────────────────────┤
│ • favoriteSlice.js (Favorites)      │
│ • productSlice.js (Movies)          │
│ • Async thunks for API calls        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│     Context API (Global UI)         │
├─────────────────────────────────────┤
│ • auth.js (Authentication)          │
│ • lang.js (Internationalization)    │
│ • them.js (Theme Toggling)          │
└─────────────────────────────────────┘
```

### Pages & Routes

| Route | Component | Description |
|-------|-----------|---|
| `/` | Home | Landing page |
| `/movies` | MovieList | All movies |
| `/movies/:id` | MovieDetails | Movie info |
| `/login` | Login | Authentication |
| `/register` | Register | Sign up |
| `/profile` | UserProfile | Account settings |
| `/favorite` | Favorites | Saved movies |
| `*` | NotFound | 404 page |

---

## 📐 Best Practices

✅ Functional components with React Hooks  
✅ Centralized Axios instance with interceptors  
✅ DRY (Don't Repeat Yourself) principles  
✅ ESLint enforced code quality  
✅ Organized folder structure  
✅ Context API for UI state  
✅ Redux Toolkit for server data  
✅ Clean separation of concerns  

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

```bash
# 1. Fork the repository
git clone https://github.com/yourusername/movie-app.git

# 2. Create feature branch
git checkout -b feature/AmazingFeature

# 3. Commit changes
git commit -m "Add AmazingFeature"

# 4. Push to branch
git push origin feature/AmazingFeature

# 5. Open Pull Request
```

---

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

### Your Name

📧 **Email:** your-email@example.com

[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github)](https://github.com/yourusername)
[![Portfolio](https://img.shields.io/badge/Portfolio-0A66C2?style=for-the-badge&logo=web)](your-portfolio-link)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin)](your-linkedin-link)

---

<p>
  <strong>Made with ❤️ by Your Name</strong><br>
  <sub>Feel free to ⭐ star this repository if you found it helpful!</sub>
</p>

</div>