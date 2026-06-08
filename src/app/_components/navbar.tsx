import Link from 'next/link';

export function Navbar() {
    return (
        <div className="flex flex-col items-center">
            <nav className="flex w-full md:w-3/4 lg:w-1/2 px-4 py-4 justify-between text-xl font-medium">
              <ul className="flex gap-6 items-start">
                <li><Link href="/" className="transition-colors hover:underline">Home</Link></li>
              </ul>
              <ul className="flex gap-6 items-end">
                <li><Link href="/project" className="transition-colors hover:underline">Projects</Link></li>
                {/* <li><Link href="/blog" className="transition-colors hover:text-light-green">Blog</Link></li> */}
              </ul>
            </nav>
        </div>
    );
}