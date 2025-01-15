import styles from "./Contacto.module.css";

function Contacto() {
  return (
    <div className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Me</h2>
        <div className={styles.contactList}>
          {/* GitHub */}
          <div className={styles.contactItem}>
            <a
              href="https://github.com/F-Leon11"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <img src="" alt="GitHub" className={styles.icon} />
              F-Leon11
            </a>
          </div>
          {/* Email */}
          <div className={styles.contactItem}>
            <a href="mailto:jfelipeleon11@gmail.com" className={styles.link}>
              <img src="/gmail.svg" alt="Email" className={styles.icon} />
              jfelipeleon11@gmail.com
            </a>
          </div>
          {/* WhatsApp */}
          <div className={styles.contactItem}>
            <a
              href="https://wa.me/3202238919"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <img src="/whatsapp.svg" alt="WhatsApp" className={styles.icon} />
              +57 3202238919
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contacto;
