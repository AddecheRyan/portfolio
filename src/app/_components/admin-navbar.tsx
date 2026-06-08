import Link from 'next/link';

export function AdminNavbar() {
    return (
        <div className="flex flex-col items-center bg-baltic">
            <nav className="flex w-full md:w-3/4 lg:w-1/2 px-4 py-4 justify-between text-lg font-medium text-tea">
              <ul className="flex gap-6 items-start">
                <li><Link href="/" className="transition-colors hover:text-light-green">Home</Link></li>
                <li><Link href="/admin" className="transition-colors hover:text-light-green">Admin</Link></li>
              </ul>
              <ul className="flex gap-6 items-end">
                <li><Link href="/project" className="transition-colors hover:text-light-green">Projects</Link></li>
                <li><Link href="/blog" className="transition-colors hover:text-light-green">Blog</Link></li>
                <li><Link href="/admin/create" className="transition-colors hover:text-light-green">Create Post</Link></li>
              </ul>
            </nav>
        </div>
    );
}