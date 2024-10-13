    
//import React from "react";
import "./Contact.css";
import { FaWhatsapp, FaTelegram, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <div className="hero">
                <h1>Get in Touch with Us</h1>
                <p>We would love to hear from you. Whether you have a question or need support, feel free to reach out.</p>
            </div>

            {/* Contact Information Section */}
            <section className="contact-info">
                <h2>Our Contact Methods</h2>
                <p>Reach out through any of the platforms below:</p>
                <div className="contact-icons">
                    <a href="https://bit.ly/3zNKTVw" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
                        <FaWhatsapp /> WhatsApp
                    </a>
                    <a href="https://t.me/hypnosis_039" target="_blank" rel="noopener noreferrer" className="icon telegram">
                        <FaTelegram /> Telegram
                    </a>
                    <a href="https://www.instagram.com/_hypnosis_039" target="_blank" rel="noopener noreferrer" className="icon instagram">
                        <FaInstagram /> Instagram
                    </a>
                    <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon facebook">
                        <FaFacebook /> Facebook
                    </a>
                    <a href="mailto:sonpratap244@gmail.com" className="icon email">
                        <FaEnvelope /> Email
                    </a>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="map-container">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8488029729297!2d77.44338137429361!3d28.634293284002876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee22c60837b7%3A0x7c35343eceb7bde0!2sABES%20Engineering%20College!5e0!3m2!1sen!2sin!4v1728718946879!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;
