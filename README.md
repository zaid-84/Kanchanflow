# KanchanFlow — Manufacturing CRM

**An industrial-modern CRM frontend designed to bring manufacturing sales and operations into one connected workspace.**

KanchanFlow is a responsive frontend concept built to simplify manufacturing workflows such as quotation management, bill of materials tracking, sales pipelines, and work orders. The project focuses on a clean industrial design, reusable components, responsive layouts, and accessibility.

**Live Demo:** https://kanchanflow.vercel.app/  
**GitHub Repository:** https://github.com/zaid-84/Kanchanflow

---

## Features

### Home Page
- Industrial-modern hero section with a product dashboard preview.
- Manufacturing workflow problem and solution overview.
- Feature cards highlighting core CRM capabilities.
- Industries section and pricing teaser.
- Frequently asked questions and call-to-action sections.

### Features Page
- Dedicated overview of key manufacturing CRM features.
- Product interface previews using illustrative data.
- Feature comparison table.
- Responsive feature sections and calls to action.

### Pricing Page
- Three pricing tiers: Starter, Professional, and Enterprise.
- Interactive monthly and annual billing toggle.
- Expandable FAQ section.
- Responsive pricing cards.
- Clearly identified illustrative pricing for demonstration purposes.

### Shared UI
- Responsive navigation with mobile menu.
- Reusable footer and navigation components.
- Consistent industrial-inspired design system.
- Keyboard focus indicators and accessible interactive controls.
- SEO metadata using the Next.js App Router.

---

## Tech Stack

- **Framework:** Next.js with App Router
- **Language:** TypeScript
- **UI:** React
- **Styling:** CSS Modules and Tailwind CSS setup
- **Icons:** Lucide React
- **Typography:** Inter using `next/font`
- **Deployment:** Vercel
- **Version Control:** Git and GitHub

---

## Design System

KanchanFlow uses a dark, industrial-modern visual identity with warm gold accents.

| Design Element | Value |
|---|---|
| Background | `#17191C` |
| Surface | `#22252A` |
| Light Surface | `#2B2E33` |
| Primary Text | `#F5F3EE` |
| Muted Text | `#A7ABB2` |
| Accent Gold | `#D5A642` |
| Borders | `#3A3D42` |
| Typography | Inter |

The layout is designed to adapt to mobile, tablet, laptop, and desktop screens.

---

## Lighthouse Audit

Lighthouse audits were performed on the deployed website using Google Chrome DevTools with the **Mobile** device profile.

### Audit Screenshots

The screenshots below document the mobile Lighthouse results for the three main pages.

| Page | Screenshot |
|---|---|
| Home | `screenshots/lighthouse-home.png` |
| Features | `screenshots/lighthouse-features.png` |
| Pricing | `screenshots/lighthouse-pricing.png` |

### Home Page Lighthouse Results

| Category | Score |
|---|---:|
| Performance | 91 |
| Accessibility | 96 |
| Best Practices | 100 |
| SEO | 90 |

These scores are from the recorded Home page audit. Lighthouse results can vary between runs and environments. Refer to the individual screenshots for the recorded results of the Features and Pricing pages.

---

## Project Structure

```text
Kanchanflow/
├── public/
├── screenshots/
│   ├── lighthouse-home.png
│   ├── lighthouse-features.png
│   └── lighthouse-pricing.png
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── page.module.css
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── features/
│   │   │   ├── page.tsx
│   │   │   └── features.module.css
│   │   └── pricing/
│   │       ├── page.tsx
│   │       └── pricing.module.css
│   └── components/
│       ├── navbar.tsx
│       ├── navbar.module.css
│       ├── footer.tsx
│       └── footer.module.css
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js and npm
- Git
- A code editor such as Visual Studio Code

### 1. Clone the Repository

```bash
git clone https://github.com/zaid-84/Kanchanflow.git
```

### 2. Navigate to the Project

```bash
cd Kanchanflow
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Create a Production Build

```bash
npm run build
```

### 6. Run the Production Build Locally

```bash
npm start
```

---

## Deployment

The project is deployed on Vercel.

**Live Website:** https://kanchanflow.vercel.app/

The project repository is connected to Vercel for deployment through GitHub.

---

## Scope and Assumptions

- This project is a frontend-only assignment.
- The dashboard previews display illustrative data and are not connected to a live manufacturing database.
- Authentication, backend services, and persistent data storage are outside the current implementation scope.
- Pricing values are illustrative and do not represent a verified commercial offer.
- Billing, payments, and subscription management are not integrated.
- Contact and conversion actions may require backend or external service integration before production use.

---

## Future Improvements

- Integrate a backend API and persistent database.
- Implement authentication and role-based access control.
- Connect real quotation, inventory, and work order workflows.
- Integrate subscription billing and payment processing.
- Add automated unit and end-to-end tests.
- Continue optimizing performance and accessibility based on Lighthouse findings.

---

## Author

Developed as a frontend development assignment using Next.js, TypeScript, and CSS Modules.

