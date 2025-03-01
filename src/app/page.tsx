import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 mt-8 md:mt-20">
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
          The Design Studio for 
          <div className="mt-2">the <span className="italic">Digital Age</span>.</div>
        </h1>
        
        <p className="mt-6 md:mt-8 max-w-2xl text-center text-sm md:text-base">
          From digital interfaces to brand identities to immersive apps, we design
          products for the future. We don't follow trends; we create
          them—driving billion-dollar businesses.
        </p>
        
        <Link href="/contact" className="mt-6 md:mt-8 bg-green-500 text-white px-5 py-2.5 md:px-6 md:py-3 inline-block text-sm md:text-base">
          CONTACT US
        </Link>
      </section>

      {/* Projects Grid Section */}
      <section className="px-4 md:px-12 py-10 md:py-16 mx-auto w-full max-w-3xl">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-10">
          Selected <span className="italic">Projects</span>
        </h2>

        {/* Project Grid */}
        <div className="mx-auto">
          <div className="grid grid-cols-3 mx-auto">
            {projects.map((project, index) => {
              // Calculate border classes based on position
              const isRightBorder = index % 3 !== 2; // Not last in row
              const isBottomBorder = index < 6; // Not in bottom row
              
              // Add gray background to Adobe cell for matching the image
              const hasBgColor = project.slug === 'adobe' ? 'bg-gray-100' : '';
              
              return (
                <Link 
                  key={index} 
                  href={`/projects/${project.slug}`} 
                  className={`
                    block relative 
                    ${isRightBorder ? 'border-r border-gray-200' : ''} 
                    ${isBottomBorder ? 'border-b border-gray-200' : ''}
                    ${hasBgColor}
                  `}
                >
                  <div className="aspect-square h-[140px] flex items-center justify-center
                               transition-all duration-300 hover:bg-gray-50
                               group">
                    <img 
                      src={project.logo} 
                      alt={project.name} 
                      className="max-w-[60%] max-h-[60%] transition-all duration-300 ease-in-out 
                               group-hover:scale-110 group-hover:rotate-3"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 
                                  transition-all duration-300 flex items-center justify-center opacity-0 
                                  group-hover:opacity-100">
                      <span className="text-xs font-medium px-2 py-1 bg-white">{project.name}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Age Section */}
      <section className="bg-gray-50 py-16 px-4 text-center mt-8 md:mt-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the design firm for<br />
            the <span className="italic">AI age</span>.
          </h2>
          <p className="mb-6">Now accepting new clients.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-green-500 text-white py-2 px-8 uppercase"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
} 