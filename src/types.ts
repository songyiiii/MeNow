import { AxiosError } from 'axios';

export interface PortfolioData {
  id: number;
  title: string;
  img: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  gender: string;
  confirm: string;
  phone: string;
  nickname: string;
}

export type LoginData = Pick<UserData, 'email' | 'password'>;

export type ServerError = AxiosError<{ message: string }>;
