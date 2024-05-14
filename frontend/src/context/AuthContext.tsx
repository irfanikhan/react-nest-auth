import useProvideAuth from "hooks/useProvideAuth";
import { ReactNode, createContext } from "react";

interface ContextProps {
  user: unknown;
  signin: (data: unknown) => void;
  logout: () => void;
}

export const AuthContext = createContext<ContextProps>({
  user: null,
  signin: (data: unknown) => data,
  logout: () => {}
});

function ProvideAuth({ children }: { children: ReactNode }) {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default ProvideAuth;
