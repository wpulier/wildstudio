import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 mt-8 md:mt-20">
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
          The Design Studio for 
          <div className="mt-2">the <span className="italic">Digital Age</span>.</div>
        </h1>
        
        <p className="mt-6 md:mt-8 max-w-2xl text-center text-sm md:text-base">
          From digital interfaces to brand identities to immersive apps, we design
          products for the future. We don't follow trends; we create
          them—driving billion-dollar businesses.
        </p>
        
        <Link href="/contact" className="mt-6 md:mt-8 bg-green-500 text-white px-5 py-2.5 md:px-6 md:py-3 inline-block text-sm md:text-base">
          CONTACT US
        </Link>
      </section>

      {/* Clients Section */}
      <section className="px-4 md:px-12 py-10 md:py-16 mx-auto w-full max-w-4xl">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-10">
          Leaders at billion dollar brands choose
          <div className="mt-2">Wild Studios to define their <span className="italic">future...</span></div>
        </h2>

        {/* Client Table - Scrollable on mobile */}
        <div className="mt-8 md:mt-12 overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b">
                <th className="p-3 md:p-4 font-bold text-center border-r">COMPANY</th>
                <th className="p-3 md:p-4 font-bold text-center border-r">CONTACT</th>
                <th className="p-3 md:p-4 font-bold text-center">INDUSTRY</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3 md:p-4 flex justify-center items-center border-r">
                    <img src={client.logo} alt={client.name} className="h-6 md:h-8" />
                  </td>
                  <td className="p-3 md:p-4 text-center border-r text-sm md:text-base">{client.contact}</td>
                  <td className="p-3 md:p-4 text-center text-sm md:text-base">{client.industry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

// Example client data
const clients = [
  { 
    name: "Spotify", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/232px-Spotify_icon.svg.png", 
    contact: "CPO", 
    industry: "MUSIC" 
  },
  { 
    name: "Adobe", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/220px-Adobe_Corporate_Logo.png", 
    contact: "CEO", 
    industry: "SOFTWARE" 
  },
  { 
    name: "Tesla", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/220px-Tesla_Motors.svg.png", 
    contact: "HEAD OF DESIGN", 
    industry: "AUTOMOTIVE" 
  },
  { 
    name: "Airbnb", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/220px-Airbnb_Logo_B%C3%A9lo.svg.png", 
    contact: "FOUNDER/CEO", 
    industry: "TRAVEL" 
  },
  { 
    name: "Apple", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/220px-Apple_logo_black.svg.png", 
    contact: "SVP", 
    industry: "TECHNOLOGY" 
  },
  { 
    name: "Slack", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/220px-Slack_icon_2019.svg.png", 
    contact: "CMO", 
    industry: "SAAS" 
  }
]; 