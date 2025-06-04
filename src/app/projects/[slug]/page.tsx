import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects, Project } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p: Project) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="px-4 md:px-12 py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Project Header */}
        <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
          <div className="w-38 h-38 md:w-60 md:h-60 flex-shrink-0 bg-gray-50 p-6 flex items-center justify-center">
            <Image 
              src={project.logo}
              alt={project.name}
              width={243}
              height={243}
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {project.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              {project.description}
            </p>
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-7/12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-700">
                  {project.overview || `Working with ${project.name} was an extraordinary opportunity to push the boundaries of what’s possible.
                  Our collaboration focused on creating meaningful digital experiences that resonate with users while 
                  driving business growth.`}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Challenge</h2>
                <p className="text-gray-700">
                  {project.challenge || `${project.name} needed to reimagine their digital presence in an increasingly competitive market. 
                  They came to Wild Studios looking for a partner who could help them stand out while maintaining 
                  their core brand values.`}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Solution</h2>
                <p className="text-gray-700">
                  {project.solution || `We developed a comprehensive strategy that focused on user-centered design principles, creating 
                  seamless experiences across all touchpoints. Our team worked closely with ${project.name}’s stakeholders
                  to ensure the final product not only met but exceeded expectations.`}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Results</h2>
                {project.results ? (
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {project.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                ) : (
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Increased user engagement by 47%</li>
                    <li>Reduced bounce rate by 32%</li>
                    <li>Improved conversion rate by 28%</li>
                    <li>Award-winning design recognized by industry leaders</li>
                  </ul>
                )}
              </section>
            </div>
            
            {/* Media Content - Right Side */}
            <div className="w-full md:w-5/12 space-y-6">
              {/* Media Item 1 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-gray-400 text-center p-4">
                      <svg className="w-12 h-12 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="mt-2">Project Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Media Item 2 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-gray-400 text-center p-4">
                      <svg className="w-12 h-12 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <p className="mt-2">Process Highlight</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Projects */}
        <div className="mt-12 pt-8 border-t">
          <Link
            href="/"
            className="text-black border border-black px-6 py-3 inline-flex items-center group hover:bg-black hover:text-white transition-colors duration-300"
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
} 