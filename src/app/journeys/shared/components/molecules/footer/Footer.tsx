import React from 'react';
import { useRouter } from 'next/navigation';
import { Image } from '../../atoms/image/Image';

export const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <footer className="footer py-16 flex justify-center items-center">
      <div className="cursor-pointer" onClick={() => router.push('/')}>
        <Image 
          src="/logos/apply-digital.svg" 
          alt="Apply Digital" 
          width={170}         
        />
      </div>
    </footer>
  );
};