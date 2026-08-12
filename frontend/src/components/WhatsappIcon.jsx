import React from 'react';

export default function WhatsappIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className} 
      {...props}
    >
      {/* Speech bubble outline */}
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      {/* Phone receiver outline */}
      <path d="M16 12.5c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.2-.5 0l-.7 1c-.1.1-.3.2-.5.1s-1-.3-1.9-1.1c-.7-.6-1.1-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.5-.7c.1-.1.1-.2.2-.3v-.3c-.1-.2-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.5.1-.7.3S7 8.2 7 9.5s.9 2.5 1 2.7 1.8 2.7 4.3 3.8c.6.2 1.1.4 1.4.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.2z" />
    </svg>
  );
}
