import axios from 'axios';

export interface ResellerRegistrationData {
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  website?: string;
}

export interface ResellerRegistrationResponse {
  id?: number;
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  website?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

interface ApiResponse {
  success: boolean;
  content?: ResellerRegistrationResponse;
  detail?: string;
  message?: string;
}

// Client calls our server route, which proxies to backend privately
const getProxyUrl = (): string => '/api/resellers';

export const submitResellerRegistration = async (registrationData: ResellerRegistrationData): Promise<ResellerRegistrationResponse> => {
  try {
    const url = getProxyUrl();
    
    console.log('Submitting reseller registration to:', url);
    console.log('Registration data:', registrationData);
    
    const response = await axios.post(url, registrationData, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000, // 10 second timeout
    });

    if (response.data && response.data.success && response.data.content) {
      // Backend returns StandardResponse with registration data in content field
      const registrationData = response.data.content;
      return registrationData;
    } else {
      throw new Error(response.data?.description || response.data?.detail || response.data?.message || 'No data received from server');
    }
  } catch (error) {
    console.error('Reseller registration submission error:', error);
    
    if (axios.isAxiosError(error)) {
      // Handle axios-specific errors
      if (error.response) {
        // Server responded with error status
        const errorMessage = error.response.data?.detail || 
                           error.response.data?.message || 
                           `Server error: ${error.response.status}`;
        throw new Error(errorMessage);
      } else if (error.request) {
        // Request was made but no response received
        throw new Error('Unable to connect to registration service. Please check your internet connection and try again.');
      } else {
        // Something else happened
        throw new Error('An unexpected error occurred while submitting your registration.');
      }
    } else {
      // Non-axios error
      throw new Error(error instanceof Error ? error.message : 'An unexpected error occurred.');
    }
  }
};
