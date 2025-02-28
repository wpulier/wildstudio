import ImageSection from './ImageSection';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div className="px-4 md:px-12 py-6 md:py-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-6xl mx-auto">
        {/* Contact Form Section - client component */}
        <ContactForm />

        {/* Image Section - client component */}
        <ImageSection />
      </div>
    </div>
  );
} 