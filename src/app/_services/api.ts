import axios from 'axios';

export interface Feature {
  feature_name: string;
  is_enabled: boolean;
  feature_description: string;
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
          "feature_description": "1 WEBSITE AGENT (UP TO 100 MESSAGES)"
        },
        {
          "feature_name": "DASHBOARD",
          "is_enabled": true,
          "feature_description": "INCLUDED"
        },
        {
          "feature_name": "CAPTURE DATA",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "CAPTURE USER INTENTS",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "SERVICES",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "SHOWCASE SPECIAL OFFERS",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "PRESENT COMPANY MATERIALS",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "SHOWCASE PROJECTS/IMAGES",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "SHOWCASE PRODUCT RANGES",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "PROACTIVE SUGGESTIONS",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "REAL-TIME LEAD ALERTS",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "3RD PARTY INTEGRATIONS",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "TECHNICAL SUPPORT",
          "is_enabled": false,
          "feature_description": ""
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
          "feature_description": "1 WEBSITE AGENT"
        },
        {
          "feature_name": "DASHBOARD",
          "is_enabled": true,
          "feature_description": "INCLUDED"
        },
        {
          "feature_name": "CAPTURE DATA",
          "is_enabled": true,
          "feature_description": "NAME, EMAIL & PHONE ONLY"
        },
        {
          "feature_name": "CAPTURE USER INTENTS",
          "is_enabled": true,
          "feature_description": "QUOTE & SUPPORT ONLY"
        },
        {
          "feature_name": "SERVICES",
          "is_enabled": true,
          "feature_description": "UP TO 3 SERVICES"
        },
        {
          "feature_name": "SHOWCASE SPECIAL OFFERS",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "PRESENT COMPANY MATERIALS",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "SHOWCASE PROJECTS/IMAGES",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "SHOWCASE PRODUCT RANGES",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "PROACTIVE SUGGESTIONS",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "REAL-TIME LEAD ALERTS",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "3RD PARTY INTEGRATIONS",
          "is_enabled": false,
          "feature_description": ""
        },
        {
          "feature_name": "TECHNICAL SUPPORT",
          "is_enabled": false,
          "feature_description": ""
        }
      ]
    },
    {
      "plan_name": "Infinity Pro",
      "plan_price": 99,
      "plan_description": "Offer Services, Answer Questions, Trigger User Intents, Manage Documents, And Provide Suggestions.",
      "features": [
        {
          "feature_name": "PERSONAL WEBSITE AGENT",
          "is_enabled": true,
          "feature_description": "1 WEBSITE AGENT"
        },
        {
          "feature_name": "DASHBOARD",
          "is_enabled": true,
          "feature_description": "INCLUDED"
        },
        {
          "feature_name": "CAPTURE DATA",
          "is_enabled": true,
          "feature_description": "NAME, EMAIL, PHONE + ANY CUSTOM DATA"
        },
        {
          "feature_name": "CAPTURE USER INTENTS",
          "is_enabled": true,
          "feature_description": "UP TO 10 INTENTS"
        },
        {
          "feature_name": "SERVICES",
          "is_enabled": true,
          "feature_description": "UP TO 10 SERVICES"
        },
        {
          "feature_name": "SHOWCASE SPECIAL OFFERS",
          "is_enabled": true,
          "feature_description": "UP TO 10 SPECIAL OFFERS"
        },
        {
          "feature_name": "PRESENT COMPANY MATERIALS",
          "is_enabled": true,
          "feature_description": "10 COMPANY MATERIALS PER ACTION"
        },
        {
          "feature_name": "SHOWCASE PROJECTS/IMAGES",
          "is_enabled": true,
          "feature_description": "10 IMAGES PER ACTION"
        },
        {
          "feature_name": "SHOWCASE PRODUCT RANGES",
          "is_enabled": true,
          "feature_description": "1500 PRODUCT RANGES"
        },
        {
          "feature_name": "PROACTIVE SUGGESTIONS",
          "is_enabled": true,
          "feature_description": "UP TO 10 SUGGESTIONS"
        },
        {
          "feature_name": "REAL-TIME LEAD ALERTS",
          "is_enabled": true,
          "feature_description": "EMAIL, SMS"
        },
        {
          "feature_name": "3RD PARTY INTEGRATIONS",
          "is_enabled": true,
          "feature_description": "CALENDLY"
        },
        {
          "feature_name": "TECHNICAL SUPPORT",
          "is_enabled": true,
          "feature_description": "CHAT, EMAIL & PHONE"
        }
      ]
    }
  ],
  "errorException": ""
};

export const getPlans = async (): Promise<PlansResponse> => {
  try {
    const response = await axios.get(`/api/plans`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch plans, using fallback data:', error);
    return fallbackData;
  }
};