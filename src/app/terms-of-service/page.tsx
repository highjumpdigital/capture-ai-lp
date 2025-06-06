"use client"
import { Header, Footer } from "../_component";

export default function TermsOfService() {
  return (
    <div className="pt-20">
      <Header />
      
      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Capture AI – Terms of Service
            </h1>
            
            <p className="text-sm text-gray-600 mb-8 text-center">
              Last Updated: {new Date().toLocaleDateString('en-GB')}
            </p>
            
            <div className="space-y-8">
              <section>
                <p className="text-gray-700 leading-7 mb-6">
                  Welcome to Capture AI. These Terms of Service ("Terms") govern your access to and use of the Capture AI platform and services (the "Service") provided by High Jump Digital Limited (trading as "Capture AI"), a company registered in the United Kingdom with a business address at 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ ("Company", "we", "us", or "our"). The Service includes our website (https://cptr.ai) and user dashboard (https://app.cptr.ai), as well as any related applications, integrations, or services. By signing up for an account, starting a free trial, or otherwise using the Service, you ("User", "you", or "your") acknowledge that you have read, understood, and agree to be bound by these Terms, including any policies referenced herein. If you do not agree with these Terms, you must not use the Service.
                </p>
                
                <p className="text-gray-700 leading-7">
                  Please also review our Privacy Policy (available on our website) to understand how we collect, use, and protect your personal data. By using the Service, you consent to our collection and use of your information as described in the Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Account Registration and Eligibility</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Eligibility:</h3>
                    <p className="text-gray-700 leading-7">
                      You must be at least 18 years old (or the age of legal majority in your jurisdiction) to register or use the Service. By creating an account or using the Service, you represent that you meet this eligibility requirement. If you are using the Service on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms, and in that case "you" will refer to the entity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Account Creation:</h3>
                    <p className="text-gray-700 leading-7">
                      To access certain features of Capture AI, you will need to create an account. You agree to provide true, accurate, current, and complete information during signup and to keep your account information updated. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You must promptly notify us of any unauthorized use of your account or security breach. We are not liable for any loss or damage arising from your failure to safeguard your account information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Account Use:</h3>
                    <p className="text-gray-700 leading-7">
                      Each account is intended for the use of the individual or single entity that registered. Unless expressly permitted, you must not share your account credentials with others or use another person's account. We reserve the right to suspend or terminate accounts that we suspect are being used in violation of these Terms or for unauthorized purposes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Account Security:</h3>
                    <p className="text-gray-700 leading-7">
                      You are responsible for configuring your systems and using up-to-date software in order to access the Service. We employ security measures to protect the Service, but we cannot guarantee absolute security. You use the Service at your own risk, and you are responsible for any User Content (defined below) lost or unrecoverable due to your failure to maintain your own backups or to follow security guidelines.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Acceptance of Terms:</h3>
                    <p className="text-gray-700 leading-7">
                      By accessing or using the Service, you accept these Terms and any other policies or guidelines we provide. If you do not agree, do not use the Service. Continued use of the Service following notice of changes (see Section 15) constitutes acceptance of the updated Terms.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of the Service</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Platform Overview:</h3>
                    <p className="text-gray-700 leading-7 mb-3">
                      Capture AI is a cloud-based chatbot management tool that enables users to create and deploy AI-driven chatbots on their own websites or platforms. Key features of the Service include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>A 14-day free trial for new users to evaluate the platform's features before committing to a paid plan.</li>
                      <li>Subscription Plans: Paid tiers of service (such as Basic, Starter Kit, and Infinity Pro) offering varying levels of features, usage limits, and support.</li>
                      <li>Knowledge Base Uploads: The ability to upload content – including documents, text, images, and URLs – to build a knowledge base that the chatbot can use when responding to inquiries.</li>
                      <li>Chatbot Configuration: Tools to configure chatbot behavior, including conversation flows, lead-capture forms, and custom Q&A pairs. Users can design how the chatbot interacts with end-users and captures lead information.</li>
                      <li>Website Integration: A script or widget (powered by third-party technology) that can be installed on the user's own website to deploy the chatbot for 24/7 interactions with visitors.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Third-Party Integrations:</h3>
                    <p className="text-gray-700 leading-7">
                      Capture AI integrates certain third-party services to provide its functionality. In particular, our chat widget interface is provided by Voiceflow, and the chatbot's conversational responses are generated using large language model APIs from OpenAI (among possibly other AI providers). You acknowledge that when you use Capture AI, your content and chatbot interactions may be processed by these third-party services. Your use of the Service may therefore also be subject to the terms and acceptable use policies of those third-party providers (e.g., OpenAI's usage policies), and you agree to comply with any such additional terms. While we carefully choose third-party tools to enhance our Service, we do not control their services and assume no responsibility for the acts, omissions, or performance of any third-party service. If any third-party service ceases to be available or imposes terms that affect your use, we will, if possible, attempt to mitigate the impact, but we shall not be liable for any loss of functionality or content resulting from third-party services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Service Availability:</h3>
                    <p className="text-gray-700 leading-7">
                      We will use reasonable efforts to ensure the Service is available and functional at all times, but we do not guarantee uninterrupted or error-free operation. From time to time, we may perform maintenance or updates that temporarily affect availability. We reserve the right to modify or discontinue any part of the Service at any time (see Section 15). You agree that your purchase of the Service is not contingent on the delivery of any future functionality or features, or dependent on any oral or written public comments we make regarding future features.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Free Trial and Subscription Plans</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">14-Day Free Trial:</h3>
                    <p className="text-gray-700 leading-7">
                      New users are entitled to a one-time free trial of the Service for a period of fourteen (14) days, unless otherwise extended or offered by us in writing. During the free trial, you will have access to the platform's features (possibly with certain usage limits) so that you can evaluate the Service's suitability for your needs. At the end of the trial period, your account will require activation of a paid subscription (or selection of a free/basic plan, if available) to continue using the Service without interruption. If you do not subscribe to a paid plan before the trial ends, your account may be automatically moved to a limited free plan or suspended. Trials are provided "as-is" and may be subject to limitations; we reserve the right to modify or discontinue trial offers at any time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Subscription Plans:</h3>
                    <p className="text-gray-700 leading-7">
                      We offer several paid subscription tiers, currently known as Basic, Starter Kit, and Infinity Pro (each a "Subscription Plan" or "Plan"). Details of the current Plans, including their features, limits (such as number of chatbot interactions, knowledge base size, user seats, etc.), and pricing, are provided on our website or during the sign-up process. By subscribing to a Plan, you gain access to the features and services of that Plan from the date of subscription. All Subscription Plans are billed on a recurring basis (e.g., monthly or annually, as specified when you sign up). <strong>YOU AUTHORIZE US (OR OUR THIRD-PARTY PAYMENT PROCESSOR) TO CHARGE YOUR CHOSEN PAYMENT METHOD FOR THE RECURRING SUBSCRIPTION FEES</strong> applicable to your Plan, plus any applicable taxes. Unless otherwise stated, fees are charged in advance of each billing period. All prices and features are subject to change, but we will notify you of significant changes in advance (see Section 15 regarding modifications).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Automatic Renewal:</h3>
                    <p className="text-gray-700 leading-7">
                      Subscriptions will automatically renew at the end of each billing cycle (monthly, yearly, or as applicable) unless you cancel the subscription before the next renewal date. By default, the same payment method on file will be charged for the renewal term of the same length, unless you upgrade or downgrade your Plan. You are responsible for keeping your payment information current. If we are unable to process payment, we may attempt to notify you and retry billing; if payment remains unsuccessful, we may suspend or downgrade your account to a free plan until payment is received.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Free Plan (if applicable):</h3>
                    <p className="text-gray-700 leading-7">
                      We may offer a free tier or free Plan with limited features or usage limits. If your account is on a free plan (either by choice or by downgrade after a trial or cancellation of paid subscription), note that features and support may be limited. We reserve the right to change or terminate free plan offerings at any time.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cancellation and Refund Policy</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Cancellation by User:</h3>
                    <p className="text-gray-700 leading-7">
                      You may cancel your paid subscription at any time. Cancellations can be made through your account dashboard at https://app.cptr.ai/settings/billings (our online billing settings page) or by following any account cancellation procedure we provide. Once you cancel, your subscription will not renew further. You will continue to have access to your paid Plan features until the end of the current billing period, after which your account will be automatically downgraded to the free plan (or a limited access state) starting on the next billing cycle. For example, if you cancel in the middle of a month for a monthly plan, you will retain premium access until your pre-paid month has concluded, then your account reverts to free status. It is your responsibility to cancel before your next billing date to avoid being charged for the next period.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">No Refunds:</h3>
                    <p className="text-gray-700 leading-7">
                      All payments for subscriptions (and any one-time fees) are non-refundable. This means that we do not provide refunds or credits for any partial-use periods, remaining time in your billing cycle after cancellation, or for unused features or limits. Once a charge has been processed for a billing period, the amount is final and will not be returned, except where required by law or expressly stated otherwise. In particular, if you cancel your subscription, you will not receive a refund for the current billing period; you will simply retain access to the Service until the period expires. Likewise, if an account is terminated by us due to a violation of these Terms, you will not be entitled to any refund for the remaining period of your subscription. We reserve the right, in rare cases and at our sole discretion, to issue refunds or credits (for example, to resolve customer support issues), but the provision of a refund in one instance does not entitle you to refunds in the future.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Subscription Upgrades and Downgrades:</h3>
                    <p className="text-gray-700 leading-7">
                      If you upgrade your Plan (e.g., from Basic to a higher tier) or increase your usage limits, the change may take effect immediately and a prorated charge for the remainder of the billing period may be applied, or the billing cycle may restart from the upgrade date, depending on our billing practices. If you downgrade your Plan, the change will typically apply from the next billing cycle, and no prorated refund is provided for the remainder of the current period on the higher plan. Downgrading may cause loss of access to features or data beyond the limits of the new plan (for example, if your knowledge base or number of leads exceed the new plan's cap), so review the plan details before downgrading.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Termination or Suspension by Company:</h3>
                    <p className="text-gray-700 leading-7">
                      We reserve the right to suspend or terminate your account or access to the Service at any time with or without notice and for any reason, including but not limited to your breach of these Terms, delinquent payments, or usage that in our judgment places an undue burden on our systems. In such cases, we will endeavor to notify you via the email on record. If your account is terminated for violation of these Terms, you are not entitled to any refund for any subscription fees you have already paid. If we discontinue the Service entirely, or terminate your account without cause (not due to your fault), we may provide a pro-rata refund for any prepaid period not delivered.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Data Retention upon Cancellation:</h3>
                    <p className="text-gray-700 leading-7">
                      Upon moving to a free plan or termination of your subscription, your previously uploaded content and chatbot configuration will remain in your account (so that you can continue on the free tier or reactivate your subscription later), subject to any storage limits of the free plan or our data retention policies. However, we reserve the right to delete or anonymize portions of your data to meet free plan limits or if your account remains inactive for an extended period (see Section 5 on User Content & Data). It is recommended that you export your data before cancellation if you wish to retain a personal copy.
                    </p>
                  </div>
                </div>
              </section>

              {/* Continue with remaining sections... */}
              <div className="p-8 rounded-lg border" style={{ backgroundColor: '#f3f5f7', borderColor: '#dce1e6' }}>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Complete Terms of Service
                  </h3>
                  <p className="text-gray-700 mb-6">
                    This page shows the key sections of our Terms of Service. For the complete document including all sections covering User Content and Data, Acceptable Use, Intellectual Property Rights, AI Accuracy and Disclaimer, Fees and Payment Terms, Warranties, Liability Limitations, Indemnification, Privacy and Data Protection, Third-Party Services, Modifications, Governing Law, Dispute Resolution, and Miscellaneous terms, please download the full document.
                  </p>
                  <a 
                    href="/terms-of-service.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: '#FF4206' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Complete Terms of Service (PDF)
                  </a>
                  <p className="text-sm text-gray-600 mt-3">
                    The PDF contains the complete legal document with all sections and provisions.
                  </p>
                </div>
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">19. Contact Information</h2>
                <p className="text-gray-700 leading-7 mb-4">
                  If you have any questions, concerns, or feedback about these Terms or the Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-800">High Jump Digital Limited (Capture AI)</p>
                  <p className="text-gray-700">Address: 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
                  <p className="text-gray-700">Email: support@cptr.ai</p>
                  <p className="text-gray-700">Website: https://cptr.ai</p>
                </div>
                <p className="text-gray-700 leading-7 mt-4">
                  We will do our best to respond to inquiries in a timely manner. Your feedback is important to us and we welcome your input on how to improve our services.
                </p>
                <p className="text-gray-700 leading-7 mt-4 font-medium">
                  By using or continuing to use the Capture AI platform, you acknowledge that you have read, understood, and agree to these Terms of Service. Thank you for trusting Capture AI with your chatbot needs! We look forward to helping you engage your audience with cutting-edge AI solutions.
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