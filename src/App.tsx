import { Github, Mail, Menu, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={styles.minHScreen}>
      {/* Barra de Navegación */}
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <div className={styles.branding}>
              <span className={styles.brandText}>Portafolio</span>
            </div>

            {/* Navegación Desktop */}
            <div className={styles.desktopNav}>
              <button
                onClick={() => scrollToSection("inicio")}
                className={styles.navButton}
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className={styles.navButton}
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className={styles.navButton}
              >
                Contacto
              </button>
            </div>

            {/* Botón menú móvil */}
            <div className={styles.mobileMenuButtonContainer}>
              <button onClick={toggleMenu} className={styles.mobileMenuButton}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Navegación Móvil */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            <div className={styles.mobileNavLinks}>
              <button
                onClick={() => scrollToSection("inicio")}
                className={styles.mobileNavButton}
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className={styles.mobileNavButton}
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className={styles.mobileNavButton}
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Sección Inicio */}
      <div id="inicio" className={styles.sectionInicio}>
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200&h=200"
              alt="Profile"
              className={styles.profileImage}
            />
            <h1 className={styles.heading}>¡Hola! Soy Desarrollador Web</h1>
            <p className={styles.description}>
              Especializado en crear experiencias web modernas y atractivas
              utilizando las últimas tecnologías. Apasionado por el desarrollo
              frontend y la creación de interfaces intuitivas. Especializado en
              crear experiencias web modernas y atractivas utilizando las
              últimas tecnologías. Apasionado por el desarrollo frontend y la
              creación de interfaces intuitivas. Especializado en crear
              experiencias web modernas y atractivas utilizando las últimas
              tecnologías. Apasionado por el desarrollo frontend y la creación
              de interfaces intuitivas.
            </p>

            {/* Enlaces Sociales */}
            <div className={styles.socialLinks}>
              <a href="https://github.com" className={styles.socialIcon}>
                <Github size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className={styles.socialIcon}
              >
                <Mail size={24} />
              </a>
            </div>

            {/* Sección Tecnologías */}
            <div className={styles.technologiesSection}>
              <h2 className={styles.technologiesHeading}>Tecnologías</h2>
              <div className={styles.technologiesGrid}>
                <div className={styles.technologyItem}>
                  <img
                    src="/react.svg"
                    alt="React"
                    className={styles.technologyIcon}
                  />
                  <span className={styles.technologyName}>React</span>
                </div>
                <div className={styles.technologyItem}>
                  <img
                    src="/vite.svg"
                    alt="Vite"
                    className={styles.technologyIcon}
                  />
                  <span className={styles.technologyName}>Vite</span>
                </div>
                <div className={styles.technologyItem}>
                  <img
                    src="/typescript.svg"
                    alt="TypeScript"
                    className={styles.technologyIcon}
                  />
                  <span className={styles.technologyName}>TypeScript</span>
                </div>
                <div className={styles.technologyItem}>
                  <img
                    src="/javascript.svg"
                    alt="JavaeScript"
                    className={styles.technologyIcon}
                  />
                  <span className={styles.technologyName}>JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Proyectos */}
      <div id="proyectos" className={styles.projectsSection}>
        <div className={styles.container}>
          <h2 className={styles.projectsHeading}>Mis Proyectos</h2>
          <div className={styles.projectsGrid}>
            {/* Proyecto 1 */}
            <div className={styles.projectCard}>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500"
                alt="Proyecto E-commerce"
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>E-commerce App</h3>
                <p className={styles.projectDescription}>
                  Plataforma de comercio electrónico desarrollada con React y
                  Node.js. Incluye carrito de compras, pagos y panel de
                  administración.
                </p>
                <a href="#" className={styles.projectLink}>
                  Ver proyecto{" "}
                  <ExternalLink size={16} className={styles.linkIcon} />
                </a>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className={styles.projectCard}>
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=500"
                alt="Proyecto Dashboard"
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>Dashboard Analytics</h3>
                <p className={styles.projectDescription}>
                  Dashboard interactivo para visualización de datos
                  empresariales. Construido con React, TypeScript y D3.js.
                </p>
                <a href="#" className={styles.projectLink}>
                  Ver proyecto{" "}
                  <ExternalLink size={16} className={styles.linkIcon} />
                </a>
              </div>
            </div>

            {/* Proyecto 3 */}
            <div className={styles.projectCard}>
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=500"
                alt="Proyecto App Móvil"
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>App de Productividad</h3>
                <p className={styles.projectDescription}>
                  Aplicación móvil para gestión de tareas y productividad
                  personal. Desarrollada con React Native.
                </p>
                <a href="#" className={styles.projectLink}>
                  Ver proyecto{" "}
                  <ExternalLink size={16} className={styles.linkIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Contacto */}
      <div id="contacto" className={styles.contactSection}>
        <div className={styles.containerContact}>
          <h2 className={styles.contactHeading}>Contáctame</h2>
          <div className={styles.contactFormContainer}>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Nombre
                </label>
                <input type="text" id="name" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email
                </label>
                <input type="email" id="email" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={styles.formTextarea}
                ></textarea>
              </div>
              <div>
                <button type="submit" className={styles.submitButton}>
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Cierre del div con clase minHScreen */}
    </div>
  );
}

export default App;
