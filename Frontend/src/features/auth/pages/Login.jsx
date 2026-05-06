import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ShoppingBag } from "lucide-react";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router";

export default function Login() {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await handleLogin({ email: formData.email, password: formData.password });
            if (user.role == "buyer") {
                navigate("/");
            } else if (user.role == "seller") {
                navigate("/seller/dashboard");
            }
        } catch (error) {
            console.error("Login failed", error);
        }
    };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/images/bg.jpg')" }} // same as register
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-xl bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-10">
          
          {/* HEADER */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-serif font-semibold mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-500 text-sm tracking-widest">
              SIGN IN TO YOUR ACCOUNT
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <div>
              <label className="text-xs text-gray-700">EMAIL ADDRESS</label>
              <div className="relative">
               
                <input
                 id="login-email"
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1  p-3 rounded-lg border border-gray-200 bg-white/70 outline-none"
                />
              </div>
            </div>
{/* PASSWORD */}
<div>
  <div className="flex items-center justify-between">
    <label className="text-xs text-gray-700">PASSWORD</label>

    <a
      href="#"
      className="text-[16px] transition-colors duration-200"
      style={{ color: "#9e6c2e" }}
      onMouseEnter={(e) => (e.target.style.color = "#C9A96E")}
      onMouseLeave={(e) => (e.target.style.color = "#B5ADA3")}
    >
      Forgot password?
    </a>
  </div>

  <div className="relative">
    <input
      id="login-password"
      type={showPassword ? "text" : "password"}
      name="password"
      placeholder="••••••••"
      value={formData.password}
      onChange={handleChange}
      className="w-full mt-1 pr-10 p-3 rounded-lg border border-gray-200 bg-white/70 outline-none"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    >
      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  </div>
</div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-4 text-[16px] uppercase tracking-[0.25em] font-medium transition-all duration-300 mt-2"
              style={{
                backgroundColor: "#343632",
                color: "#fbf9f6",
              }}
            >
              Sign In
            </button>

             {/* Continue with Google Button */}
            <a
              href="/api/auth/google"
              className="w-full py-4 px-4 rounded-lg border-2 border-gray-300 bg-white/95 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 group shadow-sm hover:shadow-md"
            >
              {/* Google Logo */}
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g>
                  {/* G letter in Google colors */}
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </g>
              </svg>
              <span
                className="text-[14px] uppercase tracking-[0.12em] font-medium transition-colors duration-300"
                style={{ color: "#3c3c3c" }}
              >
                Continue with Google
              </span>
            </a>


        

             {/* Footer Link */}
            <p className="text-center text-[20px]" style={{ color: "#181717" }}>
              Don't have an account?{" "}
              <a
                href="/register"
                className="transition-colors duration-200"
                style={{
                  color: "#f09036",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#dcad1d")}
                onMouseLeave={(e) => (e.target.style.color = "#dd7513")}
              >
               Create Account
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}