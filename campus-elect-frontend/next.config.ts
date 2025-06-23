import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_BACKEND_URL:
      "https://pacanza-campus-elect-backend.onrender.com",
  },
};

export default nextConfig;
