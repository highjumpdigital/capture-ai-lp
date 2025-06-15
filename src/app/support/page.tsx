"use client"
import { useState } from "react";
import { Header, Footer } from "../_component";
import { FilledButton } from "../_component/FilledButton";
import bgImage from "../assets/herosectionbgImage.png";

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
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // API submission will be added here
    console.log("Form data:", formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your submission. We'll get back to you soon!");
      // Reset form
      setFormData({
        name: "",
        email: "",
        website: "",
        department: "",
        message: "",
        confirmAccount: false
      });
    }, 1000);
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
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors`}
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
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors`}
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
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.website ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors`}
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
                className={`w-full pl-3 pr-10 py-2.5 rounded-lg border ${
                  errors.department ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white`}
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
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none`}
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
                    className="mt-0.5 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
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
              <FilledButton
                className={`w-full h-12 bg-primary rounded-[8px] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                buttonTitle={isSubmitting ? "SUBMITTING..." : "SUBMIT REQUEST"}
                onClick={() => {}}
                titleClassName="text-white font-bold text-base"
              />
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