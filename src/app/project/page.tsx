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
        <div className="flex flex-col gap-6 mt-8">
            <Link key={1} href={`/project/STS`} className="group block rounded-xl border-2 border-mint/40 bg-white p-6 shadow-sm transition-all hover:border-teal hover:shadow-md">
              <h2 className="text-2xl font-semibold text-baltic group-hover:text-teal transition-colors">Student Assistant Solver Tool</h2>
              <p className="mt-2 text-baltic/70">My senior project for my Bachelor's degree in Computer Science at Worcester Polytechnic Institute. My group and I developed a web application that increased the efficiency of the student assistant placement process.</p>
            </Link>
        </div>
      </div>
    </main>
  );
}
