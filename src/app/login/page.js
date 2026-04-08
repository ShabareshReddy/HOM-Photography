"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/admin");
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-sm mx-4"
      >
        <div className="bg-white rounded-none p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hom-gold/10 mb-4">
              <Lock className="w-5 h-5 text-hom-darkgold" strokeWidth={1.5} />
            </div>
            <h1 className="font-instrument-serif text-3xl font-normal text-black mb-1 tracking-wide">
              STUDIO ADMIN
            </h1>
            <div className="w-8 h-[1px] bg-hom-gold/50 mt-3" />
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-medium ml-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-none text-sm text-gray-900 focus:outline-none focus:border-hom-gold focus:ring-1 focus:ring-hom-gold/20 transition-all font-inter"
                placeholder="Enter email"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-medium ml-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-none text-sm text-gray-900 focus:outline-none focus:border-hom-gold focus:ring-1 focus:ring-hom-gold/20 transition-all font-inter"
                placeholder="Enter password"
              />
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-500 text-xs text-center font-medium"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-3.5 bg-hom-black hover:bg-hom-darkgold text-white text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 disabled:opacity-50 flex justify-center items-center rounded-none"
            >
              {loading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
              ) : (
                "Access Dashboard"
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center pb-2">
            <a href="/" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-hom-darkgold transition-colors">
              Return to Website
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
