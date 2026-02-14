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

This project is configured to deploy to **GitHub Pages** using the `gh-pages` package.

### Automatic Deployment (Recommended)
Simply run:
```bash
npm run deploy
```
This command will:
1. Run `predeploy` (which triggers `npm run build`) to create an optimized production bundle in the `dist/` folder.
2. Push the contents of the `dist/` folder to the `gh-pages` branch on GitHub.

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

