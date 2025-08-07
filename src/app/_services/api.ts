import axios from 'axios';

export interface Feature {
  feature_name: string;
  is_enabled: boolean;
  feature_description: string;
  feature_description_2?: string;
}

export interface Plan {
  plan_name: string;
  plan_price: number;
  plan_description: string;
  features: Feature[];
}

interface PlansResponse {
  success: boolean;
  title: string;
  description: string;
  content: Plan[];
  errorException: string;
}

const fallbackData: PlansResponse = {
  "success": true,
  "title": "Plans retrieved successfully",
  "description": "",
  "content": [
    {
      "plan_name": "Basic",
      "plan_price": 0,
      "plan_description": "Offer Services, Answer Questions, Trigger User Intents, Manage Documents, And Provide Suggestions.",
"features": [
                {
                    "feature_name": "PERSONAL WEBSITE AGENT",
                    "is_enabled": true,
                    "feature_description": "1 WEBSITE AGENT",
                    "feature_description_2": "1 WEBSITE AGENT"
                },
                {
                    "feature_name": "DASHBOARD",
                    "is_enabled": true,
                    "feature_description": "INCLUDED",
                    "feature_description_2": "DASHBOARD INCLUDED"
                },
                {
                    "feature_name": "KNOWLEDGE BASE",
                    "is_enabled": true,
                    "feature_description": "30 URLS/DOCUMENTS",
                    "feature_description_2": "30 KNOWLEDGE ITEMS"
                },
                {
                    "feature_name": "PRESENT SERVICES",
                    "is_enabled": true,
                    "feature_description": "UP TO 3",
                    "feature_description_2": "3 SERVICES"
                },
                {
                    "feature_name": "GOOGLE ANALYTICS 4 INTEGRATION",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "CAPTURE DATA",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "REAL-TIME LEAD ALERTS",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "CAPTURE USER INTENTS",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "ASK QUALIFYING QUESTIONS",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "SHOWCASE SPECIAL OFFERS",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "PRESENT COMPANY MATERIALS",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "SHOWCASE YOUR WORK",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "SHOWCASE PRODUCT RANGES",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "MAKE SUGGESTIONS",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "PRESENT TESTIMONIALS",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "TECHNICAL SUPPORT",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "1-to-1 DEMO CALL",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                }
            ]
    },
    {
      "plan_name": "Starter Kit",
      "plan_price": 49,
      "plan_description": "Offer Services, Answer Questions, Trigger User Intents, Manage Documents, And Provide Suggestions.",
"features": [
                {
                    "feature_name": "PERSONAL WEBSITE AGENT",
                    "is_enabled": true,
                    "feature_description": "1 WEBSITE AGENT",
                    "feature_description_2": "1 WEBSITE AGENT"
                },
                {
                    "feature_name": "DASHBOARD",
                    "is_enabled": true,
                    "feature_description": "INCLUDED",
                    "feature_description_2": "DASHBOARD INCLUDED"
                },
                {
                    "feature_name": "KNOWLEDGE BASE",
                    "is_enabled": true,
                    "feature_description": "100 URLS/DOCUMENTS",
                    "feature_description_2": "100 KNOWLEDGE ITEMS"
                },
                {
                    "feature_name": "PRESENT SERVICES",
                    "is_enabled": true,
                    "feature_description": "UP TO 15",
                    "feature_description_2": "15 SERVICES"
                },
                {
                    "feature_name": "GOOGLE ANALYTICS 4 INTEGRATION",
                    "is_enabled": true,
                    "feature_description": "INCLUDED",
                    "feature_description_2": "GA4 INTEGRATION"
                },
                {
                    "feature_name": "CAPTURE DATA",
                    "is_enabled": true,
                    "feature_description": "CAPTURE FORMS OR QUESTIONS",
                    "feature_description_2": "CAPTURE FORMS OR QUESTIONS"
                },
                {
                    "feature_name": "REAL-TIME LEAD ALERTS",
                    "is_enabled": true,
                    "feature_description": "EMAIL, SMS",
                    "feature_description_2": "SMS/EMAIL ALERTS"
                },
                {
                    "feature_name": "CAPTURE USER INTENTS",
                    "is_enabled": true,
                    "feature_description": "UP TO 2",
                    "feature_description_2": "UP TO 2"
                },
                {
                    "feature_name": "ASK QUALIFYING QUESTIONS",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "SHOWCASE SPECIAL OFFERS",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "PRESENT COMPANY MATERIALS",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "SHOWCASE YOUR WORK",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "SHOWCASE PRODUCT RANGES",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "MAKE SUGGESTIONS",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "PRESENT TESTIMONIALS",
                    "is_enabled": false,
                    "feature_description": "",
                    "feature_description_2": ""
                },
                {
                    "feature_name": "TECHNICAL SUPPORT",
                    "is_enabled": true,
                    "feature_description": "INCLUDED",
                    "feature_description_2": "TECHNICAL SUPPORT"
                },
                {
                    "feature_name": "1-to-1 DEMO CALL",
                    "is_enabled": true,
                    "feature_description": "INCLUDED",
                    "feature_description_2": "1-to-1 DEMO CALL"
                }
            ]
    },
    {
      "plan_name": "Infinity Pro",
      "plan_price": 99.0,
      "plan_description": "Advanced website chat agent with the ability to offer services, answer questions, trigger user intents, manage documents, provide suggestions and more.",
"features": [
                {
                    "feature_name": "PERSONAL WEBSITE AGENT",
                    "is_enabled": true,
                    "feature_description": "1 WEBSITE AGENT",
                    "feature_description_2": "1 WEBSITE AGENT"
                },
                {
                    "feature_name": "DASHBOARD",
                    "is_enabled": true,
                    "feature_description": "INCLUDED",
                    "feature_description_2": "DASHBOARD INCLUDED"
                },
                {
                    "feature_name": "KNOWLEDGE BASE",
                    "is_enabled": true,
                    "feature_description": "500 URLS/DOCUMENTS",
                    "feature_description_2": "500 KNOWLEDGE ITEMS"
                },
                {
                    "feature_name": "PRESENT SERVICES",
                    "is_enabled": true,
                    "feature_description": "UP TO 25",
                    "feature_description_2": "25 SERVICES"
                },
                {
                    "feature_name": "GOOGLE ANALYTICS 4 INTEGRATION",
                    "is_enabled": true,
                    "feature_description": "INCLUDED",
                    "feature_description_2": "GA4 INTEGRATION"
                },
                {
                    "feature_name": "CAPTURE DATA",
                    "is_enabled": true,
                    "feature_description": "CAPTURE FORMS OR QUESTIONS",
                    "feature_description_2": "CAPTURE FORMS OR QUESTIONS"
                },
                {
                    "feature_name": "REAL-TIME LEAD ALERTS",
                    "is_enabled": true,
                    "feature_description": "EMAIL, SMS",
                    "feature_description_2": "SMS/EMAIL ALERTS"
                },
                {
                    "feature_name": "CAPTURE USER INTENTS",
                    "is_enabled": true,
                    "feature_description": "UP TO 20",
                    "feature_description_2": "20 INTENTS"
                },
                {
                    "feature_name": "ASK QUALIFYING QUESTIONS",
                    "is_enabled": true,
                    "feature_description": "ASK QUALIFYING QUESTIONS",
                    "feature_description_2": "ASK QUALIFYING QUESTIONS"
                },
                {
                    "feature_name": "SHOWCASE SPECIAL OFFERS",
                    "is_enabled": true,
                    "feature_description": "UP TO 10",
                    "feature_description_2": "10 SPECIAL OFFERS"
                },
                {
                    "feature_name": "PRESENT COMPANY MATERIALS",
                    "is_enabled": true,
                    "feature_description": "UP TO 50",
                    "feature_description_2": "50 DOCUMENTS"
                },
                {
                    "feature_name": "SHOWCASE YOUR WORK",
                    "is_enabled": true,
                    "feature_description": "UP TO 10",
                    "feature_description_2": "10 PROJECTS"
                },
                {
                    "feature_name": "SHOWCASE PRODUCT RANGES",
                    "is_enabled": true,
                    "feature_description": "UP TO 1500",
                    "feature_description_2": "1500 PRODUCTS"
                },
                {
                    "feature_name": "MAKE SUGGESTIONS",
                    "is_enabled": true,
                    "feature_description": "UP TO 50",
                    "feature_description_2": "50 SUGGESTIONS"
                },
                {
                    "feature_name": "PRESENT TESTIMONIALS",
                    "is_enabled": true,
                    "feature_description": "UP TO 5",
                    "feature_description_2": "PRESENT TESTIMONIALS"
                },
                {
                    "feature_name": "TECHNICAL SUPPORT",
                    "is_enabled": true,
                    "feature_description": "INCLUDED",
                    "feature_description_2": "TECHNICAL SUPPORT"
                },
                {
                    "feature_name": "1-to-1 DEMO CALL",
                    "is_enabled": true,
                    "feature_description": "INCLUDED",
                    "feature_description_2": "1-to-1 DEMO CALL"
                }
            ]
    }
  ],
  "errorException": ""
};

export const getPlans = async (): Promise<PlansResponse> => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://capture-ai-backend-development.up.railway.app';
    const response = await axios.get(`${backendUrl}/plans/v1/plans`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch plans, using fallback data:', error);
    return fallbackData;
  }
}; 