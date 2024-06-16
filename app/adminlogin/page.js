"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AdminLogin = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://api2.fwblr.apistack.net/api/auth/admin",
        {
          email: email,
          password: password,
        }
      );

      if (!res.data.accessToken) {
        window.alert("Error verifying Credentials");
        return;
      }

      window.localStorage.setItem("fwAccessToken", res.data.accessToken);
      // window.localStorage.setItem("fwRefreshToken", res.data.refreshToken);
      router.replace("/admin");
    } catch (e) {
      console.error("Error occurred:", e);
      window.alert(e);
    }
  };

  return (
    <div>
      <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <p className="text-center mb-8 font-bold text-2xl">Admin Login</p>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-b-md focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sidebox-css"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
