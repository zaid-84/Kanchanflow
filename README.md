
# KanchanFlow

An industrial-modern manufacturing CRM frontend concept built with Next.js, TypeScript, and CSS Modules.

## Features

- Responsive homepage with hero, product preview, features, industries, and pricing teaser
- Dedicated Features page with product previews and a comparison table
- Pricing page with monthly and annual billing toggle
- Expandable pricing FAQs
- Responsive navigation and shared footer
- Accessible navigation controls and visible keyboard focus styles
- SEO metadata using the Next.js App Router

## Tech Stack

- Next.js
- React
- TypeScript
- CSS Modules
- Lucide React icons
- Next.js font optimization

## Getting Started

### Prerequisites

Install a supported version of Node.js and npm.

### Installation

Clone the repository:

    git clone https://github.com/zaid-84/Kanchanflow.git

Navigate to the project directory:

    cd Kanchanflow

Install dependencies:

    npm install

Start the development server:

    npm run dev

Open http://localhost:3000 in your browser.

### Production Build

    npm run build
    npm start

## Design System

The interface follows an industrial-modern visual direction.

- Background: #17191C
- Surface: #22252A
- Light surface: #2B2E33
- Primary text: #F5F3EE
- Muted text: #A7ABB2
- Accent: #D5A642
- Borders: #3A3D42

Typography uses Inter.

## Project Structure

    src/
      app/
        page.tsx
        page.module.css
        features/
          page.tsx
          features.module.css
        pricing/
          page.tsx
          pricing.module.css
        layout.tsx
        globals.css
      components/
        navbar.tsx
        navbar.module.css
        footer.tsx
        footer.module.css

## Assumptions

- This submission is a frontend-only concept.
- Authentication, database integration, and real billing are outside the current scope.
- Pricing values are illustrative and require confirmation before production use.
- Product dashboard previews use illustrative data rather than live business records.
- Contact links and other conversion actions may require integration before production.

## Future Improvements

- Connect a backend and persistent database.
- Add authentication and role-based permissions.
- Integrate a real subscription and payment provider.
- Add automated tests and end-to-end testing.
- Run Lighthouse audits and optimize based on the measured results.

## Deployment

Deployment URL: Add your published Vercel URL here.

## Author

Built as a frontend development assignment.
