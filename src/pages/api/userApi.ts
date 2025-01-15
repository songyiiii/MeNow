import { LoginData, UserData } from '@/types';
import axios from 'axios';
import { apiClient } from './apiClient';

const API_URL = `http://${process.env.NEXT_PUBLIC_LOCAL_HOST}:${process.env.NEXT_PUBLIC_LOCAL_PORT}/api/user`;

export const registerUser = async (userData: UserData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
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

export const getUserInfo = async () => {
  try {
    const response = await apiClient.get(`/get-user`);
    return response.data;
  } catch (error) {
    console.error('사용자 정보 가져오기 실패', error);
    throw error;
  }
};
