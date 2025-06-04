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
        <h3 className="text-2xl font-bold mb-4">Join Our Monthly Dispatch</h3>

        <p className="mb-6">
          Insights on design, automation and building for the future.
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