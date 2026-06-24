import Link from "next/link";

export function ProjectCard({ href, title, description, technologies, image }: { href: string, title: string, description: string, technologies: string[], image: string }) {
    return (
        <Link href={href} className="group block rounded-xl border-2 p-6 shadow-md transition-all hover:border-teal hover:shadow-2xl">
            <div className="flex flex-row gap-8 min-w-0">
            <div className="flex flex-col">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <p className="mt-auto text-xl">{description}</p>
                <ul className="mt-auto flex flex-row gap-2">
                    {technologies.map((technology) => (
                        <li key={technology} className="rounded-md border-2 px-2 py-1">{technology}</li>
                    ))}
                </ul>
            </div>
            <img src={image} alt={title} className="w-2/5 max-w-96 h-auto self-center rounded-lg"></img>
            </div>
        </Link>
    )
}