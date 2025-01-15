import axios from 'axios';

const API_URL = `http://${process.env.NEXT_PUBLIC_LOCAL_HOST}:${process.env.NEXT_PUBLIC_LOCAL_PORT}/api/send-sms`;

export const sendSms = async (phone: string, message: string) => {
  try {
    const response = await axios.post(`${API_URL}`, { phone, message });
    return response.data;
  } catch (error) {
    throw error;
  }
};
