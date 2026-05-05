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