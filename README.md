# iDma Corporate Website

A production-ready corporate website for iDma international Ltd, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Mobile-First Design**: Responsive, accessible, and optimized for all devices
- **SEO Optimized**: Metadata, sitemap, robots.txt, and JSON-LD schema
- **Accessibility**: Semantic HTML, keyboard navigation, ARIA labels
- **Content Management**: Centralized configuration in `src/config/site.ts`

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
idma-site/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── api/          # API routes
│   │   ├── case-studies/ # Dynamic case study pages
│   │   └── [pages]/      # Static pages
│   ├── components/       # Reusable React components
│   └── config/          # Site configuration
├── public/
│   └── downloads/       # Downloadable resources
└── package.json
```

## Configuration

All site content is managed through `src/config/site.ts`. This includes:

- Company information (name, address, contact details)
- Navigation structure
- Social media links
- Pricing plans
- Testimonials and FAQs
- Case studies

To update site content, edit `src/config/site.ts`. Changes will be reflected across all pages automatically.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Building for Production

1. Build the project:

```bash
npm run build
```

2. Start the production server:

```bash
npm run start
```

## Deployment

### Render.com

This project includes a `render.yaml` that lets Render auto-detect build/start commands.

1. Push this folder to a GitHub repository.
2. In Render, click **New +** → **Blueprint** and select your repo.
3. Render will create a web service using:
   - Build: `npm ci && npm run build`
   - Start: `npm start` (uses `$PORT`)
4. Add custom domain `www.idma.ai` in the Render service settings and follow the DNS instructions.

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

The site will be available at a Vercel URL, and you can add a custom domain.

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:

- **Netlify**: Use the Next.js build plugin
- **AWS Amplify**: Configure build settings for Next.js
- **Docker**: Use the official Next.js Docker image
- **Self-hosted**: Run `npm run build` and `npm run start` on your server

## Customization

### Editing Site Content

1. Open `src/config/site.ts`
2. Update company information, navigation, pricing, etc.
3. Changes will be reflected across all pages

### Styling

- Tailwind CSS is used for all styling
- Custom colors and themes can be configured in `tailwind.config.ts`
- Global styles are in `src/app/globals.css`

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with your page content
3. Add the route to `src/config/site.ts` navigation if needed
4. Update `src/app/sitemap.ts` to include the new page

### Contact Form

The contact form API route is at `src/app/api/contact/route.ts`. Currently, it:

- Validates input
- Checks for spam (honeypot field)
- Logs submissions (for development)

**To enable email sending in production:**

1. Choose an email service provider (SendGrid, AWS SES, Resend, etc.)
2. Add your API keys to environment variables
3. Update `src/app/api/contact/route.ts` to send emails
4. Add rate limiting (consider using `rate-limiter-flexible` or similar)

### Download Resources

Place actual PDF files in `public/downloads/` to replace the placeholder files:

- `brochure.pdf` - Product brochure
- `datasheet.pdf` - Technical datasheet
- `quick-start.pdf` - Quick start guide
- `deployment-guide.pdf` - IT deployment guide

## SEO

- Metadata is configured per page using Next.js Metadata API
- Sitemap is automatically generated at `/sitemap.xml`
- Robots.txt is configured at `/robots.txt`
- JSON-LD organization schema is included on the homepage

## Accessibility

The site follows accessibility best practices:

- Semantic HTML elements
- Keyboard navigation support
- Focus states on interactive elements
- ARIA labels where needed
- Proper heading hierarchy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 iDma international Ltd. All rights reserved.

## Support

For questions or issues, please contact [contact@idma.ai](mailto:contact@idma.ai)
