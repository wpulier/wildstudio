import Link from 'next/link';

export default function About() {
  return (
    <div className="px-4 md:px-12 py-6 md:py-8">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Making Useful Things People Actually Want
          </h1>
          
          <div className="text-xs md:text-sm text-gray-500 mb-6">
            <p>Wild Studios | October 15, 2024</p>
          </div>
          
          {/* Specialized Tools */}
          <div className="py-4 px-5 bg-gray-50 rounded-sm mb-8">
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider font-medium">Our Specialized Tools</p>
            <div className="flex flex-wrap gap-x-3 gap-y-2 justify-center">
              {["React Expo", "Next.js", "Backend Development", "Blender", "Premier Pro", 
                "After Effects", "ComfyUI", "Lora Training", "Wan2.1", "Touch Designer"].map((tool, index) => (
                <span key={index} className="inline-flex items-center">
                  <span className="text-sm md:text-base text-gray-700">{tool}</span>
                  {index < 9 && <span className="mx-1 text-gray-300">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section 01 */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            <span className="text-gray-400 font-normal">01</span> Where We're At
          </h2>
          
          <div className="space-y-3 md:space-y-4 text-sm md:text-base">
            <p>
              At Wild Studios, we work with brands and creators to design useful tools and experiences. But before thinking about what's next, you've got to understand what's happening right now.
            </p>
            
            <p>
              We're in a big moment. AI has made it easier and cheaper than ever to build software. Because of that, we think we're about to see tons of new experiments, apps, and genuinely useful tools.
            </p>
            
            <p>
              Things are moving fast. If you build based only on today's assumptions, your product might be old news before you even ship it. AI is changing how software gets made and what users expect from it.
            </p>
            
            <p>
              We think what's coming won't be the same apps recycled again and again. Instead, it'll be highly personalized tools that feel genuinely built for you and the communities you care about.
            </p>
            
            <p>
              We're calling this moment the Imagination Era.
            </p>
          </div>
        </div>

        {/* Section 02 */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            <span className="text-gray-400 font-normal">02</span> How Did We Get Here?
          </h2>
          
          <div className="space-y-3 md:space-y-4 text-sm md:text-base">
            <p>
              Big changes usually happen when costs drop significantly, and that's exactly what's happening now. Anyone can now build software by simply describing their idea to AI.
            </p>
            
            <p>
              Lower barriers mean more people jumping in, experimenting, and taking chances. That will lead to software so tailored, it feels like it was designed specifically for you or your community.
            </p>
            
            <p>
              We've seen this happen before. Think about media: once making and sharing videos got cheaper, creators flooded platforms like YouTube and TikTok with content perfectly tailored to niche interests. Suddenly, our feeds felt personal, and media giants had to rethink their approach completely.
            </p>
            
            <p>
              This same shift is happening right now with software. Small teams and independent creators are about to compete on equal footing with tech giants.
            </p>
            
            <p>
              Brands have a clear opportunity here. The chance to build something unique won't stay open forever.
            </p>
          </div>
        </div>

        {/* Section 03 */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            <span className="text-gray-400 font-normal">03</span> Tools are Easy, Community is Hard
          </h2>
          
          <div className="space-y-3 md:space-y-4 text-sm md:text-base">
            <p>
              In this era, simply being useful isn't enough. AI can easily build tools, but it can't create community.
            </p>
            
            <p>
              Your real competitive edge comes from understanding your users and genuinely connecting with them. You need to offer something that speaks to what they actually care about.
            </p>
            
            <p>
              The next wave of great software isn't just about what you can build—it's about why it matters to your users. Building that kind of meaningful connection is what will truly set your product apart.
            </p>
          </div>
        </div>

        {/* Section 04 */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            <span className="text-gray-400 font-normal">04</span> Build with Us
          </h2>
          
          <div className="space-y-3 md:space-y-4 text-sm md:text-base">
            <p>
              If you're a new founder with fresh ideas, or an established brand ready to evolve, understanding this shift is key.
            </p>
            
            <p>
              At Wild Studios, we don't just prepare for what's next—we help you build it.
            </p>
            
            <p>
              Let's make something meaningful together.
            </p>
            
            <p className="italic">
              — The team at Wild Studios
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-12 text-center">
          <Link 
            href="/contact" 
            className="bg-black text-white px-6 py-2.5 md:px-8 md:py-3 inline-block text-sm md:text-base"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </div>
  );
} 