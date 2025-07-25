"use client";
import { useLogoutMutation } from './store/authApi';
import { useDispatch } from 'react-redux';
import { logout, setShowOTP, setVerified } from './store/authSlice';

export default function LogoutButton() {
  const [logoutApi, { isLoading }] = useLogoutMutation();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logoutApi();
    dispatch(logout());
    dispatch(setShowOTP(false));
    dispatch(setVerified(false));
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