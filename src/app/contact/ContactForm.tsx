'use client';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, like sending data to an API
    alert('Form submitted! In a real application, this would send data to your backend.');
  };

  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-3xl md:text-5xl font-bold italic mb-4 md:mb-6">
        Connect <span className="not-italic">with us</span>
      </h1>
      
      <p className="mb-6 md:mb-8 text-sm md:text-base">
        Let us know how we can help, and someone from our team
        will get back to you within 24 hours.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="block mb-1 md:mb-2 text-sm md:text-base">
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First name"
              className="w-full border border-gray-300 p-2 md:p-3 text-sm md:text-base"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block mb-1 md:mb-2 text-sm md:text-base">
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              className="w-full border border-gray-300 p-2 md:p-3 text-sm md:text-base"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 md:mb-2 text-sm md:text-base">
            Email*
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            className="w-full border border-gray-300 p-2 md:p-3 text-sm md:text-base"
            required
          />
        </div>

        <div>
          <label htmlFor="company" className="block mb-1 md:mb-2 text-sm md:text-base">
            Company*
          </label>
          <input
            type="text"
            id="company"
            placeholder="Your company name"
            className="w-full border border-gray-300 p-2 md:p-3 text-sm md:text-base"
            required
          />
        </div>

        <div>
          <label htmlFor="website" className="block mb-1 md:mb-2 text-sm md:text-base">
            Company website
          </label>
          <input
            type="url"
            id="website"
            placeholder="Website URL"
            className="w-full border border-gray-300 p-2 md:p-3 text-sm md:text-base"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 md:mb-2 text-sm md:text-base">
            How can we help?*
          </label>
          <textarea
            id="message"
            placeholder="Message"
            rows={4}
            className="w-full border border-gray-300 p-2 md:p-3 text-sm md:text-base"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 md:px-6 md:py-3 uppercase text-sm md:text-base mt-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
} 