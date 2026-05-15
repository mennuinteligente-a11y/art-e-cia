import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  MessageCircle,
  Star,
  ShoppingBag,
  BadgeDollarSign,
  Instagram,
  Gift,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import logo from "@/assets/logo.png";
import giftBijou from "@/assets/gift-bijou.jpg";
import giftBeach from "@/assets/gift-beach.jpg";
import giftBox from "@/assets/gift-box.jpg";
import resaleImg from "@/assets/resale.jpg";
import { GoldParticles } from "@/components/Particles";
import { BioButton } from "@/components/BioButton";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { PanelOverlay } from "@/components/PanelOverlay";

const WA_CATALOG =
  "https://wa.me/5513997850093?text=Ol%C3%A1%21%20Vim%20pelo%20Instagram%20da%20Art%20%26%20CIA%20e%20quero%20ver%20os%20produtos%20dispon%C3%ADveis.";
const WA_RESALE =
  "https://wa.me/5513997850093?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Art%20%26%20CIA%20e%20quero%20saber%20sobre%20produtos%20para%20revenda.";
const GOOGLE_REVIEWS =
  "https://www.google.com/search?sca_esv=ffa8f2a440a92ee0&sxsrf=ANbL-n4CLs0sV_wndMoWwIFHrXL1okaB_w:1778861649976&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOXoLr7_hoy0u1WlTm9OKjOO-M7yItz0g2-5chCdp_mXFP3Lrz5PYKaiO0oSBtP_oj_HpzGdK3WCCV7KQkvhADktKw7Yo&q=ART+%26+CIA+Coment%C3%A1rios&sa=X&ved=2ahUKEwitkYGG2LuUAxUKrJUCHacmMEAQ0bkNegQILhAF";
const GOOGLE_MAPS = "https://share.google/4su0CyhBrE3Nj7kZQ";
const GOOGLE_MAPS_EMBED =
  "https://maps.google.com/maps?q=Balne%C3%A1rio+Perequ%C3%AA+Guaruj%C3%A1&t=&z=14&ie=UTF8&iwloc=&output=embed";
const INSTAGRAM = "https://instagram.com/";

type PanelKey = "gifts" | "resale" | "location" | "reviews" | "instagram" | null;

