'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    source: '',
    numberOfUsers: '',
  });

  const [status, setStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ message: '', isError: false, isSubmitting: true });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        source: '',
        numberOfUsers: '',
      });

      setStatus({
        message: 'Thank you for your message. We will get back to you soon!',
        isError: false,
        isSubmitting: false
      });
    } catch (error) {
      setStatus({
        message: 'Failed to send message. Please try again.',
        isError: true,
        isSubmitting: false
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#017bad] focus:ring-[#017bad]"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#017bad] focus:ring-[#017bad]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#017bad] focus:ring-[#017bad]"
        />
      </div>

      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
          Company Name *
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          required
          value={formData.companyName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#017bad] focus:ring-[#017bad]"
        />
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#017bad] focus:ring-[#017bad]"
        />
      </div>

      <div>
        <label htmlFor="source" className="block text-sm font-medium text-gray-700">
          How did you hear about us? *
        </label>
        <select
          id="source"
          name="source"
          required
          value={formData.source}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#017bad] focus:ring-[#017bad]"
        >
          <option value="">Please select</option>
          <option value="Search Engine">Search Engine</option>
          <option value="Social Media">Social Media</option>
          <option value="Referral">Referral</option>
          <option value="Advertisement">Advertisement</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="numberOfUsers" className="block text-sm font-medium text-gray-700">
          Number of Users *
        </label>
        <input
          type="number"
          id="numberOfUsers"
          name="numberOfUsers"
          required
          min="1"
          value={formData.numberOfUsers}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#017bad] focus:ring-[#017bad]"
        />
      </div>

      {status.message && (
        <div className={`p-4 rounded-md ${status.isError ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
          {status.message}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={status.isSubmitting}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#017bad] hover:bg-[#015d8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#017bad] disabled:opacity-50"
        >
          {status.isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
} 