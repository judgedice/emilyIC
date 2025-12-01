# Emily DiCesaro - Portfolio Website

A modern, minimalist portfolio website showcasing UX/AI design leadership work and experience.

## Features

- Clean, responsive design with smooth scrolling navigation
- Project showcase with detailed case studies
- Interactive project detail pages
- Management strategy and philosophy section
- Career milestones timeline
- Contact section

## Tech Stack

- **React** - UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **Lucide React** - Icons
- **Shadcn/UI** - UI components

## Getting Started

This project is built with Figma Make and can be run in the Figma Make environment.

### Prerequisites

- Modern web browser
- Figma Make environment (or compatible React environment)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd <project-directory>
```

2. The project uses ESM imports for packages - no npm install required in Figma Make environment

3. Run the development server (in Figma Make or your local environment)

## Project Structure

```
/
├── App.tsx                          # Main app component with routing
├── components/
│   ├── About.tsx                    # About section
│   ├── CareerMilestones.tsx         # Career timeline
│   ├── Contact.tsx                  # Contact section
│   ├── Hero.tsx                     # Hero section
│   ├── ManagementStrategy.tsx       # Management philosophy page
│   ├── Navigation.tsx               # Main navigation
│   ├── Portfolio.tsx                # Portfolio showcase
│   ├── ProjectDetail.tsx            # Individual project pages
│   ├── Projects.tsx                 # Projects data and logic
│   ├── Superpowers.tsx              # Skills/expertise section
│   └── ui/                          # Shadcn UI components
├── styles/
│   └── globals.css                  # Global styles and Tailwind config
└── README.md
```

## Key Components

- **Navigation**: Smooth scrolling navigation with active section tracking
- **Hero**: Landing section with introduction
- **Portfolio**: Grid of featured projects
- **ProjectDetail**: Detailed case studies with testimonials sidebar
- **CareerMilestones**: Interactive timeline of career highlights
- **ManagementStrategy**: Leadership philosophy and approach

## Design Philosophy

The website follows a clean, minimalist design aesthetic inspired by modern portfolio standards:
- Sophisticated typography system
- Clean spacing and professional presentation
- Subtle animations and interactions
- Responsive design for all devices
- Accessible and user-friendly navigation

## Deployment

This project uses HashRouter for GitHub Pages compatibility. To deploy:

1. Build the project for production
2. Deploy the build folder to your hosting service (GitHub Pages, Netlify, Vercel, etc.)

For GitHub Pages:
```bash
# The HashRouter configuration allows deployment to GitHub Pages without additional configuration
```

## License

© 2024 Emily DiCesaro. All rights reserved.

## Contact

For inquiries, please use the contact form on the website or reach out via email.
