import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import TechStack from "@/components/home/TechStack";
import WhatYouGet from "@/components/home/WhatYouGet";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top">
        <Hero />
        <Services />
        <TechStack />
        <WhatYouGet />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}