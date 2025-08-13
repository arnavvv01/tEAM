import React, { useState } from 'react';

export const Accordion = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);

export const AccordionItem = ({ value, children }) => {
  return <div className="mb-3">{children}</div>;
};

export const AccordionTrigger = ({ children }) => {
  return <div className="cursor-pointer p-4 rounded-md font-semibold bg-white/60">{children}</div>;
};

export const AccordionContent = ({ children }) => {
  return <div className="p-4 text-sm text-slate-700 bg-white">{children}</div>;
};