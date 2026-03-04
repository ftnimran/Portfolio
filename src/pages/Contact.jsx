import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");

    const formData = new FormData(e.target);
    // Web3Forms Access Key
    formData.append("access_key", "eddbd3de-f399-4407-aaa8-cea74e32a0c4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        e.target.reset();
        // 3 seconds baad status clear ho jayega
        setTimeout(() => setResult(""), 3000);
      } else {
        console.error("Submission Error:", data);
        setResult("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult("Network error. Please check your connection.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen pt-17.5 px-[5%] md:px-[10%] pb-0 *:leading-tight"
    >
      <SectionTitle titleText1="Contact" titleText2=" Me" />

      <div className="flex flex-col md:flex-row gap-12 items-center justify-between relative mt-8 md:mt-20 w-full h-full">
        {/* Info Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">Let's Talk</h1>
          <p className="text-gray-600 text-lg">
            Let's create something amazing together. Contact me.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-700">
              <i className="bx bxs-envelope text-xl text-blue-600"></i>
              <a
                href="mailto:imran30599@gmail.com"
                className="hover:underline"
              >
                imran30599@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <i className="bx bxs-phone-call text-xl text-blue-600"></i>
              <a
                href="https://wa.me/7783037329"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                +91-7783037329
              </a>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <i className="bx bx-current-location text-xl text-blue-600"></i>
              <span>Bhopal, Madhya Pradesh</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
          <input
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-hidden transition-all"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <input
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-hidden transition-all"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <input
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-hidden transition-all"
          type="tel"
          name="mobile"
          placeholder="Enter mobile number"
          maxLength="10"
        />
          <textarea
            name="message"
            placeholder="Enter your message"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-hidden transition-all resize-none"
            rows={5}
            required
          />

          {/* Status Notification */}
          {result && (
            <span className="text-sm font-semibold text-blue-600 animate-pulse">
              {result}
            </span>
          )}

          <button
            type="submit"
            className="w-fit px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 cursor-pointer transition-colors active:scale-95"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
