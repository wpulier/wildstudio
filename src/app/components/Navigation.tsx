import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="flex justify-between items-center py-4 md:py-6 px-4 md:px-12">
      <Link href="/" className="text-xl md:text-2xl font-bold italic">
        Wild Studios
      </Link>
      <nav className="flex items-center space-x-3 md:space-x-6">
        <Link href="/about" className="text-sm hover:underline">About</Link>
        <Link href="/contact" className="text-sm bg-black text-white px-3 py-1.5 md:px-4 md:py-2">
          CONTACT US
        </Link>
      </nav>
    </header>
  );
} 