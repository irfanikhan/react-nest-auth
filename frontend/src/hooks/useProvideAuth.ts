import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";
import { useNavigate } from "react-router-dom";

function useProvideAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("user");

  const signin = async (data: unknown) => {
    const response = await axios.post('http://localhost:5005/api/auth/login', data);
    console.log(response)
    setUser(data);
    navigate('/')
  };

  const register = async (data: unknown) => {
    try {
      const response = await axios.post("/register", data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return {
    user,
    signin,
    logout,
    register,
  };
}

export default useProvideAuth;
