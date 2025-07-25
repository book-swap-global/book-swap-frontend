"use client";
import React, { useRef, ChangeEvent, KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { setUser, setLoading, setError } from './store/authSlice';
import AuthCard from './AuthCard';
import AuthFooter from './AuthFooter';
import { useVerifyOtpMutation } from './store/authApi';

export default function OTP() {
  const dispatch = useDispatch();
  const mobile = useSelector((state: RootState) => state.auth.user?.phoneNumber || "");
  const verified = useSelector((state: RootState) => state.auth.verified);

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const schema = yup.object().shape({
    otp: yup
      .string()
      .required('OTP is required')
      .matches(/^\d{6}$/, 'OTP must be 6 digits'),
  });

  const {
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [verifyOtp, { isLoading, error }] = useVerifyOtpMutation();

  const onSubmit = async (data: { otp: string }) => {
    const result = await verifyOtp({ code: data.otp });
    console.log("otp result", result)
    if (!('error' in result)) {
      dispatch({ type: 'auth/setVerified', payload: true });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) { // Only allow digits
      // Update individual input value
      const newOtpArray = [...(inputRefs.current.map(ref => ref?.value || ''))];
      newOtpArray[index] = value;
      setValue('otp', newOtpArray.join('')); // Update react-hook-form value

      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  if (verified)
    return (
      <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow text-center">
        <h2 className="text-2xl font-bold mb-4">Success!</h2>
        <p className="mb-2">Mobile {mobile} verified 🎉</p>
      </div>
    );

  return (
    <>

 
    <AuthCard>
  <h2 className="text-lg font-semibold text-center">Verification Code</h2>
  <div className='text-center mt-2 mb-4'>
    <p className="text-gray-700 text-xs font-medium text-center">Enter the 6-digit code sent to</p>
    <p className="text-blue-700 text-xs font-medium mt-1">{mobile || "09123456789"}</p>
    </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center space-x-2 mb-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-8 h-8 md:w-10 md:h-10 text-center text-xs border border-gray-200 shadow rounded focus:outline-none focus:ring focus:ring-blue-800 p-2"
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              // No 'name' and 'ref' from register, as we manually manage input values
            />
          ))}
        </div>
        {errors.otp && (
          <p className="text-red-500 text-red-500 text-[10px] my-2 text-center">{errors.otp.message as string}</p>
        )}
        {typeof error === 'object' && error !== null && 'data' in error && (
          <p className="text-red-500 text-[10px] my-2 text-center">{(error as any).data?.message || 'Failed to verify OTP'}</p>
        )}
        <button
          type="submit"
           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-xs flex items-center justify-center mt-5"
          disabled={isSubmitting || isLoading}
        >
          {isSubmitting || isLoading ? 'Verifying...' : 'Verify OTP'}
        </button>
      </form>
    </AuthCard>
    <AuthFooter text="Didn't received the code?" linkText="Resend code"/>
    </>
    
  );
} 