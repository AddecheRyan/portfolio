"use client";

import Link from "next/link";
import { ProjectCard } from "../_components/project-card";

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
          <ProjectCard href={`/project/STS`} title="Student Assistant Solver Tool" description="My senior project for my Bachelor's degree in Computer Science at Worcester Polytechnic Institute. My group and I developed a web application that increased the efficiency of the student assistant placement process that serves 100+ users." technologies={["Typescript", "Next.js", "tRPC", "Prisma"]} image="/STS/MQP-Slide.jpg" />
          <ProjectCard href={`/project/blackjack`} title="Real-Time Multiplayer Blackjack" description="A real-time multiplayer blackjack game built with Next.js, Node.js, Express.js, and MongoDB. The game utlizes websockets to allow users to play blackjack with each other in real-time." technologies={["Typescript", "Next.js", "Node.js", "Express.js", "MongoDB"]} image="" />
        </div>
      </div>
    </main>
  );
}
