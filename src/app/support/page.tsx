"use client"
import { useState } from "react";
import { Header, Footer } from "../_component";
import { FilledButton } from "../_component/FilledButton";
import bgImage from "../assets/herosectionbgImage.png";
import { submitSupportTicket, SupportTicketData } from "./api";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    department: "",
    message: "",
    confirmAccount: false
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }

    // Clear submit status when user makes changes
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setSubmitMessage("");
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.website.trim()) {
      newErrors.website = "Website is required";
    } else if (!/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = "Please enter a valid URL (e.g., https://example.com)";
    }

    if (!formData.department) {
      newErrors.department = "Please select a department";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (formData.department === "technical" && !formData.confirmAccount) {
      newErrors.confirmAccount = "Please confirm that the email and website are linked to your account";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started');
    
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }

    console.log('Form validation passed, submitting...');
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage("");

    try {
      // Prepare data for API call (convert to backend format)
      const apiData: SupportTicketData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        website: formData.website.trim(),
        department: formData.department as 'technical' | 'sales' | 'other',
        message: formData.message.trim(),
        confirm_account: formData.confirmAccount
      };

      const result = await submitSupportTicket(apiData);

      setSubmitStatus('success');
      setSubmitMessage(`Thank you for your submission! Your support ticket #${result.ticket_number} has been created. We'll get back to you soon at ${formData.email}.`);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        website: "",
        department: "",
        message: "",
        confirmAccount: false
      });
    } catch (error) {
      console.error('Support submission error:', error);
      setSubmitStatus('error');
      
      if (error instanceof Error) {
        setSubmitMessage(`Error: ${error.message}`);
      } else {
        setSubmitMessage('An unexpected error occurred. Please try again or contact us directly at support@cptr.ai');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen flex flex-col">
      <Header />
      
      <div className="bg-cover bg-center bg-no-repeat flex-1" style={{
        backgroundImage: `url(${bgImage.src})`,
      }}>
        <div className="max-w-3xl mx-auto px-6 pt-6 md:pt-8 pb-6 md:pb-8">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 sofia">
              <strong>GET SUPPORT</strong>
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8" style={{
            boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.2), 0 4px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      {submitMessage}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">
                      {submitMessage}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Website Field */}
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                Website <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.website ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed`}
                placeholder="https://yourwebsite.com"
              />
              {errors.website && (
                <p className="mt-1 text-sm text-red-500">{errors.website}</p>
              )}
            </div>

            {/* Department Field */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                Department <span className="text-red-500">*</span>
              </label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full pl-3 pr-10 py-2.5 rounded-lg border ${
                  errors.department ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white disabled:bg-gray-100 disabled:cursor-not-allowed`}
              >
                <option value="">Select a department</option>
                <option value="technical">Technical support</option>
                <option value="sales">Sales</option>
                <option value="other">Other</option>
              </select>
              {errors.department && (
                <p className="mt-1 text-sm text-red-500">{errors.department}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                disabled={isSubmitting}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed`}
                placeholder="Please describe your issue or question in detail..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Conditional Checkbox for Technical Support */}
            {formData.department === "technical" && (
              <div className="bg-gray-50 p-3 rounded-lg">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="confirmAccount"
                    checked={formData.confirmAccount}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="mt-0.5 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary disabled:cursor-not-allowed"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I confirm that the email and website provided above are linked to my Capture AI account
                    <span className="text-red-500"> *</span>
                  </span>
                </label>
                {errors.confirmAccount && (
                  <p className="mt-1 text-sm text-red-500 ml-6">{errors.confirmAccount}</p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-12 bg-primary rounded-[8px] text-white font-bold text-base ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'
                } transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50`}
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT REQUEST"}
              </button>
            </div>

            {/* Additional Information */}
            <div className="text-center mt-4">
              <p className="text-gray-600 text-sm">
                You can also email us at:{' '}
                <a href="mailto:support@cptr.ai" className="text-primary hover:underline font-medium">
                  support@cptr.ai
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 