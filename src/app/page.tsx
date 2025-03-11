import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 mt-6 md:mt-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight mb-1 md:mb-2">
          AI-Driven Solutions for 
          <div className="mt-1">Tomorrow's <span className="italic">Digital Experiences</span></div>
        </h1>
        
        <h2 className="mt-3 md:mt-5 max-w-2xl text-center text-base md:text-lg text-gray-700 font-medium leading-relaxed mb-2 md:mb-3">
          We make AI tools—apps, animations, and workflow automations—that get your ideas launched, your brand noticed, and integrate smoothly into your current tech.
        </h2>
      </section>

      {/* Projects Grid Section */}
      <section className="px-4 md:px-6 py-5 md:py-6 mx-auto w-full max-w-[650px]">
        <h2 className="text-xs md:text-sm font-medium text-center mb-3">
          Selected <span className="italic">Projects</span>
        </h2>

        {/* Project Grid */}
        <div className="mx-auto mb-5">
          <div className="grid grid-cols-3 mx-auto">
            {projects.map((project, index) => {
              const isRightBorder = index % 3 !== 2;
              const isBottomBorder = index < 6;

              return (
                <Link
                  key={index}
                  href={`/projects/${project.slug}`}
                  className={`
                    block group relative overflow-hidden
                    ${isRightBorder ? 'border-r border-gray-200' : ''} 
                    ${isBottomBorder ? 'border-b border-gray-200' : ''}
                  `}
                >
                  <div className="h-[90px] sm:h-[100px] md:h-[114px] w-full flex justify-center items-center p-2 sm:p-3 md:p-4">
                    <div className="absolute inset-0 bg-gray-50 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                    <Image 
                      src={project.logo} 
                      alt={project.name}
                      width={180}
                      height={180}
                      className="w-[62%] sm:w-[65%] md:w-[68%] h-[62%] sm:h-[65%] md:h-[68%] object-contain transition-all duration-200 
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
      <section className="py-4 px-4 text-center mt-0">
        <div className="max-w-2xl mx-auto">
          <p className="mb-6 md:mb-7 font-bold text-xl md:text-2xl">Now accepting new clients.</p>
          <Link 
            href="/contact" 
            className="inline-flex justify-center items-center bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 px-8 sm:px-10 uppercase tracking-wider text-sm md:text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg rounded-sm border-b-2 border-green-700 hover:border-green-800"
          >
            CONTACT US
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
} 