export default function App() {
  const [panel, setPanel] = useState<PanelKey>(null);
  const close = () => setPanel(null);

  return (
    <main className="relative h-[100dvh] overflow-hidden">
      <GoldParticles count={22} />

      {/* HOME — fits in one screen */}
      <section className="relative z-10 mx-auto flex h-full max-w-md flex-col items-center justify-between px-6 py-6 text-center">
        {/* Top: logo + identity */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 rounded-full blur-2xl"
              style={{ background: "var(--gradient-radial)" }}
            />
            <img
              src={logo}
              alt="Art & CIA — Bijuterias & Acessórios"
              width={132}
              height={132}
              className="h-28 w-28 rounded-full object-cover ring-1 ring-gold/30 sm:h-32 sm:w-32"
              style={{ boxShadow: "0 20px 60px -20px var(--gold)" }}
            />
          </div>

          <h1 className="mt-4 font-display text-3xl font-light tracking-[0.18em] gradient-gold-text">
            ART &amp; CIA
          </h1>
          <p className="mt-0.5 text-[10px] uppercase tracking-[0.4em] text-gold/80">
            Bijuterias &amp; Acessórios
          </p>

          <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
            <Sparkles className="h-3 w-3 text-gold" strokeWidth={1.5} />
            <span>Presentes e achadinhos no Perequê</span>
            <Sparkles className="h-3 w-3 text-gold" strokeWidth={1.5} />
          </div>
          <p className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <MapPin className="h-3 w-3 text-gold" strokeWidth={1.75} />
            Balneário Perequê — Guarujá
          </p>
        </motion.div>

        {/* Buttons */}
        <div className="mt-4 flex w-full flex-col gap-2.5">
          <BioButton
            href={WA_CATALOG}
            icon={MessageCircle}
            label="WhatsApp da Loja"
            sub="Atendimento direto"
            variant="primary"
            compact
            delay={0.05}
          />
          <BioButton
            onClick={() => setPanel("gifts")}
            icon={Gift}
            label="Presentes & Mimos"
            sub="Galeria de achadinhos"
            external={false}
            compact
            delay={0.1}
          />
          <BioButton
            onClick={() => setPanel("resale")}
            icon={BadgeDollarSign}
            label="Produtos para Revenda"
            sub="Para vendedores de praia"
            external={false}
            compact
            delay={0.15}
          />
          <BioButton
            onClick={() => setPanel("location")}
            icon={MapPin}
            label="Como Chegar"
            sub="Localização da loja"
            external={false}
            compact
            delay={0.2}
          />
          <BioButton
            onClick={() => setPanel("reviews")}
            icon={Star}
            label="Avaliações no Google"
            sub="Reputação da loja"
            external={false}
            compact
            delay={0.25}
          />
          <BioButton
            onClick={() => setPanel("instagram")}
            icon={Instagram}
            label="Instagram"
            sub="@artecia"
            external={false}
            compact
            delay={0.3}
          />
        </div>

        <p className="mt-3 text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          Perequê · Guarujá · SP
        </p>
      </section>

      <FloatingWhatsApp />

      {/* PANELS */}
      <PanelOverlay open={panel === "gifts"} onClose={close} eyebrow="Para presentear" title="Presentes & Mimos">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Achadinhos para presentear, levar uma lembrança bonita do litoral ou encontrar aquele
          mimo de última hora.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {[
            { src: giftBijou, title: "Bijuterias", caption: "Folheado delicado" },
            { src: giftBeach, title: "Lembranças", caption: "Artesanato de praia" },
            { src: giftBox, title: "Presentes", caption: "Embrulhos prontos" },
            { src: resaleImg, title: "Acessórios", caption: "Variedade local" },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12, rotateX: -6 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              whileHover={{ y: -4, rotateY: -3, rotateX: 3 }}
              className="glass-card overflow-hidden rounded-2xl"
              style={{ transformStyle: "preserve-3d", perspective: 800 }}
            >
              <div className="relative aspect-[4/5]">
                <img src={c.src} alt={c.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-2.5">
                  <p className="font-display text-base text-gold-soft leading-tight">{c.title}</p>
                  <p className="text-[10px] tracking-wide text-foreground/70">{c.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-2.5">
          <BioButton href={WA_CATALOG} icon={MessageCircle} label="Falar no WhatsApp" sub="Pedir um presente" variant="primary" compact />
          <BioButton href={GOOGLE_MAPS} icon={MapPin} label="Veja pessoalmente na loja" sub="Como chegar" compact />
        </div>
      </PanelOverlay>

      <PanelOverlay open={panel === "resale"} onClose={close} eyebrow="Atacado · Revenda" title="Produtos para Revenda">
        <div className="glass-card overflow-hidden rounded-2xl">
          <div className="relative aspect-[5/3]">
            <img src={resaleImg} alt="Bijuterias e acessórios para revenda nas praias do Guarujá" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-noir to-transparent" />
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-foreground/85">
          Variedade para vendedores, artesãos e revendedores que procuram peças para painel,
          bijuterias e acessórios de giro rápido para vender nas praias do litoral.
        </p>
        <ul className="mt-3 grid grid-cols-2 gap-1.5 text-[11px] text-muted-foreground">
          {[
            "Peças para painel",
            "Bijuterias atacado",
            "Acessórios variados",
            "Artesanato local",
            "Giro rápido",
            "Fornecedor no Perequê",
          ].map((tag) => (
            <li key={tag} className="flex items-center gap-1.5 rounded-full border border-gold/20 bg-noir/40 px-2.5 py-1">
              <span className="h-1 w-1 rounded-full bg-gold" />
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <BioButton href={WA_RESALE} icon={ShoppingBag} label="Chamar no WhatsApp para Revenda" sub="Catálogo e atacado" variant="primary" compact />
        </div>
      </PanelOverlay>

      <PanelOverlay open={panel === "location"} onClose={close} eyebrow="Visite a loja" title="Como Chegar">
        <div className="overflow-hidden rounded-2xl border border-gold/25">
          <iframe
            title="Localização Art & CIA"
            src={GOOGLE_MAPS_EMBED}
            className="h-56 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-foreground/85">
          <MapPin className="h-4 w-4 text-gold" strokeWidth={1.75} />
          Balneário Perequê — entre Guarujá e Bertioga
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Atendemos moradores, turistas e vendedores de praia.
        </p>
        <div className="mt-5">
          <BioButton href={GOOGLE_MAPS} icon={ExternalLink} label="Abrir no Google Maps" sub="Rota até a loja" variant="primary" compact />
        </div>
      </PanelOverlay>

      <PanelOverlay open={panel === "reviews"} onClose={close} eyebrow="Reputação" title="Avaliações no Google">
        <div className="glass-card flex flex-col items-center rounded-2xl p-6 text-center">
          <div className="flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.06 * i }}
              >
                <Star className="h-6 w-6 fill-current" strokeWidth={1.25} />
              </motion.div>
            ))}
          </div>
          <p className="mt-3 font-display text-xl gradient-gold-text">Clientes do Perequê</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Veja o que dizem sobre a Art &amp; CIA no Google.
          </p>
        </div>
        <div className="mt-5">
          <BioButton href={GOOGLE_REVIEWS} icon={Star} label="Avaliar ou Ver Comentários" sub="Google Avaliações" variant="primary" compact />
        </div>
      </PanelOverlay>

      <PanelOverlay open={panel === "instagram"} onClose={close} eyebrow="Redes" title="Instagram @artecia">
        <div className="glass-card flex flex-col items-center rounded-2xl p-8 text-center">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.82 0.08 75), oklch(0.62 0.1 70))",
              boxShadow: "0 20px 50px -10px oklch(0.74 0.09 75 / 0.5)",
            }}
          >
            <Instagram className="h-10 w-10 text-noir" strokeWidth={1.5} />
          </div>
          <p className="mt-4 font-display text-xl gradient-gold-text">@artecia</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Acompanhe novidades, achadinhos e bastidores da loja.
          </p>
        </div>
        <div className="mt-5">
          <BioButton href={INSTAGRAM} icon={Instagram} label="Abrir no Instagram" sub="Seguir a loja" variant="primary" compact />
        </div>
      </PanelOverlay>

      {/* Subtle shared backdrop pulse when any panel opens */}
      <AnimatePresence>
        {panel && (
          <motion.div
            key="ambient"
            className="pointer-events-none fixed inset-0 z-[55]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.74 0.09 75 / 0.08), transparent 60%)",
            }}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
