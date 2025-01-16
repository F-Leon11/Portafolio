import styles from "./Contacto.module.css";
import imggithub from "../../assets/images/github.svg";
import imgemail from "../../assets/images/gmail.svg";
import imgwhats from "../../assets/images/whatsapp.svg";
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
              <img src={imggithub} alt="GitHub" className={styles.icon} />
              F-Leon11
            </a>
          </div>
          {/* Email */}
          <div className={styles.contactItem}>
            <a href="mailto:jfelipeleon11@gmail.com" className={styles.link}>
              <img src={imgemail} alt="Email" className={styles.icon} />
              gabyvaleng04@gmail.com
            </a>
          </div>
          {/* WhatsApp */}
          <div className={styles.contactItem}>
            <a
              href="https://wa.me/3124576628"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <img src={imgwhats} alt="WhatsApp" className={styles.icon} />
              +57 3124576628
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contacto;
