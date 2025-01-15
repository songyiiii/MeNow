import { UserData } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: UserData | null; // UserData 타입 또는 null
}
const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
    },
    clearUserInfo: (state) => {
      state.user = null; // 로그아웃 시 사용자 정보 초기화
    },
  },
});

export const { setUserInfo, clearUserInfo } = authSlice.actions;
export default authSlice.reducer;
