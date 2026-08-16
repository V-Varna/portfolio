import React from 'react';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaUser,
  FaPen
} from 'react-icons/fa';

import styles from './Contact.module.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:v2005varna@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className={styles.contactSection}>

      {/* Decorative background elements */}
      <div className={styles.decorativeShape}></div>
      <div className={styles.decorativeGlow}></div>

      <div className={styles.container}>

        {/* =========================================
            SECTION TITLE
           ========================================= */}

        <div className={styles.headingWrapper}>

          <h2 className={styles.experienceTitle}>
            Let's <span>Connect</span>
          </h2>

          <div className={styles.headingUnderline}>
            <span></span>
            <i></i>
          </div>

        </div>


        {/* =========================================
            MAIN CONTENT
           ========================================= */}

        <div className={styles.contactGrid}>

          {/* =======================================
              LEFT SIDE
             ======================================= */}

          <div className={styles.contactInfo}>

            {/* Let's Talk Badge */}

            <div className={styles.talkBadge}>
              <FaPaperPlane />
              <span>LET'S TALK</span>
            </div>


            <h3 className={styles.getInTouch}>
              Get in Touch
            </h3>

            <p className={styles.introText}>
              Have a project in mind or want to discuss a potential
              opportunity or collaboration? I'd love to hear from you!
            </p>


            {/* =====================================
                EMAIL CARD
               ===================================== */}

            <a
              href="mailto:v2005varna@gmail.com"
              className={styles.emailCard}
            >

              <div className={styles.contactIcon}>
                <FaEnvelope />
              </div>

              <div className={styles.emailContent}>

                <span className={styles.smallLabel}>
                  EMAIL ME
                </span>

                <strong>
                  v2005varna@gmail.com
                </strong>

              </div>

            </a>


            {/* =====================================
                SOCIAL SECTION
               ===================================== */}

            <div className={styles.connectHeader}>
              <span>CONNECT WITH ME</span>
              <div></div>
            </div>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/varna-vanamala/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >

              <div className={styles.socialIcon}>
                <FaLinkedin />
              </div>

              <div className={styles.socialInfo}>
                <strong>LinkedIn</strong>
                <span>
                  linkedin.com/in/varna-vanamala/
                </span>
              </div>

              <span className={styles.arrow}>
                ↗
              </span>

            </a>


            {/* GitHub */}

            <a
              href="https://github.com/V-Varna"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >

              <div className={styles.socialIcon}>
                <FaGithub />
              </div>

              <div className={styles.socialInfo}>
                <strong>GitHub</strong>
                <span>
                  github.com/V-Varna
                </span>
              </div>

              <span className={styles.arrow}>
                ↗
              </span>

            </a>


            {/* =====================================
                BOTTOM MESSAGE
               ===================================== */}

            <div className={styles.handwritten}>
              Let's build something amazing together!
              <span>♡</span>
            </div>

            <div className={styles.handwrittenLine}></div>

          </div>


          {/* =======================================
              RIGHT SIDE — CONTACT FORM
             ======================================= */}

          <div className={styles.formCard}>

            <h3 className={styles.formTitle}>
              Send a Message
            </h3>


            <form onSubmit={handleSubmit}>

              {/* Name */}

              <div className={styles.formGroup}>

                <label htmlFor="name">
                  Name
                </label>

                <div className={styles.inputWrapper}>

                  <FaUser />

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />

                </div>

              </div>


              {/* Email */}

              <div className={styles.formGroup}>

                <label htmlFor="email">
                  Email
                </label>

                <div className={styles.inputWrapper}>

                  <FaEnvelope />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    required
                  />

                </div>

              </div>


              {/* Message */}

              <div className={styles.formGroup}>

                <label htmlFor="message">
                  Message
                </label>

                <div className={`${styles.inputWrapper} ${styles.textareaWrapper}`}>

                  <FaPen />

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Your message"
                    required
                  />

                </div>

              </div>


              {/* Submit */}

              <button
                type="submit"
                className={styles.sendButton}
              >

                <FaPaperPlane />

                <span>
                  Send Message
                </span>

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}