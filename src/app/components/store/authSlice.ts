import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any | null;
  loading: boolean;
  error: string | null;
  showOTP: boolean;
  verified: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  showOTP: false,
  verified: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any | null>) {
      state.user = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.showOTP = false;
      state.verified = false;
    },
    setShowOTP(state, action: PayloadAction<boolean>) {
      state.showOTP = action.payload;
    },
    setVerified(state, action: PayloadAction<boolean>) {
      state.verified = action.payload;
    },
  },
});

export const { setUser, setLoading, setError, logout, setShowOTP, setVerified } = authSlice.actions;
export default authSlice.reducer; 