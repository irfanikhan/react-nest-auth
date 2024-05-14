import { useLocalStorage } from "hooks/useLocalStorage";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const [user] = useLocalStorage('user');

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
}
