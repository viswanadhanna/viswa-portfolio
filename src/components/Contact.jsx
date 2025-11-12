import React, { useMemo, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer, springHover, shouldReduceMotion } from "../animations/presets";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();
  const [state, setState] = useState("idle"); // idle | loading | success | error
  const rm = useMemo(() => shouldReduceMotion(), []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (state === "loading") return;
    setState("loading");

    emailjs
      .sendForm(
        "service_gybetpe",      // ✅ your Service ID
        "template_jexj90w",     // ✅ your Template ID (from EmailJS)
        form.current,
        "LtFu47g3SfVwWkswr"  // ✅ your Public Key from EmailJS (Account → API Keys)
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!", { position: "bottom-right" });
          e.target.reset();
          setState("success");
          if (!rm) {
            setTimeout(() => setState("idle"), 1400);
          } else {
            setState("idle");
          }
        },
        (error) => {
          console.error("Email error:", error);
          toast.error("❌ Failed to send message. Please try again.", { position: "bottom-right" });
          setState("error");
          setTimeout(() => setState("idle"), 1000);
        }
      );
  };

  return (
    <Motion.section
      className="contact-section"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15%" }}
    >
      <Motion.div className="connect-header" variants={fadeInUp()}>
        <h2 className="text-3xl font-semibold text-text-main drop-shadow-glow-cyan sm:text-4xl">Let’s Connect & Collaborate 💙</h2>
        <p className="mt-2 text-text-muted/90">Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!</p>
      </Motion.div>

      <Motion.div
        className="mx-auto mt-4 flex max-w-2xl flex-wrap items-center justify-center gap-4"
        variants={staggerContainer(0.06)}
      >
        {[
          { href: "https://github.com", Icon: FaGithub, label: "GitHub" },
          { href: "https://linkedin.com", Icon: FaLinkedin, label: "LinkedIn" },
          { href: "mailto:viswaanna6@gmail.com", Icon: FaEnvelope, label: "Email" },
          { href: "https://wa.me/919876543210", Icon: FaWhatsapp, label: "WhatsApp" },
          { href: "https://instagram.com", Icon: FaInstagram, label: "Instagram" },
          { href: "https://facebook.com", Icon: FaFacebook, label: "Facebook" },
        ].map(({ href, Icon, label }, idx) => (
          <Motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            variants={fadeInUp(idx * 0.04)}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-neon-cyan/40 bg-night-soft/60 text-neon-cyan shadow-glow-cyan transition"
            whileHover={springHover}
            whileTap={{ scale: 0.92 }}
          >
            <Icon className="text-lg transition group-hover:drop-shadow-glow-cyan" aria-hidden="true" />
          </Motion.a>
        ))}
      </Motion.div>

      <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-white/10 bg-night-soft/70 p-6 shadow-glow-cyan/30">
      <Motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-3"
        variants={staggerContainer(0.06)}
      >
        <Motion.input className="glass-input" type="text" name="name" placeholder="Your Name" required variants={fadeInUp()} />
        <Motion.input className="glass-input" type="email" name="email" placeholder="Your Email" required variants={fadeInUp(0.04)} />
        <Motion.input className="glass-input" type="text" name="title" placeholder="Subject" required variants={fadeInUp(0.06)} />
        <Motion.textarea className="glass-textarea" name="message" rows="5" placeholder="Your Message..." required variants={fadeInUp(0.08)} />
        <Motion.button
          type="submit"
          disabled={state === "loading"}
          className={`neon-button group ${
            state === "loading" ? "opacity-80 cursor-wait" : ""
          }`}
          whileHover={state === "idle" ? springHover : undefined}
          whileTap={state === "idle" ? { scale: 0.96 } : undefined}
          aria-live="polite"
        >
          {state === "success" ? (
            <>
              <span
                className="inline-block h-3 w-3 rotate-0 rounded-[2px] border-2 border-neon-cyan border-l-0 border-b-0"
                style={{ transform: "rotate(45deg)", marginRight: "2px" }}
                aria-hidden="true"
              />
              Sent
            </>
          ) : state === "loading" ? (
            <>
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <span className="relative z-10">Send Message</span>
              <span className="pointer-events-none absolute inset-0 -z-0 translate-y-full bg-white/20 transition duration-300 group-active:translate-y-0" />
            </>
          )}
        </Motion.button>
      </Motion.form>
      </div>

      <ToastContainer />
    </Motion.section>
  );
}
