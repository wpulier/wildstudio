import Link from 'next/link';

export default function About() {
  return (
    <div className="px-4 md:px-12 py-6 md:py-8">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Crafting Purpose in the <span className="italic">Digital Age</span>
          </h1>
          
          <p className="text-base md:text-lg mb-4 md:mb-6">
            AI is shaping the future of software, driving innovation through personalized, purpose-built experiences. 
            To succeed in this new era, brands must go beyond utility and focus on creating communities that resonate 
            with their users' deeper aspirations.
          </p>
          
          <div className="text-xs md:text-sm text-gray-500">
            <p>By Wild Studios</p>
            <p>10.15.2024</p>
          </div>
        </div>

        {/* Section 01 */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            <span className="text-gray-400 font-normal">01</span> intro
          </h2>
          
          <div className="space-y-3 md:space-y-4 text-sm md:text-base">
            <p>
              At Wild Studios, we help the world's leading brands design what's next, but before you can dream up 
              the future, you've got to really get what's happening right now.
            </p>
            
            <p>
              We're at the start of a new revolution, sparked by AI, where knowledge and creation are available to everyone. 
              We're betting this is going to set off an explosion of new apps, wild experiments, and mind-bending 
              experiences over the next ten years.
            </p>
            
            <p>
              Now more than ever, it's crucial to look around and understand how the world is changing. Focusing too narrowly 
              on your planned features might result in a product that's outdated before it's even finished, especially 
              given how quickly AI is changing the tech landscape.
            </p>
            
            <p>
              These creations won't be copies of what we've seen in the past – they'll feel personalized, purpose-built, 
              and raise the bar for what we come to expect out of software.
            </p>
            
            <p>
              We call this <span className="italic">The Imagination Era</span>.
            </p>
          </div>
        </div>

        {/* Section 02 */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            <span className="text-gray-400 font-normal">02</span> how did we get here?
          </h2>
          
          <div className="space-y-3 md:space-y-4 text-sm md:text-base">
            <p>
              Tech revolutions often ignite when costs plummet, and we're on the cusp of that moment. We're entering 
              an era where anyone can breathe life into their software dreams by simply describing their vision to AI.
            </p>
            
            <p>
              Lower costs means more market entrants. And because costs are so low, folks will be more willing to 
              experiment and take risks. We believe that this will lead to hyper-personalized, community-driven experiences. 
              Picture apps so tailored, it's like your closest friend designed them just for your inner circle.
            </p>
            
            <p>
              We've seen this pattern before with media. As costs of production and distribution plummeted, a new era 
              of personalized content emerged. Just a decade ago, we consumed mass media; now, YouTubers and TikTokers 
              craft content that feels tailor-made for us. There's a creator for every niche and interest, turning our 
              feeds into personalized channels. This shift forced traditional media giants to rethink their entire approach, 
              moving from broad appeal to targeted experiences.
            </p>
            
            <p>
              The same is happening with tech. Software is becoming like content. Independent developers, designers, 
              visionaries, and small teams will create products that compete with the tech giants of our time.
            </p>
            
            <p>
              And even if they aren't competing, these "handcrafted" pieces of software will completely change what 
              users come to expect.
            </p>
            
            <p>
              For brands, this shift presents a massive opportunity. The window to adapt and innovate is open, but it 
              won't stay open forever.
            </p>
          </div>
        </div>

        {/* Section 03 */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            <span className="text-gray-400 font-normal">03</span> AI BUILDS TOOLS, BRANDS BUILD PURPOSE
          </h2>
          
          <div className="space-y-3 md:space-y-4 text-sm md:text-base">
            <p>
              In the Imagination Era, utility no longer guarantees loyalty. When tasks are straightforward, AI can 
              often outperform traditional tools.
            </p>
            
            <p>
              AI commoditizes tools, but it can't replace community - your product needs to build one. While everyone 
              rushes to answer the 'what' (what can AI build), brands of tomorrow are taking steps to own the 'why' 
              (why should your community care). Thoughtful AI design that connects with your community will become the 
              single most important moat for your brand.
            </p>
            
            <p>
              In the Imagination Era, success is about connecting with your users' aspirations. Understand them, build 
              community around them, or get left behind.
            </p>
          </div>
        </div>

        {/* Section 04 */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            <span className="text-gray-400 font-normal">04</span> Join Us in Shaping the Future
          </h2>
          
          <div className="space-y-3 md:space-y-4 text-sm md:text-base">
            <p>
              Whether you're a new founder looking at endless opportunities or an established player using your unique 
              strengths, understanding this shift is key to shaping the future.
            </p>
            
            <p>
              At Wild Studios, we don't just prepare for what's next—we design it.
            </p>
            
            <p className="font-medium">
              Join us.
            </p>
            
            <p className="italic">
              -The team at Wild Studios
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