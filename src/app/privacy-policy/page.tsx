"use client"
import { Header, Footer } from "../_component";

export default function PrivacyPolicy() {
  return (
    <div className="pt-20">
      <Header />
      
      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Capture AI – Privacy Policy
            </h1>
            
            <p className="text-sm text-gray-600 mb-8 text-center">
              Last Updated: {new Date().toLocaleDateString('en-GB')}
            </p>
            
            <div className="space-y-8">
              <section>
                <p className="text-gray-700 leading-7 mb-6">
                  High Jump Digital Limited (trading as "Capture AI") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our Capture AI platform and services (the "Service"). This policy applies to our website (https://cptr.ai), user dashboard (https://app.cptr.ai), and any related applications, integrations, or services.
                </p>
                
                <p className="text-gray-700 leading-7">
                  By using our Service, you consent to the collection and use of your information as described in this Privacy Policy. If you do not agree with this policy, please do not use our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Personal Information:</h3>
                    <p className="text-gray-700 leading-7">
                      When you create an account or use our Service, we may collect personal information such as your name, email address, billing information, and contact details. This information is necessary to provide you with our services and manage your account.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Usage Data:</h3>
                    <p className="text-gray-700 leading-7">
                      We automatically collect information about how you use our Service, including your IP address, browser type, device information, pages visited, features used, and the time and duration of your activities. This helps us improve our Service and provide technical support.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Content Data:</h3>
                    <p className="text-gray-700 leading-7">
                      We collect and store the content you upload to build your chatbot's knowledge base, including documents, text, images, and URLs. We also store conversation logs between your chatbot and end-users, including any lead information captured through your chatbot.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Cookies and Similar Technologies:</h3>
                    <p className="text-gray-700 leading-7">
                      We use cookies, web beacons, and similar tracking technologies to enhance your experience, remember your preferences, and analyze how our Service is used. You can control cookie settings through your browser preferences.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Service Provision:</h3>
                    <p className="text-gray-700 leading-7">
                      We use your information to provide, maintain, and improve our Service, including processing your requests, managing your account, providing customer support, and enabling chatbot functionality.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Communication:</h3>
                    <p className="text-gray-700 leading-7">
                      We may use your contact information to send you service-related notifications, updates about our Service, billing information, and responses to your inquiries.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Analytics and Improvement:</h3>
                    <p className="text-gray-700 leading-7">
                      We analyze usage patterns and feedback to improve our Service, develop new features, and enhance user experience. This may include analyzing conversation data to improve AI response quality.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Legal Compliance:</h3>
                    <p className="text-gray-700 leading-7">
                      We may use and disclose your information as required by law, to comply with legal obligations, protect our rights, prevent fraud, and ensure the security of our Service.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Third-Party Service Providers:</h3>
                    <p className="text-gray-700 leading-7">
                      We work with trusted third-party providers to deliver our Service, including Voiceflow for chat widget functionality and OpenAI for AI language processing. Your content may be processed by these providers in accordance with their privacy policies and our agreements with them.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Business Transfers:</h3>
                    <p className="text-gray-700 leading-7">
                      In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, subject to the same privacy protections outlined in this policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Legal Requirements:</h3>
                    <p className="text-gray-700 leading-7">
                      We may disclose your information when required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security and Retention</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Security Measures:</h3>
                    <p className="text-gray-700 leading-7">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Data Retention:</h3>
                    <p className="text-gray-700 leading-7">
                      We retain your personal information for as long as necessary to provide our Service, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your data subject to certain legal and operational requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">International Transfers:</h3>
                    <p className="text-gray-700 leading-7">
                      Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights and Choices</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Access and Correction:</h3>
                    <p className="text-gray-700 leading-7">
                      You have the right to access, update, and correct your personal information. You can manage most of your information through your account dashboard.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Data Portability:</h3>
                    <p className="text-gray-700 leading-7">
                      You have the right to export your data in a portable format. Our Service provides tools to download your conversation transcripts, lead information, and knowledge base content.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Deletion:</h3>
                    <p className="text-gray-700 leading-7">
                      You may request deletion of your personal information, subject to certain legal and operational requirements. Account cancellation procedures are outlined in our Terms of Service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Marketing Communications:</h3>
                    <p className="text-gray-700 leading-7">
                      You can opt out of marketing communications at any time by following the unsubscribe instructions in our emails or contacting us directly.
                    </p>
                  </div>
                </div>
              </section>

              {/* Complete Privacy Policy PDF Section */}
              <div className="p-8 rounded-lg border" style={{ backgroundColor: '#f3f5f7', borderColor: '#dce1e6' }}>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Complete Privacy Policy
                  </h3>
                  <p className="text-gray-700 mb-6">
                    This page shows the key sections of our Privacy Policy. For the complete document including detailed information about data processing, legal bases, additional rights under GDPR/CCPA, cookie policies, children's privacy, and comprehensive contact information for data protection inquiries, please download the full document.
                  </p>
                  <a 
                    href="/privacy-policy.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: '#FF4206' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Complete Privacy Policy (PDF)
                  </a>
                  <p className="text-sm text-gray-600 mt-3">
                    The PDF contains the complete privacy policy with all detailed provisions and legal information.
                  </p>
                </div>
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
                <p className="text-gray-700 leading-7 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-800">High Jump Digital Limited (Capture AI)</p>
                  <p className="text-gray-700">Address: 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
                  <p className="text-gray-700">Email: support@cptr.ai</p>
                  <p className="text-gray-700">Website: https://cptr.ai</p>
                </div>
                <p className="text-gray-700 leading-7 mt-4">
                  We are committed to addressing your privacy concerns and will respond to your inquiries in a timely manner. Your privacy and trust are important to us.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
