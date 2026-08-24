import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("sending");
    setResult("Sending message...");

    const formData = new FormData(e.target);
    
    // Securely fetching the API key from .env file
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message Sent Successfully!");
        e.target.reset();
        
        // 3 seconds baad message smoothly gayab ho jayega
        setTimeout(() => {
          setResult("");
          setStatus("");
        }, 3000);
      } else {
        setStatus("error");
        setResult("Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("error");
      setResult("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen pt-[70px] px-[5%] md:px-[10%] pb-10">
      <SectionTitle titleText1="Contact" titleText2=" Me" />

      <div className="flex justify-center items-center mt-12 md:mt-16">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[600px] rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-8 md:p-10 flex flex-col gap-6 transition-all duration-500 hover:border-[#0ef] hover:shadow-[0_20px_50px_rgba(0,238,255,0.15)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4 text-white focus:border-[#0ef] outline-none transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4 text-white focus:border-[#0ef] outline-none transition-all"
            />
          </div>
          
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            maxLength="15"
            className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4 text-white focus:border-[#0ef] outline-none transition-all"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message..."
            required
            className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4 text-white focus:border-[#0ef] outline-none transition-all resize-none"
          />

          {/* Fix: flex-col-reverse used so button stays up and text goes down on mobile */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 sm:gap-6 mt-1">
            <span 
              className={`text-sm text-center sm:text-left font-semibold transition-all duration-500 transform ${
                status === "success" 
                  ? "text-[#00ffaa] opacity-100 translate-y-0" 
                  : status === "error" 
                  ? "text-red-500 opacity-100 translate-y-0" 
                  : status === "sending"
                  ? "text-[#0ef] opacity-100 translate-y-0 animate-pulse"
                  : "opacity-0 translate-y-2 sm:translate-y-3"
              }`}
            >
              {result || '\u00A0'}
            </span>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-fit px-10 py-3 rounded-xl font-bold bg-[rgba(0,238,255,0.8)] text-[#081b29] hover:bg-[#0ef] hover:shadow-[0_15px_30px_rgba(0,238,255,0.5)] transition-all duration-[0.4s] disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;