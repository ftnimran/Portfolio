import React, { useEffect, useState } from "react";

const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem("pwaPromptDismissed");
    if (isDismissed) return;

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);

      setTimeout(() => {
        setShowPopup(true);
      }, 1500);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    localStorage.setItem("pwaPromptDismissed", "true");
    setDeferredPrompt(null);
    setShowPopup(false);
  };

  const handleCancel = () => {
    localStorage.setItem("pwaPromptDismissed", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[5000] flex items-end pb-10 md:pb-0 md:items-center justify-center bg-black/60 backdrop-blur-sm p-4 px-6 animate-[slideTop_0.5s_ease-out]">
      <div className="w-full max-w-[380px] bg-[#051129] border border-white/10 rounded-3xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-4 mb-5">
          <div className="h-14 w-14 rounded-full flex items-center justify-center bg-[rgba(0,238,255,0.1)] text-[#0ef] text-3xl border border-[rgba(0,238,255,0.2)] shadow-[0_0_15px_rgba(0,238,255,0.2)]">
            <i className="bx bx-download"></i>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl leading-tight tracking-wide">
              Install App
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Imran Ali - MERN Stack Developer
            </p>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          Install this portfolio on your home screen for quick access and a
          better native app experience.
        </p>

        <div className="flex gap-4">
          <button
            onClick={handleCancel}
            className="flex-1 py-3 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all duration-300 active:scale-95"
          >
            Cancel
          </button>

          <button
            onClick={handleInstallClick}
            className="flex-1 py-3 rounded-xl bg-[#0ef] text-[#081b29] font-bold shadow-[0_0_15px_rgba(0,238,255,0.3)] hover:shadow-[0_0_25px_#0ef] transition-all duration-300 active:scale-95 tracking-wide"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPWA;