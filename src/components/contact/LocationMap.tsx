
import React from 'react';
import { SectionHeading } from '../common/SectionHeading';

export const LocationMap: React.FC = () => {
  return (
    <section className="section-padding bg-apricot/30">
      <div className="container-custom">
        <SectionHeading
          title="Find Us"
          subtitle="Located on the beautiful Beach Road of Visakhapatnam"
          center={true}
        />
        
        <div className="mt-8 rounded-2xl overflow-hidden card-shadow">
          <div className="aspect-[16/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30459.91554248905!2d83.30801772599811!3d17.73540397297964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395bedc7efb603%3A0x22af19f07b6bb5ed!2sBeach%20Rd%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1714958246371!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bayview Convention Centre Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
