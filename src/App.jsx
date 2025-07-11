import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const App = () => {
  return (
    <div className="min-h-screen bg-orange-50 text-gray-800 px-6 py-10">
      <section className="text-center py-12">
        <img
          src="/images/profile.jpg"
          alt="Patu Kujo Emmanuel"
          className="mx-auto w-40 h-40 rounded-full shadow-md object-cover"
        />
        <h1 className="text-4xl font-bold mt-4">Patu Kujo Emmanuel</h1>
        <p className="text-md mt-2 text-gray-600">Computer Engineer | Logistics Professional</p>
        <div className="flex justify-center gap-4 text-orange-600 text-2xl mt-4">
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
    </div>
  );
};

export default App;
