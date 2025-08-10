import axios from 'axios';

export interface SupportTicketData {
  name: string;
  email: string;
  website: string;
  department: 'technical' | 'sales' | 'other';
  message: string;
  confirm_account: boolean;
}

export interface SupportTicketResponse {
  id: number;
  ticket_number: string;
  name: string;
  email: string;
  website: string;
  department: string;
  message: string;
  confirm_account: boolean;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  success: boolean;
  data?: SupportTicketResponse;
  detail?: string;
  message?: string;
}

// Client calls our server route, which proxies to backend privately
const getProxyUrl = (): string => '/api/support';

export const submitSupportTicket = async (ticketData: SupportTicketData): Promise<SupportTicketResponse> => {
  try {
    const url = getProxyUrl();
    
    console.log('Submitting support ticket to:', url);
    
    const response = await axios.post(url, ticketData, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000, // 10 second timeout
    });

    if (response.data && response.data.success && response.data.content) {
      // Backend returns StandardResponse with ticket data in content field
      const ticketData = response.data.content;
      // Add ticket_number if it doesn't exist (use id as fallback)
      if (!ticketData.ticket_number && ticketData.id) {
        ticketData.ticket_number = ticketData.id;
      }
      return ticketData;
    } else {
      throw new Error(response.data?.description || 'No data received from server');
    }
  } catch (error) {
    console.error('Support ticket submission error:', error);
    
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
        throw new Error('Unable to connect to support service. Please check your internet connection and try again.');
      } else {
        // Something else happened
        throw new Error('An unexpected error occurred while submitting your request.');
      }
    } else {
      // Non-axios error
      throw new Error(error instanceof Error ? error.message : 'An unexpected error occurred.');
    }
  }
}; 