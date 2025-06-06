import time from "../assets/GIF/time.gif";
import gear from "../assets/GIF/gear.gif";
import robot from "../assets/GIF/robot.gif";
import stock from "../assets/GIF/stock.gif";
import search from "../assets/GIF/search.gif";
import provide from "../assets/performance/provide copy.svg"
import thirdpartypic from "../assets/performance2/third-party.svg"
import showcase from "../assets/performance2/showcase-work.svg"
import leadcapture from "../assets/performance2/lead-capture.svg"
import userintent from "../assets/performance2/user-intent.svg"
import suggestion from "../assets/performance2/suggestion.svg"
import personicon from "../assets/price/personicon.svg"
import materialsymbolrocket from "../assets/price/material-symbols_rocket.svg"
import diamond from "../assets/price/basil_diamond-solid.svg"

export const PAYMENT_CONSTANTS = {
  HEADING: {
    FLEXIBLE: "FLEXIBLE",
    PAYMENT_SOLUTIONS: " PAYMENT SOLUTIONS"
  },
  BREAKPOINTS: {
    MOBILE: 768
  },
  PLANS: {
    BASIC: {
      TITLE: "BASIC",
      PRICE: "FREE",
      IMAGE: personicon,
      STYLES: {
        BORDER: "border-[#00000033]",
        BACKGROUND: "bg-[#F3F6F8]",
        TEXT: "text-[#000000CC]",
        HEADER: "text-black"
      }
    },
    STARTER: {
      TITLE: "STARTER KIT",
      PRICE: "$49/MO.",
      IMAGE: materialsymbolrocket,
      STYLES: {
        BORDER: "border-[#00000033]",
        BACKGROUND: "bg-[#F3F6F8]",
        TEXT: "text-[#000000CC]",
        HEADER: "text-black"
      }
    },
    PRO: {
      TITLE: "INFINITY PRO",
      PRICE: "$99/MO.",
      IMAGE: diamond,
      STYLES: {
        BORDER: "border-[#FF4206]",
        BACKGROUND: "bg-black",
        TEXT: "text-[#D8DADB]",
        HEADER: "text-white",
        SHADOW: "paySolShadow"
      }
    }
  }
}
export const Plandata = [
  {
    title: "1 WEBSITE AGENT (X MESSAGES)",
    flag: true,
  },
  {
    title: "BASIC VERSION",
    flag: true,
  },

  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
];

