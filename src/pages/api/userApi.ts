import { LoginData, UserData } from '@/types';
import axios from 'axios';

const API_URL = `http://${process.env.NEXT_PUBLIC_LOCAL_HOST}:${process.env.NEXT_PUBLIC_LOCAL_PORT}/api/user`;

export const registerUser = async (userData: UserData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginUser = async (userData: LoginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserInfo = async (token?: string) => {
  try {
    const response = await axios.get(`${API_URL}/get-user`, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    console.log(response, 'response');
    return response.data;
  } catch (error) {
    console.error('사용자 정보 가져오기 실패', error);
    throw error;
  }
};
