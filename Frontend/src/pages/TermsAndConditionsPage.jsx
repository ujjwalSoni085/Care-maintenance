import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Helmet>
        <title>Privacy Policy & Terms | Care Maintenance</title>
        <meta name="description" content="Privacy Policy and Terms and Conditions for Care Maintenance Services." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 font-outfit mb-4">
            Privacy Policy
          </h1>
          
          <div className="text-sm text-slate-500 mb-8 pb-8 border-b border-gray-100 flex flex-col sm:flex-row sm:justify-between">
            <p><strong>Website:</strong> <a href="https://www.carems.in" className="text-primary-600 hover:underline">www.carems.in</a></p>
            <p><strong>Last Updated:</strong> July 7, 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p>
              Welcome to CAREMS (<a href="https://www.carems.in" className="text-primary-600 hover:underline">www.carems.in</a>). We provide Annual Maintenance Contract (AMC) and on-demand home services including Electrician, Plumber, Carpenter, AC Service, AC Maintenance, Pest Control, and Termite Treatment.
            </p>
            <p>
              Your trust matters to us. This Privacy Policy explains what information we collect when you use our website or book a service with us, why we collect it, how we use it, and what choices you have. Please take a moment to read it. By using <a href="https://www.carems.in" className="text-primary-600 hover:underline">www.carems.in</a>, you agree to the practices described below.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Information We Collect</h2>
            <p>When you visit our website, book a service, or contact us, we may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal details:</strong> Your name, phone number, email address, and residential/service address.</li>
              <li><strong>Booking details:</strong> The type of service you request (electrician, plumber, carpenter, AC service, AC maintenance, pest control, or termite treatment), preferred date and time, and any special instructions.</li>
              <li><strong>Payment information:</strong> If you make a payment online, our payment partner processes your payment details. We do not store your full card, UPI, or bank details on our servers.</li>
              <li><strong>Communication data:</strong> Messages, calls, or emails you send us for support, complaints, or feedback.</li>
              <li><strong>Technical data:</strong> Your IP address, browser type, device information, and how you use our website (through cookies and similar technologies), so we can keep the site running smoothly.</li>
            </ul>
            <p>We only collect information that helps us serve you better — we don't ask for anything we don't need.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirm and schedule your service bookings.</li>
              <li>Assign the right technician (electrician, plumber, carpenter, AC technician, or pest control expert) for your job.</li>
              <li>Contact you about your booking, AMC renewal, or service updates.</li>
              <li>Process payments and send invoices/receipts.</li>
              <li>Respond to your questions, complaints, or service feedback.</li>
              <li>Improve our website, services, and customer experience.</li>
              <li>Send you offers, AMC renewal reminders, or updates about our services — only if you've agreed to receive them.</li>
              <li>Meet legal or regulatory requirements, if applicable.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Sharing of Information</h2>
            <p>We do not sell your personal information to anyone. We may share your details only in these situations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>With our service technicians/partners:</strong> so they can visit your location and complete the job you booked.</li>
              <li><strong>With payment gateway providers:</strong> to process your online payments securely.</li>
              <li><strong>With SMS/email/notification service providers:</strong> to send booking confirmations and reminders.</li>
              <li><strong>If required by law:</strong> such as a request from a government or law enforcement authority.</li>
              <li><strong>Business transfers:</strong> if CAREMS is ever involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that process.</li>
            </ul>
            <p>Every partner we work with is expected to keep your information safe and use it only for the purpose it was shared.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Cookies</h2>
            <p>Our website may use cookies to remember your preferences, understand how visitors use our site, and improve your browsing experience. You can disable cookies through your browser settings, though some parts of the website may not work as smoothly without them.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Data Security</h2>
            <p>We take reasonable technical and organisational measures to protect your personal information from unauthorized access, misuse, or loss. While we do our best to keep your data safe, please understand that no method of online transmission or storage is 100% secure.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6. Data Retention</h2>
            <p>We keep your personal information only for as long as it's needed — to complete your service, manage your AMC, handle any warranty/complaint period, or meet legal requirements. After that, we take steps to delete or anonymize it.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">7. Your Choices and Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ask us what personal information we hold about you.</li>
              <li>Request corrections if any of your details are incorrect.</li>
              <li>Ask us to delete your information, subject to any ongoing service or legal obligations.</li>
              <li>Opt out of promotional messages or AMC reminder calls/SMS/emails at any time by contacting us.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">8. Children's Privacy</h2>
            <p>Our services are meant for adults booking home/AMC services. We do not knowingly collect personal information from children.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">9. Third-Party Links</h2>
            <p>Our website may contain links to other websites (such as payment gateways or social media pages). We are not responsible for the privacy practices of these third-party sites, so we recommend reading their privacy policies separately.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to check back periodically.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">11. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your information, please reach out to us:</p>
            <div className="bg-slate-50 p-6 rounded-lg mt-4 mb-8">
              <p><strong>Website:</strong> <a href="https://www.carems.in" className="text-primary-600 hover:underline">www.carems.in</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@carems.in" className="text-primary-600 hover:underline">info@carems.in</a></p>
              <p><strong>Phone:</strong> <a href="tel:01141085151" className="text-primary-600 hover:underline">01141085151</a></p>
              <p><strong>Address:</strong> F-321, Opp. Shiv Mandir, Lado Sarai, Saket, New Delhi - 110030</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
