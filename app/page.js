"use client";
import { useEffect } from "react";

import Hero from "@/components/Home/Hero";
import ParkAttractions from "@/components/Home/ParkAttractions";

import Welcome from "@/components/Home/Welcome";
import YourTicket from "@/components/Home/YourTicket";

import Swal from "sweetalert2";

export default function Home() {
  useEffect(() => {
    if (window && window !== undefined) {
      const acceptedTerms = sessionStorage.getItem("acceptedTerms");
      if (!acceptedTerms) {
        Swal.fire({
          title: "Please Note!",
          html: "<p>Nylon swim clothes are <b>mandtory</b><br />to enter Water World.</p>",
          icon: "info",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "OK!",
        }).then((result) => {
          if (result.isConfirmed) {
            sessionStorage.setItem("acceptedTerms", true);
          }
        });
      }
    }
  }, []);

  return (
    <main className="w-full">
      <Hero />
      <Welcome />
      <YourTicket />
      <ParkAttractions />
    </main>
  );
}
