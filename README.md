# ByteSpace — Landing Page

A responsive landing page for ByteSpace, an online course platform, built for the Doin Tech Limited Jr. Software Engineer (Frontend) assessment.

## Live Demo

🔗 [https://bytespace-new-sigma.vercel.app](https://bytespace-new-sigma.vercel.app)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Poppins (headings), Satoshi (body/labels)
- **Deployment:** Vercel

## Features

- Fully responsive landing page (mobile, tablet, desktop)
- Reusable components (CourseCard, TestimonialCard, Tab, StatBlock, FloatingCard, AuthPanel)
- Bonus: Login and Signup pages with a shared auth layout
- Mobile navigation menu

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

src/
├─ app/
│ ├─ page.tsx — Landing page
│ ├─ login/page.tsx — Login page (bonus)
│ └─ signup/page.tsx — Signup page (bonus)
├─ components/
│ ├─ layout/ — Navbar, Footer, AuthPanel
│ ├─ sections/ — Hero, Courses, Testimonials, etc.
│ └─ ui/ — Reusable UI pieces (CourseCard, Tab, etc.)


## Design

Built from the Figma design provided in the assessment brief, matching the design system's typography and color tokens (Persian Blue, Electric Lime).