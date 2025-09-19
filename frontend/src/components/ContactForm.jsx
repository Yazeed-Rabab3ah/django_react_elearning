import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Please accept the terms.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await axios.post('http://127.0.0.1:8000/contact/', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '', acceptTerms: false });
      setErrors({});
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const alertIsSuccess = submitMessage && submitMessage.toLowerCase().includes('success');

  return (
    <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      {submitMessage && (
        <div
          className={`mb-4 rounded-md border px-3 py-2 text-sm ${
            alertIsSuccess
              ? 'bg-green-50 text-green-800 border-green-200'
              : 'bg-red-50 text-red-800 border-red-200'
          }`}
          role="status"
        >
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`mt-1 block w-full rounded-md border ${
              errors.name ? 'border-red-400' : 'border-gray-300'
            } bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`mt-1 block w-full rounded-md border ${
              errors.email ? 'border-red-400' : 'border-gray-300'
            } bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`mt-1 block w-full rounded-md border ${
              errors.message ? 'border-red-400' : 'border-gray-300'
            } bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            placeholder="Type your message..."
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        {/* Terms */}
        <div className="flex items-center">
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            checked={formData.acceptTerms}
            onChange={handleChange}
            aria-invalid={!!errors.acceptTerms}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="acceptTerms" className="ml-2 text-sm text-gray-700">
            I accept the{' '}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms
            </a>
          </label>
        </div>
        {errors.acceptTerms && (
          <p className="text-xs text-red-600 -mt-2">{errors.acceptTerms}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-black px-4 py-2.5 text-white text-sm font-medium hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
