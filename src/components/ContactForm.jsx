import React, { useState } from 'react';

const ContactForm = () => {
  const [formType, setFormType] = useState('Enquiry');
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear the error for the field being edited
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid
      // You can send the data to your backend or perform other actions here
      console.log('Form submitted:', formData);

      // Clear the form
      setFormData({
        fullName: '',
        contactNumber: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      // Form has errors
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Validate Full Name (required)
    if (!data.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }

    // Validate Email (optional but must be valid if provided)
    if (data.email.trim() && !isValidEmail(data.email)) {
      errors.email = 'Invalid email address';
    }

    // You can add more validation rules for other fields as needed

    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 p-6 m-10">
      <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 hover:text-[#f472b6]">
          {formType} Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 md:flex md:space-x-2">
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Full Name*"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="number"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Contact Number"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Your Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Subject"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded-md"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 hover:text-[#f472b6]">
          {formType === 'Enquiry' ? 'Customer Feedback' : 'Enquiry'} Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 md:flex md:space-x-2">
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Full Name*"
              />
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="number"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Contact Number"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Subject"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded-md"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