export const STARTERPlandata = [
  {
    title: "1 WEBSITE AGENT",
    flag: true,
  },
  {
    title: "STARTER VERSION",
    flag: true,
  },

  {
    title: "NAME, EMAIL & PHONE ONLY",
    flag: true,
  },
  {
    title: "1 USER INTENT",
    flag: true,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
  {
    title: "",
    flag: false,
  },
];

export const InfinityProPlandata = [
  {
    title: "1 WEBSITE AGENT",
    flag: true,
  },
  {
    title: "ADVANCED VERSION",
    flag: true,
  },

  {
    title: "NAME, EMAIL, PHONE + CUSTOM",
    flag: true,
  },
  {
    title: "10 USER INTENTS (10 Q’S EACH)",
    flag: true,
  },
  {
    title: "10 SERVICES",
    flag: true,
  },
  {
    title: "",
    flag: true,
  },
  {
    title: "",
    flag: true,
  },
  {
    title: "",
    flag: true,
  },
  {
    title: "",
    flag: true,
  },
  {
    title: "",
    flag: true,
  },
  {
    title: "",
    flag: true,
  },
  {
    title: "CHAT, EMAIL & PHONE",
    flag: true,
  },
];

export const FaqData = [
  {
    title: "Can I cancel my subscription?",
    description:
      "Yes, your subscription can be cancelled at any time. Simply visit your client dashboard to make changes to your subscription.",
  },
  {
    title: "How does the chatbot capture lead data?",
    description:
      "Either your chatbot can present the user with a form to fill out or you can have the chatbot directly ask the user questions to capture the data.",
  },
  {
    title: "Can the chatbot ask qualifying questions?",
    description:
      "Yes, up to 10 questions can be asked per user intent. You can ask qualifying questions before presenting materials or making a suggestion.",
  },
  {
    title: "Can I add other people in my organisation?",
    description:
      "Yes, you can either add them as a user to manage your chatbot, or simply as a contact to receive details captured notifications (or both).",
  },
  {
    title: "Does the chatbot log conversations?",
    description:
      "Yes, the chatbot has the capability to store all transcripts so that you are able to review conversations and activity.",
  },
  {
    title: "Is it possible to make amendments to the chatbot once it is live?",
    description:
      "Yes, you can make unlimited amends to your chatbot once it is live. All amends and updates can be managed from within your personal dashboard.",
  },
  {
    title: "How long does the chatbot conversation stay active?",
    description:
      "The conversation will remain active through different page visits, until the user closes their browser tab",
  },
  
];

export const Immersiondata = [
  {
    img: time,
    title: "ROUND-THE-CLOCK ENGAGEMENT",
    description:
      "Your AI Chatbot Is Available 24/7, Ensuring Every Potential Lead Is Captured.",
  },
  {
    img: gear,
    title: "Customised with Your Business Info",
    description:
      "Equipped With Your Business’s Details, Your AI Chatbot Answers All Lead Queries Comprehensively.",
  },
  {
    img: search,
    title: "Efficient Lead Management",
    description:
      "Expertly Captures And Channels Inquiries, Boosting Engagement And User Experience.",
  },
  {
    img: stock,
    title: "Higher Conversion Potential ",
    description:
      "Personalized Interactions Foster Deeper Understanding And Nurturing Of Prospects.",
  },
  {
    img: robot,
    title: "full screen sales agent",
    description:
      "Choose From A Discreet Chat Bot, Or Integrate Our System Directly Into Your Platform.",
  },
];
export const marquee1 = [
  {
    text: "Need help tracking your order? ",
  },
  {
    text: "How do I update my address?",
  },
  {
    text: "Want to see our latest offers?",
  },
  {
    text: "how to update my address?",
  },
  {
    text: "How do I apply a discount code?",
  },
  {
    text: "Need help placing an order?",
  },

  {
    text: "Can I get an invoice?",
  },
];

export const marquee2 = [
  {
    text: "What payment methods do you accept?",
  },
  {
    text: "Shall I guide you through the checkout? ",
  },
  {
    text: "How do I change my subscription plan?   ",
  },
  {
    text: "Interested in our membership benefits? ",
  },
  {
    text: "Do you ship internationally?",
  },
];

export const marquee3 = [
  {
    text: "Do you want updates on new products?",
  },
  {
    text: "Do you offer bulk discounts?",
  },
  {
    text: "Can I recommend something for you? ",
  },
  {
    text: "Where is my nearest store?",
  },
  {
    text: "Have questions about your account?",
  },
];

export const marquee4 = [
  {
    text: "Can I use Klarna?",
  },
  {
    text: "Shall I guide you through the checkout?",
  }, {
    text: "How do I change my subscription plan?   ",
  }, {
    text: "When do you want to get started?",
  }, {
    text: "Do you ship internationally?",
  },
];
export const ChatPerformancedata = [
  {
    title: "3rd party tool integration",
    image: thirdpartypic,
    detail: "Integrate with 3rd party tools to automate tasks, manage workflows, and streamline interactions. Stay connected and organized."
  },
  {
    title: "Provide company documents",
    image: provide,
    detail: "Easily share essential company documents with your Customers. Provide quick access to key resources through the chatbot. "
  },
  {
    title: "Showcase work",
    image: showcase,
    detail: "Showcase your work to your customers, from before and after images to showcasing your most recent testimonials."
  },
  {
    title: "Lead capture functionality",
    image: leadcapture,
    detail: "Capture customer details effortlessly through automated forms. Turn interactions into valuable leads with ease."

  },
  {
    title: "User intent configuration",
    image: userintent,
    detail: "Customize your chatbot’s responses based on user intent for more personalized and accurate interactions.  "
  },
  {
    title: "Suggestion capabilities",
    image: suggestion,
    detail: "With suggestion capabilities, the chatbot offers tailored recommendations, from personalized quotes to baseline pricing and other helpful options based on your needs."

  },
];
export const constants = {
  immersion: {
    fullimmersion: "FULL IMMERSION.",
    fullattention: "FULL ATTENTION.",
  },
  ask: {
    frequentalyasked: "FREQUENTLY ASKED",
    QUESTIONS: "QUESTIONS",
  },
  herosection: {
    CONVERSATIONS: "CONVERSATIONS",
    thatconvert: "THAT CONVERT.",
    chatbotengangement:
      "Our 24/7 AI Chatbot boosts engagement, manages leads, and integrates seamlessly with your CRM for efficient interactions.",
    viewSolution: " VIEW SOLUTIONS",
    leadsCapture: "5000+ LEADS CAPTURED FOR OUR PARTNERS",
  },
  paymentSol: {
    FLEXIBLE: "FLEXIBLE",
    paymentsol: " PAYMENT SOLUTIONS",
    FREE: "FREE",
    offer:
      "Offer Services, Answer Questions, Trigger User Intents, Manage Documents, And Provide Suggestions.",
  },
  chatperformance: {
    showase:
      " Showcase your work to your customers, from before and after images to showcasing your most recent testimonials.",
    title: "ENDLESS FEATURES",
    subtitle: " TO INCREASE YOUR CHAT PERFORMANCE",
  },
  header: {
    FEATURES: "FEATURES",
    howitwork: "HOW IT WORKS",
    SOLUTIONS: "SOLUTIONS",
    FAQ: "FAQ'S",
    login: "LOG IN",
  },
  buttons: {
    getStarted: "GET STARTED",
    forFree: "FOR FREE",
    forPrice: (price: string) => `FOR ${price}`,
  },
  planDetails: {
    personalAgent: "PERSONAL WEBSITE AGENT",
    dashboard: "DASHBOARD",
    captureData: "CAPTURE DATA",
    quoteSupport: "QUOTE & SUPPORT INTENTS",
    services: "SERVICES",
    companyMaterial: "COMPANY MATERIAL INTEGRATION",
    showcaseImages: "SHOWCASE IMAGES",
    showcaseProducts: "SHOWCASE PRODUCT RANGES",
    proactiveSuggestion: "PROACTIVE SUGGESTION",
    realTimeAlerts: "REAL-TIME LEADS ALERTS",
    thirdParty: "3RD PARTY INTEGRATIONS",
    technicalSupport: "TECHNICAL SUPPORT",
  },
  planDetailsData: [
    {
      text: "PERSONAL WEBSITE AGENT",
    },
    {
      text: "DASHBOARD",
    },
    {
      text: "CAPTURE DATA",
    },
    {
      text: "QUOTE & SUPPORT INTENTS",
    },
    {
      text: "SERVICES",
    },
    {
      text: "COMPANY MATERIAL INTEGRATION",
    },
    {
      text: "SHOWCASE IMAGES",
    },
    {
      text: "SHOWCASE PRODUCT RANGES",
    },
    {
      text: "PROACTIVE SUGGESTIONS",
    },
    {
      text: "REAL-TIME LEADS ALERTS",
    },
    {
      text: "3RD PARTY INTEGRATIONS",
    },
    {
      text: "TECHNICAL SUPPORT",
    },
  ],
  platform: {
    title: "AVAILABLE ON ALL PLATFORMS:",
  },
  howItWorks: {
    title: "HERE'S HOW IT WORKS",
    steps: {
      title: "HERE'S\nHOW\nIT WORKS",
    }
  },
  immersionCard: {
    bgColor: 'rgb(242,245,247)',
  },
  altText: {
    logo: "Logo",
    image: "image",
    peopleGroup: "PeopleGroup",
    dashboard: "Dashboard",
  },
  planCard: {
    infinityPro: "Infinity Pro",
  },
  faq: {
    title: "FREQUENTLY ASKED QUESTIONS",
  },
};

export const cards = [
  {
    number: "01.",
    heading: "USER STARTS A CONVERSATION",
    text: "The User Will Start A Conversation And Ask Any Questions They Need To. If You Do Not Have Pre-Programmed Answers, Your AI Will Take Over And Respond."
  },
  {
    number: "02.",
    heading: "LEAD CAPTURE AND SEND",
    text: "Once Your Chatbot Has Captured The Qualifying Information from The User, The Data Will Send To You Directly Via Email And SMS."
  },
  {
    number: "03.",
    heading: "CUSTOM CRM INTEGRATION",
    text: "As An Optional Extra, We Can Have Your Chatbot Send The Lead Information Directly To Your CRM Via API."
  },
  {
    number: "04.",
    heading: "INSIGHTS AND REPORTS",
    text: "All Transcripts Will Be Emailed To You, You Will Also Be Provided With A Dashboard Login To View Historical Transcripts."
  },
];

export const AUTH_URLS = {
  SIGN_IN: "https://app.cptr.ai/sign-in"
} as const;