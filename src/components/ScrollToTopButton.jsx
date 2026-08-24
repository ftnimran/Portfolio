import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[2000] flex justify-center items-center w-10 h-10 bg-transparent border-2 border-[#0ef] rounded-full text-[20px] text-[#0ef] transition-all duration-500 ease-in-out hover:bg-[#0ef] hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef] hover:-translate-y-1
      ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
    >
      <i className="bx bx-up-arrow-alt"></i>
    </button>
  );
};

export default ScrollToTopButton;