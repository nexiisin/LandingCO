import "../styles/landing.css";
import { useEffect, useState, type MouseEvent } from "react";
import dashboardImg from "../../../assets/dashboard.png";
import pagosImg from "../../../assets/pagos.png";
import comunicacionImg from "../../../assets/comunicacion.png";
import principalImg from "../../../assets/principal.png";
import LandingHeader, { type LandingNavItem } from "../../shared/components/LandingHeader";
import { useFadeUp } from "../../shared/hooks/useFadeUp";

const navItems: LandingNavItem[] = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Roles", href: "#roles" },
  { label: "Calculadora", href: "#calculadora" },
  { label: "Precios", href: "#pricing" },
  { label: "Asambleas", href: "#asamblea" },
];

const Landing = () => {
  useFadeUp();
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);
  const [units, setUnits] = useState(140);
  const [hoursPerWeek, setHoursPerWeek] = useState(22);

  useEffect(() => {
    document.title = "Nexis | Gestión de Conjuntos";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setMouseX(x);
    setMouseY(y);
  };

  const monthlyHoursSaved = Math.round(units * (hoursPerWeek / 55));
  const monthlyDaysSaved = monthlyHoursSaved / 8;
  const yearlyHoursSaved = monthlyHoursSaved * 12;

  return (
    <div
      className="landing-container conjuntos-container"
      onMouseMove={handleMouseMove}
      style={{
        ["--mx" as string]: `${mouseX}%`,
        ["--my" as string]: `${mouseY}%`,
      }}
    >
      <LandingHeader logoText="NEXIS" navItems={navItems} />

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-grid">
          
          <div>
            <h1 className="hero-title">
              Gestión inteligente para propiedad {" "}
              <span className="hero-highlight">horizontal</span>
            </h1>

            <p className="hero-text">
              Una plataforma integral para administradores, residentes y personal operativo.
              Centraliza pagos, documentos, comunicación y control diario en un solo sistema 
              práctico, seguro y fácil de usar. Diseñada a partir de procesos reales de 
              administración de propiedad horizontal.
            </p>

            <a href="https://wa.me/qr/C6BPQOFRNAXNG1" className="btn-primary">
              Empieza Ahora
            </a>

            <a href="#" className="btn-secondary">
              Ver Demo
            </a>

            <p className="hero-textoo">
              Menos tiempo operando, más tiempo administrando.
            </p>
          </div>
          
          <div className="hero-image-wrapper">
            <div className="hero-bg"></div>
              <img src={principalImg} alt="principal" className="hero-main-image" />
          </div>

        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="product-section">

        <div className="product-container">

          <h2 className="product-title">
            Visualiza todo tu conjunto en un solo panel
          </h2>

          <p className="product-text">
            Control financiero, comunicación y operación diaria desde un dashboard centralizado.
          </p>

          <div className="product-mock fade-up">

            <div className="mock-grid">
              <div className="mock-card">
                <img src={dashboardImg} alt="Dashboard" className="mock-image" />
              </div>

              <div className="mock-card">
                <img src={pagosImg} alt="Pagos" className="mock-image" />
              </div>

              <div className="mock-card">
                <img src={comunicacionImg} alt="Comunicación" className="mock-image" />
              </div>
            </div>

          </div>

        </div> 

      </section>

      {/* ROLES */}
      <section className="roles-section" id="roles">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Soluciones para cada integrante
            </h2>
            <p className="section-subtitle">
              Herramientas diseñadas específicamente para optimizar las tareas diarias de todo el ecosistema residencial.
            </p>
          </div>

          <div className="roles-grid">

            {/* Administradores */}
            <div className="role-card fade-up">
              <h3 className="role-title">Administradores</h3>
              <ul className="role-list">
                <li><span className="check">✓</span> Automatización de cobros y control de pagos.</li>
                <li><span className="check">✓</span> Gestión documental digital centralizada.</li>
                <li><span className="check">✓</span> Comunicación masiva y segmentada en segundos.</li>
                <li><span className="check">✓</span> Herramientas digitales para asambleas (Plus extra).</li>
              </ul>
            </div>

            {/* Residentes */}
            <div className="role-card fade-up">
              <h3 className="role-title">Residentes</h3>
              <ul className="role-list">
                <li><span className="check">✓</span> Consulta de recibos, documentos y avisos.</li>
                <li><span className="check">✓</span> Notificaciones inmediatas del conjunto.</li>
                <li><span className="check">✓</span> Envío de solicitudes a la administración.</li>
                <li><span className="check">✓</span> Historial de comunicaciones y novedades.</li>
              </ul>
            </div>

            {/* Celadores */}
            <div className="role-card fade-up">
              <h3 className="role-title">Celadores</h3>
              <ul className="role-list">
                <li><span className="check">✓</span> Control de novedades y eventos diarios.</li>
                <li><span className="check">✓</span> Notificación de llegada de paquetes.</li>
                <li><span className="check">✓</span> Botón de pánico y alertas de seguridad.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits-section" id="features">
        <div className="benefits-grid">
          <div>
            <h4 className="benefit-title">Ahorro de tiempo</h4>
            <p className="benefit-text">
              Automatiza tareas repetitivas como gestión de documentos, registros y comunicación masiva para reducir trabajo manual hasta un 60%.
            </p>
          </div>

          <div>
            <h4 className="benefit-title">Comunicación inmediata</h4>
            <p className="benefit-text">
              Envía avisos, notificaciones y mensajes en tiempo real sin depender de grupos informales o canales dispersos.
            </p>
          </div>

          <div>
            <h4 className="benefit-title">Información organizada y accesible</h4>
            <p className="benefit-text">
              Todos los datos del conjunto en un solo lugar, con acceso rápido y controlado para cada tipo de usuario generando confianza.
            </p>
          </div>


        </div>
      </section>

      {/* METRICS */}
      <section className="stats-section">
        <div className="stats-grid">

          <div>
            <div className="stat-number">60%</div>
            <p className="stat-text">Reducción operativa</p>
          </div>

          <div>
            <div className="stat-number">100%</div>
            <p className="stat-text">Digitalización documental</p>
          </div>

          <div>
            <div className="stat-number">24/7</div>
            <p className="stat-text">Acceso a la información</p>
          </div>

        </div>

      </section>

      <section className="savings-section" id="calculadora">
        <div className="savings-wrapper fade-up">
          <div className="savings-head">
            <h2 className="section-title">Calculadora de ahorro operativo</h2>
            <p className="section-subtitle">
              Simula el impacto de digitalizar procesos del conjunto con Nexis.
            </p>
          </div>

          <div className="savings-grid">
            <div className="savings-controls">
              <label htmlFor="unitsRange">Unidades del conjunto: {units}</label>
              <input
                id="unitsRange"
                type="range"
                min={40}
                max={500}
                value={units}
                onChange={(event) => setUnits(Number(event.target.value))}
              />

              <label htmlFor="hoursRange">Horas semanales en tareas repetitivas: {hoursPerWeek}</label>
              <input
                id="hoursRange"
                type="range"
                min={6}
                max={45}
                value={hoursPerWeek}
                onChange={(event) => setHoursPerWeek(Number(event.target.value))}
              />
            </div>

            <div className="savings-results">
              <article>
                <h3>{monthlyHoursSaved} h</h3>
                <p>Horas recuperadas al mes</p>
              </article>
              <article>
                <h3>{monthlyDaysSaved.toFixed(1)} dias</h3>
                <p>Tiempo operativo recuperado al mes</p>
              </article>
              <article>
                <h3>{yearlyHoursSaved} h</h3>
                <p>Horas recuperadas al año</p>
              </article>
            </div>
          </div>
        </div>
      </section>
      

      {/* PRICING */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-wrapper fade-up">
          <div className="pricing-card fade-up">

            <div className="pricing-badge">
              PRINCIPAL
            </div>

            <div className="text-center">
              <h3 className="pricing-title">Plan Integral</h3>
              <p className="pricing-subtitle">
                Todo lo que necesitas para gestionar tu conjunto.
              </p>

              <div className="pricing-price">
                <p className="pricing-tag">
                  Precio único por copropiedad
                </p>
                <span className="price">$200.000</span>
                <span className="per">/mes</span>
              </div>
            </div>

            <ul className="pricing-list">
              <li>Gestión de documentos del conjunto</li>
              <li>Comunicaciones masivas y segmentadas</li>
              <li>Panel administrador web</li>
              <li>App web para residentes</li>
              <li>Módulo básico de vigilancia (novedades)</li>
              <li>Soporte</li>
              <li>Actualizaciones del sistema</li>

            </ul>

            <a href="https://wa.me/qr/C6BPQOFRNAXNG1" className="btn-full">
              Obtener Plan
            </a>

          </div>
        </div>
      </section>

      {/* CTA SOLO ASAMBLEA */}
      <section className="cta-asamblea-section" id="asamblea">
        <div className="cta-asamblea-container">

          <h2 className="cta-asamblea-title">
            ¿Solo necesitas gestionar tu asamblea?
          </h2>

          <p className="cta-asamblea-text">
            También contamos con una solución específica para asambleas:
            registro digital, control de quórum, votaciones en tiempo real
            y generación automática de resultados.
          </p>

          <a
            href="/gestion-de-asambleas"
            className="cta-asamblea-button"
          >
            Ver solución para asambleas
          </a>

       </div>
      </section>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-text">
            © 2026 ISISISI. Todos los derechos reservados.
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default Landing;