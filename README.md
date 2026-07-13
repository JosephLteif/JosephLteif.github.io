# Joseph Lteif - Personal Portfolio

A modern, responsive portfolio website built with React and Vite. This site showcases my projects, professional experience, skills, and volunteering work.

## 🚀 Live Demo
Check out the live version here: [https://JosephLteif.github.io](https://JosephLteif.github.io)

## 🛠️ Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Modern CSS variables, Flexbox, Grid)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📂 Project Structure
- `src/components/`: Modular React components (Hero, Skills, Projects, Experience, Volunteering, Terminal).
- `src/App.jsx`: Main application layout.
- `src/index.css`: Global styles and design tokens (colors, gradients, typography).

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JosephLteif/JosephLteif.github.io.git
   cd JosephLteif.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🚢 Deployment

This project deploys to **GitHub Pages** through GitHub Actions.

### Automatic Deployment (Recommended)
Every push to `main` builds and deploys the portfolio automatically.

### Manual Deployment
Open the **Deploy portfolio to GitHub Pages** workflow in GitHub Actions, select **Run workflow**, and choose either `main` or `dev` as the source branch.

### Manual Build
If you just want to build the project without deploying:
```bash
npm run build
```

## 🎨 Customization
- **Colors**: Update color tokens in `src/index.css` under the `:root` selector.
- **Content**: Update information in the respective component files within `src/components/`.

---
© 2026 Joseph Lteif. Built with ❤️ and React.

