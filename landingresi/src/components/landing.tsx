import "../styles/landing.css";
import "./Navbar";

const Landing = () => {
  return (
    <div className="landing-container">
      
      {/* HEADER */}
      <header className="landing-header">
        <nav className="landing-nav">
          
          <div className="nav-logo">
            <div className="logo-icon">
              <svg className="logo-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <span className="logo-text">
              ISISISIS
            </span>
          </div>

          <div className="nav-links">
            <a href="#features" className="nav-link">Funcionalidades</a>
            <a href="#roles" className="nav-link">Roles</a>
            <a href="#pricing" className="nav-link">Precios</a>
            <a href="#asamblea" className="nav-link">Asambleas</a>
          </div>

        </nav>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-grid">
          
          <div>
            <h1 className="hero-title">
              Gestión inteligente para propiedad {" "}
              <span className="text-primary">horizontal</span>
            </h1>

            <p className="hero-text">
              Una plataforma integral para administradores, residentes y personal operativo.
              Centraliza pagos, documentos, comunicación y control diario en un solo sistema 
              práctico, seguro y fácil de usar, pensada directamente desde la mente de un 
              administrador.
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
            <img
              className="hero-image"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF-H6ae3H_3IRB3xsmMBoiEeIzclt4v0H1DEzEroibLqqyJkGI1A-_matTGsRQuIhI2qj2WDtHhREtMQILMco8iWIqhiizn2FfmvTr7PjwCRJppOIXtoPyMdHRQVWcEEHOTlKTsUIl9X4clC-OhU4oR80axxNC-uotpfDdJoF6s6cI_8HqSxVHaUVCRiQD5uJBdG4-vxF8BCrElrxNwRZYMOg6lTT5XiD_LBU1A0aYIBjsDubAiOZCZNYTByIwiDvPlj6z55E_MuM"
              alt="Administradora usando tablet"
            />
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
            <div className="role-card">
              <h3 className="role-title">Administradores</h3>
              <ul className="role-list">
                <li><span className="check">✓</span> Automatización de cobros y control de pagos.</li>
                <li><span className="check">✓</span> Gestión documental digital centralizada.</li>
                <li><span className="check">✓</span> Comunicación masiva y segmentada en segundos.</li>
                <li><span className="check">✓</span> Herramientas digitales para asambleas (Plus extra).</li>
              </ul>
            </div>

            {/* Residentes */}
            <div className="role-card">
              <h3 className="role-title">Residentes</h3>
              <ul className="role-list">
                <li><span className="check">✓</span> Consulta de recibos, documentos y avisos.</li>
                <li><span className="check">✓</span> Notificaciones inmediatas del conjunto.</li>
                <li><span className="check">✓</span> Envío de solicitudes a la administración.</li>
                <li><span className="check">✓</span> Historial de comunicaciones y novedades.</li>
              </ul>
            </div>

            {/* Celadores */}
            <div className="role-card">
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

      {/* PRICING */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-wrapper">
          <div className="pricing-card">

            <div className="pricing-badge">
              PRINCIPAL
            </div>

            <div className="text-center">
              <h3 className="pricing-title">Plan Integral</h3>
              <p className="pricing-subtitle">
                Todo lo que necesitas para gestionar tu conjunto.
              </p>

              <div className="pricing-price">
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
            href="/asambleas"
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