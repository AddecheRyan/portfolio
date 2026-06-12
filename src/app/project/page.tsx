"use client";

import Link from "next/link";

export default function ProjectPage() {

  return (
    <main>
      <div className="flex flex-col mx-auto w-full md:w-3/4 lg:w-1/2 px-4">
        <div>
          <h1 className="text-6xl font-bold my-4 text-baltic">Projects</h1>
          <p className="text-xl text-teal my-4">Click on a project to learn more!</p>
          <hr className="w-7/8 lg:w-full md:w-full border-mint my-4 mx-auto"></hr>
        </div>
        <div className="flex flex-col gap-6 mt-8 items-stretch">
            <Link key={1} href={`/project/STS`} className="group block rounded-xl border-2 p-6 shadow-md transition-all hover:border-teal hover:shadow-2xl">
              <div className="flex flex-row gap-8">
                <div className="flex flex-col">
                  <h2 className="text-3xl font-semibold">Student Assistant Solver Tool</h2>
                  <p className="mt-auto text-xl">My senior project for my Bachelor's degree in Computer Science at Worcester Polytechnic Institute. My group and I developed a web application that increased the efficiency of the student assistant placement process.</p>
                  <ul className="mt-auto flex flex-row gap-2">
                    <li className="rounded-md border-2 px-2 py-1">Typescript</li>
                    <li className="rounded-md border-2 px-2 py-1">Next.js</li>
                    <li className="rounded-md border-2 px-2 py-1">tRPC</li>
                    <li className="rounded-md border-2 px-2 py-1">Prisma</li>
                  </ul>
                </div>
                <img src="/STS/MQP-Slide.jpg" alt="Student Assistant Solver Tool" className="w-96 h-72 rounded-lg"></img>
              </div>
            </Link>
        </div>
      </div>
    </main>
  );
}
