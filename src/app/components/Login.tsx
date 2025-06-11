"use client";
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import OTP from './OTP';
import { useAuthStore } from './store';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the default styles
import { ArrowRight } from 'lucide-react'; // Import an icon from lucide-react
import AuthFooter from './AuthFooter'; // Import the new AuthFooter component
import AuthCard from './AuthCard';

export default function Login() {
  const { mobile, setMobile, showOTP, setShowOTP, reset } = useAuthStore();

  React.useEffect(() => { reset(); }, [reset]);

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
    setMobile(data.mobile);
    // Mock API call
    await new Promise((res) => setTimeout(res, 1000));
    setShowOTP(true);
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
                defaultCountry="JP"
                className="w-full px-3 py-2 border border-gray-200 rounded-md phone-input-no-focus "
              />
            )}
          />
        </div>
        {errors.mobile && (
          <p className="text-red-500 text-[10px] mb-2">{(errors.mobile.message as string)}</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-xs flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            'Sending OTP...'
          ) : (
            <>
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </AuthCard>
          <AuthFooter text="Don't have an account?" linkText="Sign up" />
    </>
   
  );
} 