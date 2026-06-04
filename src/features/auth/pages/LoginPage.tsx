import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true");

      navigate({
        to: "/dashboard",
      });

      return;
    }

    setError("Invalid username or password");
  };

  return (
    <div className="min-h-screen bg-[var(--canvas)] flex flex-col items-center justify-center px-4">
      <div
        className="
          w-full
          max-w-[650px]
          bg-[var(--surface)]
          border
          border-[var(--border)]
          rounded-[24px]
          px-10
          py-10
          shadow-sm
        "
      >
        {/* Logo */}

        <div className="text-center">
          <h1
            className="
              text-[52px]
              font-bold
              text-[var(--primary)]
            "
            style={{
              fontFamily: "Fraunces, serif",
            }}
          >
            ARtho Move
          </h1>

          <p
            className="
              text-[18px]
              text-[var(--ink-mid)]
              mt-1
            "
          >
            Admin Portal
          </p>
        </div>

        {/* Divider */}

        <div className="border-t border-[var(--border)] my-8" />

        {/* Username */}

        <div>
          <label
            className="
              block
              mb-3
              text-sm
              font-semibold
              tracking-wider
              text-[var(--ink-mid)]
            "
          >
            USERNAME OR EMAIL
          </label>

          <input
            type="text"
            placeholder="Enter username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="
              w-full
              h-14
              rounded-xl
              border
              border-[var(--border)]
              bg-[var(--surface-2)]
              px-5
              text-base
              text-[var(--ink-mid)]
              placeholder:text-[var(--ink-light)]
              outline-none
            "
          />
        </div>

        {/* Password */}

        <div className="mt-6">
          <label
            className="
              block
              mb-3
              text-sm
              font-semibold
              tracking-wider
              text-[var(--ink-mid)]
            "
          >
            PASSWORD
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full
                h-14
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--surface-2)]
                px-5
                text-base
                text-[var(--ink-mid)]
                placeholder:text-[var(--ink-light)]
                outline-none
              "
            />

            <button
              type="button"
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-[var(--ink-light)]
              "
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Error */}

        {error && (
          <p className="text-red-500 text-sm mt-3">
            {error}
          </p>
        )}

        {/* Login */}

        <button
          onClick={handleLogin}
          className="
            w-full
            h-14
            mt-8
            rounded-xl
            bg-[var(--primary)]
            text-[var(--text-active)]
            text-lg
            font-semibold
            hover:opacity-90
            transition
          "
        >
          Log In
        </button>

        {/* Forgot Password */}

        <div className="text-center mt-6">
          <button
            className="
              text-[var(--accent)]
              text-base
              hover:underline
            "
          >
            Forgot password?
          </button>
        </div>
      </div>

      {/* Footer */}

      <p
        className="
          mt-8
          text-sm
          text-[var(--ink-light)]
        "
      >
        ARtho Move · Secure Admin Portal
      </p>
    </div>
  );
}