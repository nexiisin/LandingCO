import "../../gestion-de-conjuntos/styles/landing.css";
import "../styles/landing.css";
import { useEffect } from "react";
import principalImg from "../../../assets/principal.png";
import dashboardImg from "../../../assets/dashboard.png";
import pagosImg from "../../../assets/pagos.png";
import comunicacionImg from "../../../assets/comunicacion.png";
import LandingHeader, { type LandingNavItem } from "../../shared/components/LandingHeader";
import { useFadeUp } from "../../shared/hooks/useFadeUp";

const navItems: LandingNavItem[] = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Flujo", href: "#flujo" },
  { label: "Precios", href: "#pricing" },
  { label: "Diferencial", href: "#diferencial" },
];

const LandingAsambleas = () => {
  useFadeUp();

  useEffect(() => {
    document.title = "Nexis | Gestión de Asambleas";
  }, []);

  return (
    <div className="landing-container asambleas-container">
      <LandingHeader logoText="NEXIS" navItems={navItems} />

      <section className="hero-section">
        <div className="hero-grid">
          <div>
            <h1 className="hero-title">
              Gestión moderna de <span className="text-primary">asambleas</span> en propiedad horizontal
            </h1>

            <p className="hero-text">
              Coordina convocatorias, registra asistentes, controla quórum y ejecuta votaciones con trazabilidad completa.
              Todo en una experiencia simple para administradores y copropietarios.
            </p>

            <a href="https://wa.me/qr/C6BPQOFRNAXNG1" className="btn-primary">
              Agendar implementación
            </a>

            <a href="#diferencial" className="btn-secondary">
              Ver diferencial
            </a>

            <p className="hero-textoo">Tu asamblea, ordenada y medible desde el primer minuto.</p>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-bg" />
            <img src={principalImg} alt="Panel de asambleas" className="hero-main-image" />
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container">
          <h2 className="product-title">Monitorea toda la sesión desde un panel único</h2>
          <p className="product-text">Visualiza asistencia, quórum, agenda activa y resultados de votación en un flujo continuo.</p>

          <div className="product-mock fade-up">
            <div className="mock-grid">
              <div className="mock-card">
                <img src={dashboardImg} alt="Quórum en tiempo real" className="mock-image" />
              </div>
              <div className="mock-card">
                <img src={pagosImg} alt="Agenda y control" className="mock-image" />
              </div>
              <div className="mock-card">
                <img src={comunicacionImg} alt="Resultados de votación" className="mock-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="assembly-flow-section" id="flujo">
        <div className="assembly-flow-container">
          <div className="section-header">
            <h2 className="section-title">Una asamblea completa, guiada paso a paso</h2>
            <p className="section-subtitle">Este módulo está diseñado como servicio listo para operar: menos fricción, más decisiones cerradas con evidencia.</p>
          </div>

          <div className="assembly-flow-grid fade-up">
            <article className="assembly-step-card">
              <p className="assembly-step-number">01</p>
              <h3 className="assembly-step-title">Preparación inteligente</h3>
              <p className="assembly-step-text">Carga agenda, reglas de quórum y puntos de votación antes de iniciar. El sistema te avisa inconsistencias.</p>
            </article>

            <article className="assembly-step-card">
              <p className="assembly-step-number">02</p>
              <h3 className="assembly-step-title">Sesión en tiempo real</h3>
              <p className="assembly-step-text">Visualiza asistencia activa, quórum habilitado y estado de cada punto sin depender de hojas manuales.</p>
            </article>

            <article className="assembly-step-card">
              <p className="assembly-step-number">03</p>
              <h3 className="assembly-step-title">Cierre automático</h3>
              <p className="assembly-step-text">Obtén resumen final con decisiones y trazabilidad para acelerar acta, comunicación y ejecución posterior.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="benefits-section" id="features">
        <div className="benefits-grid">
          <div>
            <h4 className="benefit-title">Quórum vivo</h4>
            <p className="benefit-text">Conoce al instante si cada punto puede votarse según asistencia y coeficientes acumulados.</p>
          </div>
          <div>
            <h4 className="benefit-title">Votación trazable</h4>
            <p className="benefit-text">Cada decisión queda registrada con hora, contexto y resultado para auditoría futura.</p>
          </div>
          <div>
            <h4 className="benefit-title">Cierre inmediato</h4>
            <p className="benefit-text">Genera un resumen estructurado para acelerar elaboración de actas y comunicaciones.</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div>
            <div className="stat-number">95%</div>
            <p className="stat-text">Menos reprocesos de acta</p>
          </div>
          <div>
            <div className="stat-number">3x</div>
            <p className="stat-text">Más velocidad de votación</p>
          </div>
          <div>
            <div className="stat-number">100%</div>
            <p className="stat-text">Trazabilidad de decisiones</p>
          </div>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="pricing-wrapper fade-up">
          <div className="pricing-card fade-up">
            <div className="pricing-badge">ESPECIALIZADO</div>

            <div className="text-center">
              <h3 className="pricing-title">Plan Asambleas</h3>
              <p className="pricing-subtitle">Módulo dedicado para asambleas ordinarias y extraordinarias.</p>

              <div className="pricing-price">
                <p className="pricing-tag">Valor personalizado según el número de casas o apartamentos del conjunto.</p>
              </div>
            </div>

            <ul className="pricing-list">
              <li>Configuración de agenda y puntos de votación</li>
              <li>Registro de asistentes y poderes</li>
              <li>Quórum en tiempo real</li>
              <li>Resultados automáticos por punto</li>
              <li>Exportable de resumen final</li>
              <li>Soporte durante la sesión</li>
            </ul>

            <a href="https://wa.me/qr/C6BPQOFRNAXNG1" className="btn-full">
              Cotizar ahora
            </a>
          </div>
        </div>
      </section>

      <section className="asambleas-highlight-section" id="diferencial">
        <div className="asambleas-highlight-card fade-up">
          <p className="asambleas-highlight-label">PUNTO DESTACABLE</p>
          <h2 className="asambleas-highlight-title">Radar de Quórum y Votación en Vivo</h2>
          <p className="asambleas-highlight-text">
            El sistema interpreta asistencia, coeficientes y resultados mientras avanza la reunión.
            Así puedes validar decisiones en tiempo real y cerrar con evidencia lista para acta.
          </p>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-text">© 2026 NEXIS. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingAsambleas;
