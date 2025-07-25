import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { signInWithPhoneNumber, RecaptchaVerifier, signOut, ConfirmationResult, User } from 'firebase/auth';
import { auth } from '../../firebase';

let confirmationResult: ConfirmationResult | null = null;

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
  }
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    sendOtp: builder.mutation<{ success: boolean }, { phone: string }>({
      async queryFn({ phone }) {
        try {
          if (typeof window === 'undefined') return { error: { message: 'No window' } };
          if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
              auth,
              'recaptcha-container',
              { size: 'invisible' }
            );
          }
          confirmationResult = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
          return { data: { success: true } };
        } catch (error: any) {
          return { error: { message: error.message } };
        }
      },
    }),
    verifyOtp: builder.mutation<{ user: User }, { code: string }>({
      async queryFn({ code }) {
        try {
          if (!confirmationResult) return { error: { message: 'No confirmation result' } };
          const result = await confirmationResult.confirm(code);
          console.log("resu>>", result)
          return { data: { user: result.user } };
        } catch (error: any) {
          return { error: { message: error.message } };
        }
      },
    }),
    logout: builder.mutation<{ success: boolean }, void>({
      async queryFn() {
        try {
          await signOut(auth);
          confirmationResult = null;
          return { data: { success: true } };
        } catch (error: any) {
          return { error: { message: error.message } };
        }
      },
    }),
  }),
});

export const { useSendOtpMutation, useVerifyOtpMutation, useLogoutMutation } = authApi; 