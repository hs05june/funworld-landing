"use client"

import Hero from "@/components/Home/Hero";
import ParkAttractions from "@/components/Home/ParkAttractions";
import Welcome from "@/components/Home/Welcome";
import YourTicket from "@/components/Home/YourTicket";

export default function Home() {
  
  return (
    <main className="w-full">
      <Hero />
      <Welcome />
      <YourTicket />
      <ParkAttractions />
    </main>
  )
}

