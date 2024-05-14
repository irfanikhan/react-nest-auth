import { useLocalStorage } from "hooks/useLocalStorage";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }: { children: ReactNode }) => {
  const [user] = useLocalStorage('user');

  if (user) {
    return <Navigate to={"/"} />;
  }

  return children;
};
