import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.error("Email error:", error);
          toast.error("❌ Failed to send message. Please try again.", { position: "bottom-right" });
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="connect-header">
        <h2>Let’s Connect & Collaborate 💙</h2>
        <p>
          Whether it’s a new project, a collaboration, or just to say hi —
          I’d love to hear from you!
        </p>
      </div>

      <div className="social-icons">
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:viswaanna6@gmail.com"><FaEnvelope /></a>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="contact-row">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <input type="text" name="title" placeholder="Subject" required />
        <textarea name="message" rows="5" placeholder="Your Message..." required></textarea>
        <button type="submit" className="btn-send">Send Message</button>
      </form>

      <ToastContainer />
    </section>
  );
}
