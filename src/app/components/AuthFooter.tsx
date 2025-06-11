import Link from 'next/link';
import React from 'react';

interface AuthFooterProps {
  text: string;
  linkText: string;
}

export default function AuthFooter({ text, linkText }: AuthFooterProps) {
  return (
    <>
    <div className="flex text-center gap-1">
    <p className="text-gray-700 text-xs font-medium mb-5 ">{text}</p>
    <Link href={"/"} className='text-blue-700 text-xs font-medium mb-5'>{linkText}</Link>
    </div>
      
    </>

  );
}
