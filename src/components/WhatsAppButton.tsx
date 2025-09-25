import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511921562675?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20um%20site.", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp hover:bg-whatsapp/90 rounded-full shadow-lg whatsapp-pulse flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </button>
  );
};