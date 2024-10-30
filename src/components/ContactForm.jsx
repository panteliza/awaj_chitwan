import React from 'react';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactForm = () => {
  const phoneNumber = '+977 9845192771';
  const email = 'elizapant.github@gmail.com';
  
  const handleEmailSend = (e) => {
    e.preventDefault();
    const form = e.target;
    const subject = form.subject.value;
    const message = form.message.value;
    window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
    form.reset(); // Reset the form after sending
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="mb-4">
        <p className="text-lg">Phone: {phoneNumber}</p>
      </div>
      <div className="flex space-x-4 mb-4">
        <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-500 text-3xl" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-600 text-3xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-400 text-3xl" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 text-3xl" />
        </a>
      </div>
      <form onSubmit={handleEmailSend} className="flex flex-col w-full max-w-md">
        <input 
          type="text" 
          name="subject" 
          placeholder="Subject" 
          className="p-2 border rounded mb-2"
          required 
        />
        <textarea 
          name="message" 
          placeholder="Message" 
          rows="4" 
          className="p-2 border rounded mb-4"
          required 
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
