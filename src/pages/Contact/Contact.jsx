import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ContactSection from "../../components/ContactSection/ContactSection";
import { usePageTitle } from "../../hooks/usePageTitles";

const Contact = () => {
  usePageTitle("Contact - Kristoffersen MGMT");
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <ContactSection />
      </main>
    </div>
  );
};

export default Contact;
