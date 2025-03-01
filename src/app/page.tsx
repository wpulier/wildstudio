import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 mt-12 md:mt-24">
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
          The Design Studio for 
          <div className="mt-2">the <span className="italic">Digital Age</span>.</div>
        </h1>
        
        <p className="mt-6 md:mt-8 max-w-2xl text-center text-sm md:text-base text-gray-800">
          Specialized in AI strategy, technical implementation, and innovation consulting. 
          We help businesses leverage cutting-edge technologies to transform their operations 
          and create competitive advantages.
        </p>
      </section>

      {/* Projects Grid Section */}
      <section className="px-4 md:px-6 py-8 md:py-12 mx-auto w-full max-w-2xl">
        <h2 className="text-xs font-medium text-center mb-6">
          Selected <span className="italic">Projects</span>
        </h2>

        {/* Project Grid */}
        <div className="mx-auto">
          <div className="grid grid-cols-3 mx-auto">
            {projects.map((project, index) => {
              // Calculate border classes based on position
              const isRightBorder = index % 3 !== 2; // Not last in row
              const isBottomBorder = index < 6; // Not in bottom row
              
              return (
                <Link 
                  key={index} 
                  href={`/projects/${project.slug}`} 
                  className={`
                    block
                    ${isRightBorder ? 'border-r border-gray-200' : ''} 
                    ${isBottomBorder ? 'border-b border-gray-200' : ''}
                  `}
                >
                  <div className="h-[90px] w-full flex justify-center items-center group">
                    <img 
                      src={project.logo} 
                      alt={project.name} 
                      className="w-[40%] h-[40%] object-contain transition-transform duration-200 
                               group-hover:scale-110"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 text-center mt-4 md:mt-8">
        <div className="max-w-2xl mx-auto">
          <p className="mb-8 font-bold text-2xl md:text-3xl">Now accepting new clients.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white py-3 px-12 uppercase tracking-wider text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
} 