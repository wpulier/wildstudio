import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import NewsletterSection from './components/NewsletterSection';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[70vh] text-center px-4 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">Designing for the Imagination Era</h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-200">
            We craft bespoke digital experiences that blend creativity with practical engineering.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-sm md:text-base px-8 py-3 uppercase hover:bg-gray-200 transition"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="py-10 px-4">
        <h2 className="text-sm font-medium text-center mb-6 uppercase">Selected Projects</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {projects.slice(0, 6).map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative flex items-center justify-center border border-gray-200 bg-white p-6 hover:shadow"
            >
              <Image
                src={project.logo}
                alt={project.name}
                width={180}
                height={180}
                className="w-2/3 h-2/3 object-contain transition-transform group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Design &amp; Strategy</h3>
            <p className="text-sm text-gray-700">From brand identities to prototypes, we help you visualize bold ideas.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Automation &amp; AI</h3>
            <p className="text-sm text-gray-700">We use automation and AI to streamline workflows and enhance products.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Immersive Experiences</h3>
            <p className="text-sm text-gray-700">We create AR, VR and interactive installations that captivate audiences.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p>Wild Studios is a creative technology studio focused on building meaningful software and experiences.</p>
          <p>We combine design, engineering and AI to help brands transform ideas into real products.</p>
          <Link href="/about" className="inline-block font-medium text-sm underline mt-2">
            Learn more about us
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 text-center px-4">
        <p className="mb-6 font-bold text-lg md:text-xl">We&apos;re currently taking on new clients.</p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white py-2 px-8 font-semibold uppercase rounded-sm shadow"
        >
          Contact Us
        </Link>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <NewsletterSection />
        </div>
      </section>
    </>
  );
}
