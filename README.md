# Capture AI Landing Page

A modern, responsive landing page for Capture AI built with Next.js 15, React 19, and TailwindCSS. This project showcases Capture AI's features and services with a sleek, professional design.

## Features

- 🚀 Built with Next.js 15 and React 19
- 💅 Styled with TailwindCSS and Bootstrap
- 📱 Fully responsive design
- ⚡ Optimized performance with Turbopack
- 🎨 Smooth animations with Framer Motion
- 🎯 Interactive UI components
- 🔄 Dynamic content sections

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** TailwindCSS, Bootstrap
- **Animation:** Framer Motion
- **UI Components:** React Bootstrap
- **Development:** ESLint, Turbopack

## Getting Started

1. **Clone the repository**

```bash
git clone [repository-url]
cd capture-ai
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

The application will start at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  ├── app/
  │   ├── _component/     # Reusable components
  │   ├── _services/     # API and services
  │   └── page.tsx       # Main landing page
  └── ...
public/                  # Static assets
```

## Development

- The project uses Turbopack for faster development experience
- TailwindCSS is configured with custom settings in `tailwind.config.js`
- TypeScript is strictly configured for type safety

## Deployment

The project is configured for deployment on various platforms:

1. **Railway**
   - Uses `railway.toml` for configuration

2. **Production Build**
   ```bash
   npm run build
   npm run start
   ```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.
