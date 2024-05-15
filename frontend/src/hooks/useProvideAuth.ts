import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

function useProvideAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("access_token");

  const signin = async <T>(data: T) => {
    setUser(data);
    navigate('/')
  };

  const signup = async (data: unknown) => {
    setUser(data);
    navigate('/')
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return {
    user,
    signin,
    logout,
    signup,
  };
}

export default useProvideAuth;
