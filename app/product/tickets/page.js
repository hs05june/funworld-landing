// pages/products/tickets.js
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to "/tickets" when the component mounts
    router.replace("/tickets");
  }, []);

  // This component doesn't have any UI as it's just for redirection
  return null;
};

export default RedirectPage;
