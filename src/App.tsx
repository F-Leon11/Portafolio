import { Github, Mail, Menu, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import styles from "./App.module.css";
import Contacto from "./Components/Contacto/Contacto";
import imgreact from "./assets/images/react.svg";
import imgvite from "./assets/images/vite.svg";
import imgtys from "./assets/images/typescript.svg";
import imgjs from "./assets/images/javascript.svg";
import imgvg from "./assets/images/image.png";

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
              src="https://i.pinimg.com/736x/77/4d/97/774d97e93a959378edd02b076cd53836.jpg"
              alt="Profile"
              className={styles.profileImage}
            />
            <h1 className={styles.heading}>¡Hola! Somos Desarrolladores Web</h1>
            <p className={styles.description}>
              Somos un equipo de desarrolladores comprometidos con crear páginas
              web que se adapten exactamente a lo que nuestros clientes
              necesitan, nuestro objetivo es diseñar experiencias únicas,
              funcionales y estéticamente atractivas, garantizando que cada
              detalle refleje las ideas y objetivos del usuario. Como
              practicantes, nos especializamos en crear páginas web a medida,
              centradas en los deseos y objetivos de cada cliente, utilizamos
              herramientas modernas como React, Vite, TypeScript y JavaScript
              para desarrollar soluciones innovadoras que combinen un diseño
              único con una experiencia de usuario impecable.
            </p>

            {/* Enlaces Sociales */}
            <div className={styles.socialLinks}>
              <a href="https://github.com" className={styles.socialIcon}>
                <Github size={50} />
              </a>
              <a
                href="mailto:jfelipeleon11@gmail.com"
                className={styles.socialIcon}
              >
                <Mail size={50} />
              </a>
            </div>

            {/* Sección Tecnologías */}
            <div className={styles.technologiesSection}>
              <h2 className={styles.technologiesHeading}>Tecnologías</h2>
              <div className={styles.technologiesGrid}>
                <div className={styles.technologyItem}>
                  <img
                    src={imgreact}
                    alt="React"
                    className={styles.technologyIcon}
                  />
                  <span className={styles.technologyName}>React</span>
                </div>
                <div className={styles.technologyItem}>
                  <img
                    src={imgvite}
                    alt="Vite"
                    className={styles.technologyIcon}
                  />
                  <span className={styles.technologyName}>Vite</span>
                </div>
                <div className={styles.technologyItem}>
                  <img
                    src={imgtys}
                    alt="TypeScript"
                    className={styles.technologyIcon}
                  />
                  <span className={styles.technologyName}>TypeScript</span>
                </div>
                <div className={styles.technologyItem}>
                  <img
                    src={imgjs}
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
                src={imgvg}
                alt="Proyecto E-commerce"
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>
                  Tienda Virtual de Video juegos
                </h3>
                <p className={styles.projectDescription}>
                  Plataforma de video juegos desarrollada con React y Node.js.
                  Incluye carrito de compras y panel de administración.
                </p>
                <a
                  href="https://f-leon11.github.io/Tvgames/"
                  className={styles.projectLink}
                  target="blank"
                >
                  Ver proyecto{" "}
                  <ExternalLink size={16} className={styles.linkIcon} />
                </a>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className={styles.projectCard}>
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=500"
                alt="Proyecto App Móvil"
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>App de Salud</h3>
                <p className={styles.projectDescription}>
                  Aplicación móvil para gestión de pausas activas y
                  productividad personal desarrollada con React Native. (Dentro
                  del repositorio hay un documento .PDF en donde se podra ver la
                  interfaz de la app)
                </p>

                <a
                  href="https://github.com/F-Leon11/Healthly-GYF"
                  className={styles.projectLink}
                  target="blank"
                >
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
        <Contacto />
      </div>

      {/* Cierre del div con clase minHScreen */}
    </div>
  );
}

export default App;
