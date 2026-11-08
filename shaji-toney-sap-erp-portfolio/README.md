# Shaji Toney — SAP & ERP Portfolio

A responsive personal portfolio for Shaji Toney, positioning his professional background in enterprise POS application support alongside postgraduate ERP studies at the Kyoto College of Graduate Studies for Informatics (KCGI), Japan.

## Technology stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Lucide React icons
- Responsive custom CSS

## Run locally

Requirements: Node.js 20 or later and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a production build:

```bash
npm run build
```

The project is configured for static export (`out/`) and can be deployed to Vercel.

## Customize the portfolio

Most page content is in `src/app/page.tsx`:

- Update the `experience` array for employment details.
- Update the `project` object and add project cards for verified academic or personal projects.
- Update the `skills` array to reflect current skills and proficiency accurately.
- Update the education section in the page JSX.
- Update contact links in the Contact section.
- Update page title and description in `src/app/layout.tsx`.

### Add a resume PDF

1. Create a `public` folder in the project root.
2. Copy your current resume into it as `Shaji-Toney-Resume.pdf`.
3. Add a download link in the hero or contact section:

```tsx
<a href="/Shaji-Toney-Resume.pdf" download>Download Resume</a>
```

Only publish a resume version you are comfortable sharing publicly. Consider removing your full street address and other unnecessary personal information.

## Deploy to Vercel

1. Create a GitHub repository named `shaji-toney-sap-erp-portfolio`.
2. Upload or push this project to the repository.
3. Sign in to Vercel and choose **Add New → Project**.
4. Import the GitHub repository.
5. Vercel should detect Next.js. Keep the default build settings.
6. Deploy and use the generated URL on your resume and LinkedIn profile.

## Accuracy notes

- The LuLu Group India role is presented as professional experience.
- The SAP S/4HANA PP bicycle manufacturing project is labelled as academic work.
- SAP modules and technologies are presented as areas of study or exposure, not as claims of commercial implementation experience or certification.
- The project intentionally avoids invented testimonials, certification claims, project outcomes and performance metrics.

Before publishing, verify dates, job title, employer naming, education details, project scope, phone number and public contact preferences against your latest resume and LinkedIn profile.
