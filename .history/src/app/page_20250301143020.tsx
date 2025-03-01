import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 mt-8 md:mt-12">
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
          AI Solutions
        </h1>

        <p className="mt-4 md:mt-6 max-w-2xl text-center text-sm md:text-base text-gray-800">
          Wild Studios develops scaled web apps, tuned AI models,<br />
          and custom AI solutions for organizations and visionaries.
        </p>
      </section>

      {/* Projects Grid Section */}
      <section className="px-4 md:px-6 py-12 mx-auto w-full max-w-2xl">
        <h2 className="text-13 font-medium text-center mb-8">
          Selected <span className="italic">Projects</span>
        </h2>

        {/* Project Grid */}
        <div className="mx-auto mb-12">
          <div className="grid grid-cols-4 mx-auto">
            {projects.map((project, index) => {
              const isRightBorder = index % 3 !== 2;
              const isBottomBorder = index < 6;

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
                  <div className="h-[100px] w-full flex justify-center items-center group">
                    <img
                      src={project.logo}
                      alt={project.name}
                      className="w-[45%] h-[45%] object-contain transition-transform duration-200 
                               group-hover:scale-110"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Section - Integrated with Projects section */}
        <div className="text-center mt-8">
          <p className="mb-6 font-bold text-lg">Now accepting new clients.</p>
          <Link
            href="/contact"
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white py-4 px-16 uppercase tracking-wider text-base font-medium transition-colors duration-200"
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </>
  );
} 