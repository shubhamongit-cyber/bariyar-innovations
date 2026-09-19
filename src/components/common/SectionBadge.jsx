import React from 'react';

export const SectionBadge = ({ children, variant = "blue", icon }) => {
  const variantClass = variant === "orange" ? "badge-orange" : variant === "emerald" ? "badge-emerald" : "";
  
  return (
    <div className={`badge ${variantClass}`}>
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
