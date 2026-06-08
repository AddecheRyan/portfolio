# Portfolio Site — A Full-Stack Personal Site with a Built In Blog and Admin Panel
 
Almost every software engineer needs a portfolio site. I wanted a portfolio site that I could add to without editing the database directly. This would help me save time so I can continue to put more time into my job search. So I built a site with am admin panel for easy access to add and delete posts right from the website.
 
---
 
## The Problem
 
Some developer portfolios are either a static site generator with a pre-built theme, or a template dressed up to look custom. Both get the job done, but neither gives you much to talk about in an interview. I wanted a portfolio that was itself a project. This would allow me to demonstrate full-stack thinking, not just frontend polish.
 
I also wanted real content management. Copy-pasting markdown into a repo and redeploying every time I write a blog post is friction I didn't want to live with long-term, so a lightweight admin panel was a core requirement from the start.
 
---
 
## My Approach
 
I scoped the project around three core features: a public-facing site with a projects and blog section, a markdown-based blog system, and a protected admin panel for creating and managing posts. 
 
The most interesting design decision was authentication. The site has exactly one admin, me! Rolling out a full NextAuth session flow with a database-backed user table felt like massive overkill for a single-user system. Instead, I implemented a lightweight auth approach using HMAC token signing and Next.js cookies — the server signs a token on login, stores it as an HTTP-only cookie, and validates it on protected routes via a tRPC middleware. No user table, no sessions table, no OAuth provider.
 
---
 
## Tech Stack
 
- **Next.js (App Router)** — Handles routing for both the public site and the protected admin panel cleanly within a single project. Server components kept data fetching simple and reduced client bundle size.
- **TypeScript** — Used throughout. End-to-end type safety between the frontend and API layer caught several shape mismatches during development that would have been annoying runtime bugs otherwise.
- **tRPC** — Gave me a fully type-safe API layer without writing a separate schema or maintaining REST endpoint types manually. The admin panel's mutations (create, edit, delete post) are all tRPC procedures with input validation via Zod.
- **Prisma** — Manages the blog post schema and database migrations. The type-safe query client meant I never had to guess what shape a database result would be in.
- **Tailwind CSS** — Handled all styling. Kept iteration fast and the codebase free of scattered CSS files.
 
---
 
## Technical Highlights
 
**Single-Admin Auth Without a User Table**
The admin auth system was the most interesting problem I worked through. Standard NextAuth setups assume you have users in a database and a session lifecycle to manage, this would not work for my use case. My solution was for the server to generate an HMAC-signed token using a secret key and stores it in an HTTP-only cookie. On every protected tRPC call, a middleware validates the token signature. If it's valid, the request goes through; if not, it's rejected. The result is a stateless, secure auth flow with zero database tables and no third-party OAuth dependency.
 
**Markdown Blog Pipeline**
Blog posts are stored as markdown in the database and rendered on the frontend using a markdown parser. I felt as if this was the best way to ensure I would not run into any rendering issues trying to store a post as just plain text and attempting to render it into a properly formatted page.
 
---
 
## Results
 
The site is live and deployed on Vercel. The admin panel works end-to-end — I can log in, write a post in markdown with a live preview, publish it, and have it appear on the blog without touching the codebase or redeploying.