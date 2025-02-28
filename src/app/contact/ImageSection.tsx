'use client';

export default function ImageSection() {
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
      <div className="w-full h-48 md:h-96 relative">
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <img 
            src="/bell.png" 
            alt="Service bell" 
            className="max-w-full max-h-full p-4"
            onError={(e) => {
              const target = e.currentTarget;
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '<p class="text-center p-4 text-gray-500">Contact us for exceptional service</p>';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
} 