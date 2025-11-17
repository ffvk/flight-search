import LoginForm from "../../form/LoginForm";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-emerald-900 h-screen">
        <div className="max-w-md mx-auto bg-emerald-700 p-6 rounded-2xl shadow-lg space-y-6]">
          <h3 className="panel-title text-3xl font-serif text-white mx-[150px]">
            Login
          </h3>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default Login;
