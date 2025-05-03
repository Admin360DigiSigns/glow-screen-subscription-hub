
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Hakka Nation",
    role: "Restaurant",
    content: "The digital screens from 360 DigiSigns have completely transformed our restaurant. Our specials and promotions get noticed instantly, and sales have increased significantly since installation.",
    logo: "/lovable-uploads/47882787-f5cf-418b-999e-1065f6b76035.png"
  },
  {
    name: "Symposium Cafe",
    role: "Restaurant & Bar",
    content: "We've been using 360 DigiSigns for over a year now, and the impact on our business has been tremendous. The screens are incredibly bright, reliable, and easy to update.",
    logo: "/lovable-uploads/47882787-f5cf-418b-999e-1065f6b76035.png"
  },
  {
    name: "Cajun Chicken",
    role: "Fast Food Restaurant",
    content: "The customer service at 360 DigiSigns is exceptional. They helped us set everything up, trained our staff, and are always available when we need assistance with content updates.",
    logo: "/lovable-uploads/47882787-f5cf-418b-999e-1065f6b76035.png"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Trusted By <span className="text-rgb-animated">Leading Businesses</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our clients are saying about our digital signage solutions and how they're transforming their business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="flex flex-shrink-0 h-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 flex-grow">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center mt-auto">
                <div className="bg-gray-100 rounded-lg p-2 mr-4">
                  {testimonial.logo ? (
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.name} logo`}
                      className="h-10 w-auto object-contain"
                    />
                  ) : (
                    <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <img src="/lovable-uploads/f1f53656-270a-4992-94d3-a3116d6bc129.png" alt="360 DigiSigns Logo" className="h-12 object-contain" />
            <img src="/lovable-uploads/47882787-f5cf-418b-999e-1065f6b76035.png" alt="Client Logo" className="h-12 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
