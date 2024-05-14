import Button from "components/Button/Button";
import InputField from "components/Input/Input";
import Layout from "components/Layout/Layout";
import TextButton from "components/TextButton/TextButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormInput {
  name: string;
  email: string;
  password: string;
}

const passwordErrorMap = {
  required: "Password is required",
  pattern:
    "Password must contain at least 1 letter, 1 number, and 1 special character",
  minLength: "Password must be at least 8 characters long",
};

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit = (data: FormInput) => {
    console.log(data);
  };

  return (
    <Layout>
      <div className="w-1/3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            <InputField
              label="Name"
              type="text"
              error={errors.name && "Please enter your name"}
              {...register("name", { required: true })}
            />
            <InputField
              label="Email"
              type="email"
              error={errors.email && "Please enter a valid email address"}
              {...register("email", { required: true })}
            />
            <InputField
              label="Password"
              type="password"
              error={
                errors.password &&
                passwordErrorMap[
                  errors.password.type as "required" | "pattern" | "minLength"
                ]
              }
              {...register("password", {
                required: true,
                pattern:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$#!%%*?&])[A-Za-z\d@#%$!%*?&]{8,}$/,
                minLength: 8,
              })}
            />
          </div>

          <div className="mt-6 flex items-center justify-between gap-x-6">
            <div>
              <p className="text-sm leading-2 text-gray-600">
                Already have an account?
              </p>
              <TextButton onClick={() => navigate("/login")}>
                Sign in
              </TextButton>
            </div>
            <Button type="submit">Sign up</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
