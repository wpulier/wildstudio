'use client';

export default function NewsletterSection() {
  const handleJoinWaitlist = () => {
    alert('Thank you for joining our waitlist!');
    // In a real app, this would submit to a backend service
  };

  return (
    <div className="mb-8 md:mb-0">
      <div className="border border-white p-4 inline-block mb-6">
        <span className="text-xl italic font-bold">Wild Studios</span>
      </div>
      
      <div className="max-w-md">
        <h3 className="text-2xl font-bold mb-2">
          Exclusive newsletter for 
        </h3>
        <h3 className="text-2xl font-bold mb-6">
          500 of our <span className="italic">closest friends</span>.
        </h3>
        
        <p className="mb-6">
          A curated hit list of our favorite things happening
          across product, design, and building for the future.
        </p>
        
        <button 
          className="bg-white text-black px-6 py-2 uppercase"
          onClick={handleJoinWaitlist}
        >
          Join waitlist
        </button>
      </div>
    </div>
  );
} 