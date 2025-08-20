"use client"
import { useState } from "react";
import { Header, Footer } from "../../_component";
import bgImage from "../../assets/herosectionbgImage.png";
import { submitResellerRegistration, ResellerRegistrationData } from "../api";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function ResellerRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    consent: false
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  const validatePhone = (phone: string) => {
    // Use the library's built-in validation
    return phone && isValidPhoneNumber(phone);
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Website validation only if provided (optional field)
    if (formData.website.trim() && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = "Please enter a valid URL (e.g., https://example.com)";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to be contacted to proceed";
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
      const apiData: ResellerRegistrationData = {
        full_name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone, // Already includes country code from PhoneInput
        company: formData.company.trim() || undefined,
        website: formData.website.trim() || undefined,
      };

      const result = await submitResellerRegistration(apiData);

      setSubmitStatus('success');
      setSubmitMessage('Thank you for your application! We have received your reseller registration and will be in touch with you soon to discuss the next steps.');
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        consent: false
      });
    } catch (error) {
      console.error('Registration submission error:', error);
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
      <style jsx global>{`
        .PhoneInput {
          display: flex;
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          overflow: hidden;
          transition: all 0.2s;
        }
        .PhoneInput:focus-within {
          outline: none;
          box-shadow: 0 0 0 2px rgba(255, 66, 6, 0.5);
          border-color: #FF4206;
        }
        .PhoneInputCountry {
          border: none;
          border-right: 1px solid #e5e7eb;
          border-radius: 0;
          padding: 0.625rem 0.75rem;
          background: white;
          display: flex;
          align-items: center;
          min-width: 80px;
        }
        .PhoneInputCountry:focus {
          outline: none;
        }
        .PhoneInputCountrySelect {
          border: none;
          outline: none;
          background: transparent;
          cursor: pointer;
        }
        .PhoneInputInput {
          flex: 1;
          padding: 0.625rem 1rem;
          border: none;
          border-radius: 0;
          font-size: 1rem;
          outline: none;
          background: white;
        }
        .PhoneInputInput:focus {
          outline: none;
        }
        .PhoneInputInput:disabled {
          background-color: #f3f4f6;
          cursor: not-allowed;
        }
        .PhoneInputCountry:disabled {
          background-color: #f3f4f6;
          cursor: not-allowed;
        }
        .phone-input-error .PhoneInput {
          border-color: #ef4444;
        }
        .phone-input-error .PhoneInput:focus-within {
          box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.5);
          border-color: #ef4444;
        }
      `}</style>
      <Header />
      
      <div className="bg-cover bg-center bg-no-repeat flex-1" style={{
        backgroundImage: `url(${bgImage.src})`,
      }}>
        <div className="max-w-3xl mx-auto px-6 pt-6 md:pt-8 pb-6 md:pb-8">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 sofia">
              <strong>REGISTER TO APPLY</strong>
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Join the Capture AI Reseller Program and start growing your business today.
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

            {/* Full Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-[#FF4206]/50 focus:border-[#FF4206] transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed`}
                placeholder="Your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
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
                } focus:outline-none focus:ring-2 focus:ring-[#FF4206]/50 focus:border-[#FF4206] transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                international
                defaultCountry="US"
                value={formData.phone}
                onChange={(value) => {
                  setFormData(prev => ({ ...prev, phone: value || "" }));
                  // Clear error when user starts typing
                  if (errors.phone) {
                    setErrors(prev => ({ ...prev, phone: "" }));
                  }
                  // Clear submit status when user makes changes
                  if (submitStatus !== 'idle') {
                    setSubmitStatus('idle');
                    setSubmitMessage("");
                  }
                }}
                disabled={isSubmitting}
                className={`w-full ${errors.phone ? 'phone-input-error' : ''}`}
                placeholder="Enter phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Company Field (Optional) */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.company ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-[#FF4206]/50 focus:border-[#FF4206] transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed`}
                placeholder="Your company name"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-500">{errors.company}</p>
              )}
            </div>

            {/* Website Field (Optional) */}
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                Website <span className="text-gray-400">(optional)</span>
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
                } focus:outline-none focus:ring-2 focus:ring-[#FF4206]/50 focus:border-[#FF4206] transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed`}
                placeholder="https://yourwebsite.com"
              />
              {errors.website && (
                <p className="mt-1 text-sm text-red-500">{errors.website}</p>
              )}
            </div>

            {/* Consent Checkbox */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="mt-0.5 w-4 h-4 text-[#FF4206] border-gray-300 rounded focus:ring-[#FF4206] disabled:cursor-not-allowed"
                />
                <span className="ml-2 text-sm text-gray-700">
                  I'm happy for someone to get in touch with me to discuss the reseller program.
                  <span className="text-red-500"> *</span>
                </span>
              </label>
              {errors.consent && (
                <p className="mt-1 text-sm text-red-500 ml-6">{errors.consent}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-12 bg-[#FF4206] rounded-[8px] text-white font-bold text-base ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FF4206]/90'
                } transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4206]/50`}
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}
              </button>
            </div>

            {/* Additional Information */}
            <div className="text-center mt-4">
              <p className="text-gray-600 text-sm">
                Questions about the reseller program? Email us at:{' '}
                <a href="mailto:support@cptr.ai" className="text-[#FF4206] hover:underline font-medium">
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
