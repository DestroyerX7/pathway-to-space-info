# Pathway To Space Info

An educational web application dedicated to making the history and science of space exploration accessible to everyone — from curious beginners to lifelong enthusiasts.

## About

Pathway To Space Info covers the full arc of human spaceflight and astronomical discovery, including:

- The **Apollo program** and humanity's first steps on the Moon
- The **Artemis program** and the return to lunar exploration
- The **Space Shuttle** era and its legacy
- Life and research aboard the **International Space Station**
- Our **Solar System** and the wider **Universe**

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework with App Router
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) — Component library

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /about          # About page
  /learn          # Topic index page
    /apollo       # Apollo program
    /artemis      # Artemis program
    /space-shuttle
    /iss          # International Space Station
    /solar-system
    /universe
/components
  Header.tsx      # Site-wide navigation
/public           # Static images and assets
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Run production build     |
| `npm run lint`  | Lint the codebase        |
