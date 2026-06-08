import "@/app/globals.css";

import { Navbar } from "@/app/_components/navbar.tsx";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Ryan Addeche Portfolio",
  description: "Ryan Addeche&apos;s portfolio website which has an about page, information regarding his projects and a personal blog",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
          <Navbar />
          <div className="pt-2">
            {children}
          </div>
      </body>
    </html>
  );
}
