import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "hooks/useLocalStorage";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const [user] = useLocalStorage('access_token');

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
}
