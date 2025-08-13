import React from 'react';

export function Button({ children, className = '', ...props }) {
  return (
    <button {...props} className={"inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-sky-700 text-white hover:bg-sky-800 transition " + className}>
      {children}
    </button>
  );
}

// Link-style primary
export default Button;