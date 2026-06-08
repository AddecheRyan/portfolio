## What Is the T3 Stack?

The T3 stack is a collection of technologies that work incredibly well together:

- **Next.js** – frontend + routing
- **tRPC** – type-safe APIs
- **Prisma** – database ORM
- **Tailwind CSS** – styling without pain

The magic is end-to-end type safety. If you change a type on the backend, TypeScript tells you *everywhere* it breaks.

---

## Project Structure

Here’s how I organized my app:

```txt
src/
├── app/
│   ├── blog/
│   │   └── [id]/
│   │       └── page.tsx
│   └── layout.tsx
├── server/
│   └── api/
│       └── routers/
│           └── blog.ts
└── styles/
