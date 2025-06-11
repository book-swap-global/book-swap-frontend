import { create } from 'zustand';

interface AuthState {
  mobile: string;
  showOTP: boolean;
  verified: boolean;
  setMobile: (mobile: string) => void;
  setShowOTP: (show: boolean) => void;
  setVerified: (verified: boolean) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  mobile: '',
  showOTP: false,
  verified: false,
  setMobile: (mobile) => set({ mobile }),
  setShowOTP: (showOTP) => set({ showOTP }),
  setVerified: (verified) => set({ verified }),
  reset: () => set({ mobile: '', showOTP: false, verified: false }),
})); 