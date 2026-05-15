import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";

interface PanelOverlayProps {
  open: boolean;
  onClose: () => void;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}

export function PanelOverlay({ open, onClose, eyebrow, title, children }: PanelOverlayProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-stretch justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.button
            aria-label="Fechar"
            onClick={onClose}
            className="absolute inset-0 bg-noir/70 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Sheet */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ y: "6%", opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: "6%", opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto flex w-full max-w-md flex-col"
            style={{ maxHeight: "100dvh" }}
          >
            <div
              className="m-3 flex flex-1 flex-col overflow-hidden rounded-3xl border border-gold/25"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.14 0 0 / 0.95), oklch(0.08 0 0 / 0.95))",
                boxShadow:
                  "0 30px 80px -20px oklch(0 0 0 / 0.85), 0 0 60px -20px oklch(0.74 0.09 75 / 0.25)",
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 bg-noir/60 text-gold transition-all hover:bg-gold/10 hover:scale-105"
                  aria-label="Voltar"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                </button>
                <div className="flex-1">
                  {eyebrow && (
                    <p className="text-[10px] font-medium tracking-[0.4em] text-gold uppercase">
                      {eyebrow}
                    </p>
                  )}
                  <h2 className="font-display text-xl leading-tight text-foreground">{title}</h2>
                </div>
              </div>
              <div className="mx-5 h-px bg-gradient-to-r from-gold/40 via-gold/10 to-transparent" />

              {/* Content (scrollable inside the sheet) */}
              <div className="flex-1 overflow-y-auto px-5 py-5">{children}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
