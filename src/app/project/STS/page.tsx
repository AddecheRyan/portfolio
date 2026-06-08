import STS from "@/project-pages/STS/STS.mdx";

export default function Project() {

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      <article className="w-full max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold text-baltic mb-2">Student Assistant Solver Tool</h1>
        <p className="text-lg text-teal mb-8">Ryan Addeche</p>
        <hr className="border-mint mb-8" />
        <div className="markdown">
            <STS/>
        </div>
      </article>
    </div>
    
  );
}