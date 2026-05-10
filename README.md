# Our Lady Catholic Hospital Iseyin Website

A static multi-page website for Our Lady Catholic Hospital, Iseyin, Oyo State, Nigeria. The project is built with HTML, CSS, and JavaScript, and it showcases the hospital's services, departments, news, contact details, clinical schedule, and equipment.

## Project Overview

This website serves as an informational portal for the hospital, featuring:

- Responsive homepage with hero slider and service highlights
- Navigation menu for accessing deeper pages
- Services, equipment, news, FAQ, and contact sections
- Clinical schedule and emergency contact details
- Google Maps embed for location
- Contact form that opens messages via WhatsApp

## Files and Structure

Root:
- `index.html` — main landing page
- `README.md` — project documentation
- `sitemap.xml` — sitemap for search engine indexing
- `CNAME` — custom domain configuration

Folders:
- `JS/` — JavaScript behavior and UI interactions
- `Style/` — CSS styles for main layout and sections
- `Images/` — image assets organized by category
- `pages/` — additional page content (`about.html`, `contact.html`, `department.html`, `equipment.html`, `formal-news.html`, `history.html`, `news-page.html`, `Service.html`)

## Key Frontend Features

### Homepage
- Hero section with image slider and typed headline animation
- Quick links to clinical days and services
- Mission, vision, and hospital introduction cards
- Services slider and service detail modal
- Emergency contact section with call button
- Location map with embedded Google Maps
- FAQ accordion style section

### Additional Pages
- About page
- Services page
- Departments page
- News page
- Contact page
- Equipment page
- History page
- Formal news page

## JavaScript Modules

The website uses these scripts:

- `JS/nav.js` — responsive mobile navigation
- `JS/slider.js` — service card slider controls
- `JS/home-page-hero-slider.js` — homepage hero carousel
- `JS/auto-type.js` — typed text animation in hero section
- `JS/auto-update-year.js` — updates footer year dynamically
- `JS/equipment.js` — equipment slider and controls
- `JS/home-page-news-section.js` — news filter and article toggles
- `JS/contact.js` — contact form submission handling
- `JS/clinical-days.js` — clinical schedule interactions
- `JS/home-equip-sec.js` — additional homepage equipment section behavior
- `JS/service-modal.js` — service details modal popup

## Styles

CSS files are organized by page and component in the `Style/` folder, including:

- `Style/style.css`
- `Style/home-intro.css`
- `Style/auto-animate.css`
- `Style/facilities.css`
- `Style/FAQs.css`
- `Style/home-page-news-section.css`
- `Style/home_page_hero_slider.css`
- `Style/contact.css`
- `Style/clinical-days.css`
- `Style/home-equip-sec.css`

## How to Use

1. Open `index.html` in a browser.
2. Navigate using the header menu.
3. View service cards, hospital news, and clinical schedules.
4. Contact the hospital via phone or using the contact form.

## Editing and Customization

- Update content and text in HTML files under the root and `pages/` folder.
- Modify layout and styling in the stylesheet files under `Style/`.
- Replace or add images in the `Images/` folder.
- Adjust scripting logic in `JS/` for behavior changes.

## Deployment

This is a static website, so it can be deployed to any static hosting provider, including:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any static web server

## Notes

- The contact form currently sends messages via WhatsApp links.
- The hospital phone number and email appear in the contact section and emergency section.
- The footer credits the developer.

---

If you want, I can also add a short `CONTRIBUTING.md` or generate a simplified developer guide for updating pages and assets.