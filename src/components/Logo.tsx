import React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  // Use the uploaded image
  return (
    <img 
      src="/logo.png" 
      alt="Amarone Logo" 
      className={className} 
    />
  );
}
