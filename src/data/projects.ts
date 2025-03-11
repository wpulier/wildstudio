export interface Project {
  name: string;
  slug: string;
  logo: string;
  description: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
}

export const projects: Project[] = [
  { 
    name: "With Grace AI", 
    slug: "with-grace-ai",
    logo: "/assets/images/projects/grace.png",
    description: "AI-assisted personal history documentation",
    overview: "With Grace AI is a platform leveraging artificial intelligence to assist individuals and families in documenting personal histories through interactive storytelling. The system intelligently integrates text, voice, and multimedia, offering structured narrative creation.",
    challenge: "Creating a flexible, user-friendly system capable of handling diverse media formats (text, voice, multimedia) seamlessly while ensuring robust backend performance and scalability.",
    solution: "Implemented an AI-driven backend utilizing natural language processing (NLP) and cloud storage solutions for multimedia integration, ensuring seamless narrative composition across different devices.",
    results: [
      "Backend optimized to handle multimedia seamlessly",
      "Increased scalability with efficient cloud-based processing pipelines",
      "Improved user interaction through structured and interactive storytelling capabilities"
    ]
  },
  { 
    name: "Renew", 
    slug: "renew",
    logo: "/assets/images/projects/renew.png",
    description: "Intuitive AI model training platform",
    overview: "Renew is an AI training web application that provides intuitive interfaces to simplify machine learning model creation and optimization, backed by robust and efficient backend processing.",
    challenge: "Simplifying the traditionally complex process of AI model training while maintaining extensive control and customization options, ensuring backend processing remains performant under high demand.",
    solution: "Developed a streamlined, user-friendly front-end coupled with scalable cloud-based infrastructure that supports parallelized model training and efficient handling of large data workloads.",
    results: [
      "Achieved 50% reduction in model training durations",
      "Enabled intuitive workflows accessible to non-technical users",
      "Increased backend processing efficiency and resource management"
    ]
  },
  { 
    name: "SogBots", 
    slug: "sogbots",
    logo: "/assets/images/projects/sog1.png",
    description: "Advanced animation techniques for digital and festival screenings",
    overview: "SogBots encompasses animations designed for digital and festival screenings, utilizing advanced animation techniques to deliver visually detailed narratives characterized by fluid, lifelike movement.",
    challenge: "Producing high-quality, fluid animations with precise motion tracking and seamless integration of character movements, requiring sophisticated animation tools.",
    solution: "Deployed advanced motion capture and animation software integrated with custom scripting to automate complex character interactions and streamline rendering processes.",
    results: [
      "Streamlined animation workflows, enhancing efficiency",
      "Delivered animations recognized in multiple international film festivals",
      "Improved quality and realism of animations through advanced motion capture integration"
    ]
  },
  { 
    name: "Roblox (Ulta Beauty)", 
    slug: "roblox-ulta-beauty",
    logo: "/assets/images/projects/ulta.png",
    description: "Immersive branded Roblox experience",
    overview: "Designed and implemented a branded Roblox experience for Ulta Beauty, featuring immersive gameplay mechanics that integrate seamlessly with brand identity and virtual avatar customization.",
    challenge: "Building a scalable Roblox environment that integrates Ulta Beauty's brand elements with interactive and engaging gameplay suitable for broad audiences.",
    solution: "Utilized Roblox Studio's native scripting alongside custom Lua development to create interactive experiences, avatar customization features, and brand-integrated gameplay loops.",
    results: [
      "Enhanced user engagement by 65% through gamification",
      "Expanded Ulta Beauty's digital presence into the Roblox metaverse",
      "Successfully developed an interactive and scalable Roblox world"
    ]
  },
  { 
    name: "XPrize Writing App", 
    slug: "xprize-writing-app",
    logo: "/assets/images/projects/xprize.png",
    description: "AI-powered content creation tools",
    overview: "The XPrize Writing App leverages advanced AI algorithms to enhance content creation, providing writers with intuitive tools for generating, refining, and managing narrative-driven content effectively.",
    challenge: "Implementing AI technology capable of supporting real-time content creation, feedback, and narrative structuring without sacrificing originality or user control.",
    solution: "Developed an AI-powered text-generation platform using machine learning models optimized for speed and coherence, combined with interactive editing and real-time collaboration tools.",
    results: [
      "Improved user productivity, reducing writing time by 45%",
      "Successfully integrated AI-driven content generation within collaborative editing interfaces",
      "Ensured high text quality through sophisticated language model optimization"
    ]
  },
  { 
    name: "Comic Generation App", 
    slug: "comic-generation-app",
    logo: "/assets/images/projects/comic.png",
    description: "AI-driven graphic novel and comic creation",
    overview: "The Comic Generation App streamlines the creation of graphic novels and comics using AI-driven generative art, enabling creators to produce professional-quality illustrations efficiently.",
    challenge: "Developing AI tools to automate artistic creation processes while maintaining stylistic consistency and narrative clarity.",
    solution: "Created advanced generative AI systems for visual artwork combined with narrative algorithms, allowing efficient panel creation and flexible, consistent design patterns.",
    results: [
      "Decreased illustration time by 60% through automated AI workflows",
      "Enhanced the visual storytelling experience via automatic panel layout",
      "Ensured seamless integration across digital platforms and traditional publishing workflows"
    ]
  }
]; 