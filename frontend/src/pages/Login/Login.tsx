import Button from "components/Button/Button";
import InputField from "components/Input/Input";
import Input from "components/Input/Input";
import Layout from "components/Layout/Layout";
import TextButton from "components/TextButton/TextButton";
import useAuth from "context/useAuth";
import { post } from "httpRequests";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const { mutate, isLoading } = useMutation({
    mutationFn: async (data: LoginForm) => {
      const response = await post("auth/login", data);
      signin(response.data.access_token);
      return response;
    },
  });

  const onSubmit = (data: LoginForm) => {
    mutate(data);
  };

  return (
    <Layout>
      <div className="w-1/3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            <InputField
              label="Email"
              type="email"
              error={errors.email && "Please enter your email address"}
              {...register("email", { required: true })}
            />
            <Input
              label="Password"
              type="password"
              error={errors.email && "Please enter your password"}
              {...register("password", { required: true })}
            />
          </div>
          <div className="mt-6 flex items-center justify-between gap-x-6">
            <div>
              <p className="text-sm leading-2 text-gray-600">
                Don't have an account?
              </p>
              <TextButton onClick={() => navigate("/register")}>
                Sign up
              </TextButton>
            </div>

            <Button type="submit" disabled={isLoading}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
