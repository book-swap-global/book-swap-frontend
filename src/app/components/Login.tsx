"use client";
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import OTP from './OTP';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { setUser, setLoading, setError, logout, setShowOTP, setVerified } from './store/authSlice';
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the default styles
import { ArrowRight } from 'lucide-react'; // Import an icon from lucide-react
import AuthFooter from './AuthFooter'; // Import the new AuthFooter component
import AuthCard from './AuthCard';
import { useSendOtpMutation, useLogoutMutation } from './store/authApi';

export default function Login() {
  const dispatch = useDispatch();
  const mobile = useSelector((state: RootState) => state.auth.user?.phoneNumber || "");
  const showOTP = useSelector((state: RootState) => state.auth.showOTP);
  const [sendOtp, { isLoading, error }] = useSendOtpMutation();

  React.useEffect(() => {
    dispatch(setUser(null));
    dispatch(setError(null));
  }, [dispatch]);

  const schema = yup.object().shape({
    mobile: yup
      .string()
      .required('Mobile number is required')
      .test(
        'is-valid-phone',
        'Please enter a valid phone number',
        (value) => isValidPhoneNumber(value || '')
      ),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { mobile },
  });

  const onSubmit = async (data: { mobile: string }) => {
   console.log(data)
    dispatch(setUser({ phoneNumber: data.mobile }));
    // Ensure E.164 format
    let phoneE164 = data.mobile;
    try {
      const parsed = parsePhoneNumber(data.mobile || '');
      if (parsed) {
        phoneE164 = parsed.number;
      }
    } catch (e) {
      // fallback: use as is
    }
    if (!phoneE164.startsWith('+')) {
      // Show error if not E.164
      alert('Please enter a valid phone number with country code (e.g. +8190  12345678)');
      return;
    }
    const result = await sendOtp({ phone: phoneE164 });
    console.log(result)
    if (!('error' in result)) {
      dispatch({ type: 'auth/setShowOTP', payload: true });
    }
  };

  if (showOTP) return <OTP />;

  return (
    <>
     <AuthCard>
      <h2 className="text-lg font-semibold text-center">Welcome Back</h2>
      <p className="text-gray-700 text-xs font-medium mb-5 text-center">Enter your phone number to continue</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-xs text-gray-700 mb-2 font-sm">Phone Number</label>
        <div className="mb-4">
          <Controller
            name="mobile"
            control={control}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                value={value}
                onChange={onChange}
                defaultCountry="TH"
                className="w-full px-3 py-2 border border-gray-200 rounded-md phone-input-no-focus "
              />
            )}
          />
        </div>
        {errors.mobile && (
          <p className="text-red-500 text-[10px] mb-2">{(errors.mobile.message as string)}</p>
        )}
        {typeof error === 'object' && error !== null && 'data' in error && (
          <p className="text-red-500 text-[10px] mb-2">{(error as any).data?.message || 'Failed to send OTP'}</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-xs flex items-center justify-center"
          disabled={isSubmitting || isLoading}
        >
          {isSubmitting || isLoading ? (
            'Sending OTP...'
          ) : (
            <>
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
        <div id="recaptcha-container" />
      </form>
      {/* Logout Button for demonstration */}
      <LogoutButton />
    </AuthCard>
          <AuthFooter text="Don't have an account?" linkText="Sign up" />
    </>
   
  );
} 

function LogoutButton() {
  const [logoutApi, { isLoading }] = useLogoutMutation();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logoutApi();
    dispatch(logout());
  };
  return (
    <button
      type="button"
      className="w-full mt-2 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-xs"
      onClick={handleLogout}
      disabled={isLoading}
    >
      {isLoading ? 'Logging out...' : 'Logout'}
    </button>
  );
} 