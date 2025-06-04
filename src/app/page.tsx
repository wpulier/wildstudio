import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import NewsletterSection from './components/NewsletterSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[70vh] md:h-[80vh] overflow-hidden text-center px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-600 opacity-80" />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Crafting <span className="italic">Beautiful Software</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-white/90 mb-6">
            We help visionary brands launch interactive products and automations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-black font-semibold text-sm px-8 py-3 uppercase shadow hover:bg-gray-100 transition"
          >
            Start Your Project
          </Link>
        </div>
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
          <p className="mb-6 md:mb-7 font-bold text-xl md:text-2xl">We’re currently taking on new clients.</p>
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

      {/* Tools and About Content Section */}
      <section className="mt-16 md:mt-20 px-4 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Specialized Tools */}
          <div className="py-4 px-5 bg-gray-50 rounded-sm mb-8">
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider font-medium text-center">Our Specialized Tools</p>
            <div className="flex flex-wrap gap-x-3 gap-y-2 justify-center">
              {["React Expo", "Next.js", "Unreal Engine", "Blender", "Premier Pro", 
                "After Effects", "ComfyUI", "Lora Training", "Wan2.1", "Touch Designer"].map((tool, index) => (
                <span key={index} className="inline-flex items-center">
                  <span className="text-sm md:text-base text-gray-700">{tool}</span>
                  {index < 9 && <span className="mx-1 text-gray-300">•</span>}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider font-medium text-center">Backend Development</p>
              <div className="flex flex-wrap gap-x-3 gap-y-2 justify-center">
                {["Python", "FastAPI", "Node.js", "SQL", "MySQL", "Firebase", "Supabase", "Stripe"].map((tool, index) => (
                  <span key={index} className="inline-flex items-center">
                    <span className="text-sm md:text-base text-gray-700">{tool}</span>
                    {index < 7 && <span className="mx-1 text-gray-300">•</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-12 md:space-y-16">
            <div className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 text-4xl md:text-5xl font-bold text-gray-100 select-none">01</div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 relative">
                Where We’re At
              </h2>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                <p>At Wild Studios, we help brands and creators build meaningful tools and experiences.</p>
                <p>AI is dramatically lowering the barrier to building software. This trend will only accelerate, fundamentally changing how we design and create software-based experiences.</p>
                <p>Yet building genuinely valuable software—and a sustainable software business—remains complex, time-consuming, and fragile. Hiring good talent feels impossible, even as talented people struggle to find meaningful roles. Wild Studios acknowledges these contradictions without simplifying or avoiding them.</p>
                <p>We leverage AI’s strengths—rapid prototyping, generative media, and agentic workflows—while staying grounded in the practical realities and challenges of building software that genuinely works.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 text-4xl md:text-5xl font-bold text-gray-100 select-none">02</div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 relative">
                Tools Are Easy, Real Products Are Hard
              </h2>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                <p>The next wave of successful software won’t rely solely on new tools. Instead, it will blend AI-powered front-end and backend capabilities: AI agents enhancing traditional interfaces, frontend agents interacting seamlessly with backend systems, or entirely headless workflows delivering uniquely generative outcomes.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 text-4xl md:text-5xl font-bold text-gray-100 select-none">03</div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 relative">
                Build With Wild Studios
              </h2>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                <p>Whether you’re a startup with bold new ideas or an established brand ready to evolve, the real opportunity lies in balancing innovation with practical execution.</p>
                <p>At Wild Studios, we don’t just anticipate what’s next—we help you build it.</p>
                <p>Let’s make something meaningful together.</p>
                <p className="italic">— The team at Wild Studios</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mt-16 md:mt-24 px-4 md:px-12">
        <div className="max-w-3xl mx-auto">
          <NewsletterSection />
        </div>
      </section>
    </>
  );
}
