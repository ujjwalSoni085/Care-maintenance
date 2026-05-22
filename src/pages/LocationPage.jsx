import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import LocationMap from '../components/location/LocationMap';
import Container from '../components/common/Container';

const LocationPage = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2670.22635520866!2d77.19134467408941!3d28.523847339010466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sf-321%2C%20old%20mp%20road%20lado%20sarai%20new%20delhi%20-%20110030!5e1!3m2!1sen!2sin!4v1778653233716!5m2!1sen!2sin";
  const address = "F-321, Old MB Road Lado Sarai New Delhi - 110030";
  
  // Directions link to standard Google Maps
  const directionsLink = "https://maps.app.goo.gl/WJ6HhND13T1ww4PL9";

  return (
    <div className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading 
          title="Our Office Location" 
          subtitle="Visit our office or get in touch. We are always here to help you with your home care and maintenance needs."
          centered={true}
          accentWord="Location"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Map Section */}
          <div className="md:col-span-1 lg:col-span-7 xl:col-span-8 flex flex-col">
            <LocationMap address={address} mapEmbedUrl={mapEmbedUrl} />
          </div>

          {/* Address Card */}
          <div className="md:col-span-1 lg:col-span-5 xl:col-span-4 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-8 font-heading">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 bg-white shadow-sm p-3 rounded-full text-accent mr-4">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-red-600">Office Address</h4>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      {address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 bg-white shadow-sm p-3 rounded-full text-accent mr-4">
                    <FaClock size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-red-600">Working Hours</h4>
                    <p className="text-gray-600 mt-1">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-500 text-sm">Sunday: 24/7 Emergencies Only</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 bg-white shadow-sm p-3 rounded-full text-accent mr-4">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-red-600">Contact Number</h4>
                    <p className="text-gray-600 mt-1">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 bg-white shadow-sm p-3 rounded-full text-accent mr-4">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-red-600">Email Address</h4>
                    <p className="text-gray-600 mt-1">contact@caremaintenance.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <Button 
                variant="primary" 
                size="lg"
                className="w-full shadow-md"
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default LocationPage;
