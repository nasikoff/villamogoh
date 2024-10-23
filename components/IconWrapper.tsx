import React, { ReactNode } from "react";

interface IconWrapperProps {
  children: ReactNode;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, className }) => (
  <div className={`${className} flex items-center rounded-small justify-center w-7 h-7`}>
    {children}
  </div>
);
export default IconWrapper;