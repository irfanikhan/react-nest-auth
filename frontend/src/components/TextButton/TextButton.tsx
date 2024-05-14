import { ReactNode } from "react";

interface TextButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const TextButton = ({ children, onClick }: TextButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sm font-semibold leading-6 text-gray-900"
    >
      {children}
    </button>
  );
};

export default TextButton;
