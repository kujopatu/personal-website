import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const PersonalWebsite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-6 py-10 md:px-16">
      <section className="text-center py-12">
        <img
          src="/images/profile.jpg"
          alt="Patu Kujo Emmanuel"
          className="mx-auto w-40 h-40 rounded-full shadow-md object-cover"
        />
        <h1 className="text-4xl font-bold mt-6">Patu Kujo Emmanuel</h1>
        <p className="text-lg text-gray-600 mt-2">Computer Engineer • Logistics Professional</p>
        <div className="flex justify-center mt-4 gap-4 text-orange-600 text-2xl">
          <a href="https://www.facebook.com/pkujo" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/kujo-patu-a2a06075/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/kujolamba1" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/emmy.pat/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <div className="mt-6">
          <a
            href="/documents/Patu_Kujo_Resume_Updated_Address.pdf"
            download
            className="inline-block bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
          >
            Download Resume
          </a>
        </div>
      </section>
      <section className="max-w-3xl mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">About Me</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          I am Patu Kujo Emmanuel, a results-driven Computer Engineer and Logistics
          Professional with a passion for solving complex problems and streamlining
          operational efficiency. With a unique blend of technical expertise and hands-on
          logistics experience, I have successfully contributed to projects that merge
          technology with real-world supply chain and distribution challenges.
        </p>
      </section>
    </div>
  );
};

export default PersonalWebsite;
