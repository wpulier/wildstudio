import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 mt-6 md:mt-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight mb-1 md:mb-2">
          Intelligent Solutions for 
          <div className="mt-1">Tomorrow's <span className="italic">Digital Experiences</span></div>
        </h1>
        
        <h2 className="mt-3 md:mt-5 max-w-2xl text-center text-base md:text-lg text-gray-700 font-medium leading-relaxed mb-2 md:mb-3">
          We make AI apps, animations, and automations—that get your ideas launched, your brand noticed.
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
                Where We're At
              </h2>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                <p>At Wild Studios, we work with brands and creators to design useful tools and experiences. But before thinking about what's next, you've got to understand what's happening right now.</p>
                <p>We're in a big moment. AI has made it easier and cheaper than ever to build software. Because of that, we think we're about to see tons of new experiments, apps, and genuinely useful tools.</p>
                <p>Things are moving fast. If you build based only on today's assumptions, your product might be old news before you even ship it. AI is changing how software gets made and what users expect from it.</p>
                <p>We think what's coming won't be the same apps recycled again and again. Instead, it'll be highly personalized tools that feel genuinely built for you and the communities you care about.</p>
                <p>We're calling this moment the Imagination Era.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 text-4xl md:text-5xl font-bold text-gray-100 select-none">02</div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 relative">
                How Did We Get Here?
              </h2>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                <p>Big changes usually happen when costs drop significantly, and that's exactly what's happening now. Anyone can now build software by simply describing their idea to AI.</p>
                <p>Lower barriers mean more people jumping in, experimenting, and taking chances. That will lead to software so tailored, it feels like it was designed specifically for you or your community.</p>
                <p>We've seen this happen before. Think about media: once making and sharing videos got cheaper, creators flooded platforms like YouTube and TikTok with content perfectly tailored to niche interests. Suddenly, our feeds felt personal, and media giants had to rethink their approach completely.</p>
                <p>This same shift is happening right now with software. Small teams and independent creators are about to compete on equal footing with tech giants.</p>
                <p>Brands have a clear opportunity here. The chance to build something unique won't stay open forever.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 text-4xl md:text-5xl font-bold text-gray-100 select-none">03</div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 relative">
                Tools are Easy, Community is Hard
              </h2>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                <p>In this era, simply being useful isn't enough. AI can easily build tools, but it can't create community.</p>
                <p>Your real competitive edge comes from understanding your users and genuinely connecting with them. You need to offer something that speaks to what they actually care about.</p>
                <p>The next wave of great software isn't just about what you can build—it's about why it matters to your users. Building that kind of meaningful connection is what will truly set your product apart.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 text-4xl md:text-5xl font-bold text-gray-100 select-none">04</div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 relative">
                Build with Us
              </h2>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                <p>If you're a new founder with fresh ideas, or an established brand ready to evolve, understanding this shift is key.</p>
                <p>At Wild Studios, we don't just prepare for what's next—we help you build it.</p>
                <p>Let's make something meaningful together.</p>
                <p className="italic">— The team at Wild Studios</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 