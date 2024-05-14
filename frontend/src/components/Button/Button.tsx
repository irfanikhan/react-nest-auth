import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type: "submit" | "reset" | "button" | undefined;
}

const Button = ({ children, type }: ButtonProps) => (
  <button
    type={type}
    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    {children}
  </button>
);

export default Button;
