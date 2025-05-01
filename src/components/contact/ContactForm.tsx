
import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Phone, Mail, MapPin, Share2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              title="Get in Touch"
              subtitle="We'd love to hear from you"
            />
            
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-6 animate-fade-in">
                <h3 className="text-xl font-serif mb-2">Thank You!</h3>
                <p>Your message has been sent successfully. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-maroon/80 mb-1">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gold/30 focus:border-gold focus:ring focus:ring-gold/20 bg-white p-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-maroon/80 mb-1">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gold/30 focus:border-gold focus:ring focus:ring-gold/20 bg-white p-3"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-maroon/80 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gold/30 focus:border-gold focus:ring focus:ring-gold/20 bg-white p-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-maroon/80 mb-1">Subject*</label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gold/30 focus:border-gold focus:ring focus:ring-gold/20 bg-white p-3"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Venue Booking">Venue Booking</option>
                      <option value="Event Planning">Event Planning</option>
                      <option value="Catering Services">Catering Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-maroon/80 mb-1">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gold/30 focus:border-gold focus:ring focus:ring-gold/20 bg-white p-3"
                  ></textarea>
                </div>
                
                <div>
                  <Button
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>
          
          <div>
            <div className="bg-white rounded-2xl p-8 card-shadow h-full">
              <h3 className="text-2xl font-serif text-maroon mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-apricot flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-maroon" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Our Location</h4>
                    <p className="text-maroon/70">
                      Bayview Convention Centre<br />
                      Beach Road, Vizag<br />
                      Andhra Pradesh, 530017, India
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-apricot flex items-center justify-center">
                      <Mail className="h-6 w-6 text-maroon" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email Us</h4>
                    <p className="text-maroon/70">
                      info@bayviewconvention.com<br />
                      bookings@bayviewconvention.com
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-apricot flex items-center justify-center">
                      <Phone className="h-6 w-6 text-maroon" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Call Us</h4>
                    <p className="text-maroon/70">
                      +91 891 123 4567<br />
                      +91 891 765 4321
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-apricot flex items-center justify-center">
                      <Share2 className="h-6 w-6 text-maroon" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Follow Us</h4>
                    <div className="flex space-x-3">
                      <a href="https://facebook.com" className="h-10 w-10 rounded-full bg-maroon/5 hover:bg-maroon/10 flex items-center justify-center transition-colors" aria-label="Facebook">
                        <svg className="h-5 w-5 text-maroon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://instagram.com" className="h-10 w-10 rounded-full bg-maroon/5 hover:bg-maroon/10 flex items-center justify-center transition-colors" aria-label="Instagram">
                        <svg className="h-5 w-5 text-maroon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.232.585 1.777 1.17.586.585.92 1.142 1.17 1.777.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.17 1.777c-.585.586-1.142.92-1.777 1.17-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.777-1.17c-.586-.585-.92-1.142-1.17-1.777-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.17-1.777A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://twitter.com" className="h-10 w-10 rounded-full bg-maroon/5 hover:bg-maroon/10 flex items-center justify-center transition-colors" aria-label="Twitter">
                        <svg className="h-5 w-5 text-maroon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="https://linkedin.com" className="h-10 w-10 rounded-full bg-maroon/5 hover:bg-maroon/10 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                        <svg className="h-5 w-5 text-maroon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
