import { useState } from "react";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Mail, Lock, ShoppingBag } from "lucide-react";

export default function Register() {
  const { handleRegister } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    password: "",
    isSeller: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({
      email: formData.email,
      contact: formData.contact,
      password: formData.password,
      fullname: formData.fullname,
      isSeller: formData.isSeller,
    });
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {/* CENTER CARD */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-xl bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-10">
          {/* HEADER */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-serif font-semibold mb-2">
              Begin Your Journey
            </h1>
            <p className="text-gray-500 text-sm tracking-widest">
              JOIN THE DIGITAL CURATOR'S CIRCLE
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-xs text-gray-700">FULL NAME</label>
              <input
                id="reg-fullName"
                name="fullname"
                type="text"
                placeholder="Evelyn Thorne"
                className="w-full mt-1 p-3 rounded-lg border border-gray-200 bg-white/70 outline-none"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-xs text-gray-700">EMAIL ADDRESS</label>
              <input
                id="reg-email"
                name="email"
                type="email"
                placeholder="evelyn@alexandria.com"
                className="w-full mt-1 p-3 rounded-lg border border-gray-200 bg-white/70 outline-none"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-xs text-gray-700">CONTACT NUMBER</label>
              <input
                id="reg-contact"
                name="contact"
                type="text"
                placeholder="Enter 10 digit number"
                className="w-full mt-1 p-3 rounded-lg border border-gray-200 bg-white/70 outline-none"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-xs text-gray-700">PASSWORD</label>

              <div className="relative">
                <input
                  id="reg-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  className="w-full mt-1 p-3 pr-10 rounded-lg border border-gray-200 bg-white/70 outline-none"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            {/* Register as Seller — minimal checkbox */}
            <label
              htmlFor="reg-isSeller"
              className="flex items-center gap-4 cursor-pointer group"
            >
              <div className="relative flex-shrink-0">
                <input
                  id="reg-isSeller"
                  type="checkbox"
                  name="isSeller"
                  checked={formData.isSeller}
                  onChange={handleChange}
                  className="peer sr-only"
                />
                {/* Custom checkbox */}
                <div
                  className="w-4 h-4 border transition-all duration-200 flex items-center justify-center peer-checked:border-[#C9A96E]"
                  style={{
                    borderColor: formData.isSeller ? "#151515" : "#1e1d1c",
                    backgroundColor: formData.isSeller
                      ? "#d9a648"
                      : "transparent",
                  }}
                >
                  {formData.isSeller && (
                    <svg
                      className="w-2.5 h-2.5"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#fbf9f6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <span
                className="text-[16px] uppercase tracking-[0.15em] transition-colors duration-200"
                style={{ color: formData.isSeller ? "#8f854b" : "#0c0c0c" }}
              >
                Register as Seller
              </span>
            </label>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-4 text-[16px] uppercase tracking-[0.25em] font-medium transition-all duration-300 mt-2"
              style={{
                backgroundColor: "#343632",
                color: "#fbf9f6",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#b39256";
                e.currentTarget.style.color = "#1b1c1a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1b1c1a";
                e.currentTarget.style.color = "#fbf9f6";
              }}
            >
              Sign Up
            </button>

            {/* Footer Link */}
            <p className="text-center text-[20px]" style={{ color: "#181717" }}>
              Already have an account?{" "}
              <a
                href="/login"
                className="transition-colors duration-200"
                style={{
                  color: "#f09036",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#dcad1d")}
                onMouseLeave={(e) => (e.target.style.color = "#dd7513")}
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
