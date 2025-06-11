import React from 'react';

interface AuthCardProps {
  children: React.ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <>
    <div className="max-w-lg w-full md:w-sm mx-auto p-6 bg-white rounded-2xl shadow-xl font-inter border border-sky-100">
  {children}
    </div>
      
    </>

  );
}
