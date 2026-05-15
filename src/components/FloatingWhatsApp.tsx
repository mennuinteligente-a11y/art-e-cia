import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/5513997850093?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Art%20%26%20CIA%20e%20quero%20mais%20informa%C3%A7%C3%B5es.";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-noir/85 backdrop-blur-md md:right-6 md:bottom-6"
      style={{
        animation: "pulse-gold 2.4s ease-in-out infinite",
      }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <path
          fill="oklch(0.78 0.16 145)"
          d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.4 2 7.8L.2 31.6l8-2.1A15.6 15.6 0 0 0 31.6 16C31.6 7.4 24.6.4 16 .4Zm0 28.4c-2.5 0-4.9-.7-7-2l-.5-.3-4.7 1.2 1.3-4.6-.3-.5a12.7 12.7 0 1 1 23.6-6.6c0 7-5.7 12.8-12.8 12.8Zm7-9.6c-.4-.2-2.3-1.1-2.6-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-1.9-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.3 0-.5-.1-.7l-1.2-2.9c-.3-.7-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.3 0 1.9 1.4 3.8 1.6 4 .2.3 2.8 4.4 7 6 1 .4 1.7.7 2.3.9.9.3 1.8.2 2.5.2.7-.1 2.3-1 2.6-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5Z"
        />
      </svg>
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  );
}
