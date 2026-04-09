# Email Campaign Builder

A React-powered email template previewer with 4 production-ready HTML email templates.
Built to demonstrate HTML email development skills from my experience at **Blueflame Ltd.** (Kigali, Rwanda), where digital campaigns contributed to a **25% revenue growth**.

🔗 **Live Demo**: [mustaphaukizuru.github.io/email-campaign-builder](https://mustaphaukizuru.github.io/email-campaign-builder)

---

## Templates Included

| Template | Category | Use Case |
|---|---|---|
| Promotional Offer | Sales | Discount campaigns, limited-time offers |
| Welcome Email | Onboarding | New customer/user onboarding |
| Newsletter | Content | Monthly updates and content digest |
| Follow-up / Re-engagement | Retention | Win back inactive subscribers |

---

## Features

- Live preview with desktop and mobile viewport toggle
- Copy HTML to clipboard with one click
- Download any template as a `.html` file
- View raw HTML source code
- All templates use inline CSS (email client compatible)
- Zero external dependencies in the templates themselves

---

## Tech Stack

- React 18
- Pure HTML/CSS email templates (inline styles for cross-client compatibility)
- GitHub Pages deployment

---

## Local Setup

```bash
git clone https://github.com/mustaphaukizuru/email-campaign-builder.git
cd email-campaign-builder
npm install
npm start
```

Visit `http://localhost:3000`

---

## Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
npm run deploy
```

Make sure `homepage` in `package.json` matches your GitHub Pages URL.

---

## Email Client Compatibility

These templates are built following email development best practices:
- Inline CSS styles (no external stylesheets)
- Table-based layouts for Outlook compatibility
- `max-width: 600px` for desktop readability
- Responsive for mobile clients
- No JavaScript (not supported in email clients)

---

## Author

**Ukizuru Mustapha** — IT Manager & Full-Stack Developer | Google Certified Educator L2

- Website: [mustaphaukizuru.com](https://mustaphaukizuru.com)
- LinkedIn: [linkedin.com/in/mustaphaukizuru](https://linkedin.com/in/mustaphaukizuru)
- GitHub: [github.com/mustaphaukizuru](https://github.com/mustaphaukizuru)
