export const WhatsAppButton = () => {
  const openWhatsApp = () => {
  window.open("https://wa.me/5511921572675?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20um%20site.", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp hover:bg-green-600 hover:scale-110 rounded-full shadow-lg whatsapp-pulse flex items-center justify-center transition-all duration-300 md:w-16 md:h-16 w-10 h-10"
      aria-label="Falar no WhatsApp"
    >
      <img src="/src/assets/whatsapp-logo.png" alt="WhatsApp" className="md:w-9 md:h-9 w-6 h-6" style={{filter: 'brightness(0) invert(1)'}} />
    </button>
  );
};