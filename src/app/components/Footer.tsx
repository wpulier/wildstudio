import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 md:py-8 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <div className="border border-white p-3 md:p-4 inline-block">
              <span className="text-lg md:text-xl italic font-bold">Wild Studios</span>
            </div>
          </div>
          
          {/* Simplified Navigation */}
          <div>
            <h4 className="text-xs md:text-sm text-gray-400 mb-2 md:mb-4">Info</h4>
            <ul className="space-y-1 md:space-y-2 text-sm">
              <li><Link href="/work" className="hover:underline">Work</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 pt-4 md:pt-8 border-t border-gray-800 text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} Wild Studios. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 