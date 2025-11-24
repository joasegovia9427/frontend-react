# Joaquin's REPO for Front-end - React

A clean and modern React startup project with Vite, React Router, and Tailwind CSS.

## This project uses the following techs:

-   **React 18** - UI library
-   **TypeScript** - Type-safe JavaScript
-   **Vite** - Fast build tool and dev server
-   **React Router DOM** - Client-side routing
-   **Tailwind CSS v4** - Utility-first CSS framework
-   **ESLint** - Code linting and quality
-   **Prettier** - Code formatting
-   **pnpm** - Fast, disk space efficient package manager

## Prerequisites

-   Node.js v22.13.1 (use `nvm use` to switch to the correct version)
-   pnpm (install with `npm install -g pnpm`)

## Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:joasegovia9427/frontend-react.git
cd frontend-react
```

### 2. Use the correct Node version

```bash
nvm use
```

### 3. Install dependencies

```bash
pnpm install
```

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Check Code:

# Type check
```bash
pnpm type-check
```

# Lint
```bash
pnpm lint
```

# Format
```bash
pnpm format
```

# Run dev server
```bash
pnpm dev
```


## Available Scripts

-   `pnpm dev` - Start development server
-   `pnpm build` - Build for production
-   `pnpm preview` - Preview production build locally
-   `pnpm type-check` - Run TypeScript type checking
-   `pnpm lint` - Run ESLint
-   `pnpm lint:fix` - Run ESLint and auto-fix issues
-   `pnpm format` - Format code with Prettier
-   `pnpm format:check` - Check code formatting with Prettier

## Project Structure

```
frontend-react/
├── public/          # Static assets
├── src/
│   ├── App.tsx      # Main App component with routes
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles with Tailwind directives
├── index.html       # HTML template
├── .nvmrc           # Node version specification
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Adding New Routes

Edit `src/App.tsx`:

```jsx
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/your-new-route" element={<YourComponent />} />
</Routes>
```

### Tailwind Configuration

As a Tailwind v4 don't allows `tailwind.config.js`, the customize Tailwind is in the `src/index.css` file in order to add your theme colors, fonts, etc.

## Building for Production

```bash
pnpm build
```

The build output will be in the `dist/` directory.

## License

MIT

Proudly created by @joasegovia9427
