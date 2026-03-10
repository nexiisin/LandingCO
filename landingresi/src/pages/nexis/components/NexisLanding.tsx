import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useFadeUp } from "../../shared/hooks/useFadeUp";

interface Product {
  title: string;
  description: string;
  cta: string;
  to: string;
  icon: string;
}

interface Service {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface Founder {
  name: string;
  role: string;
  summary: string;
  profileUrl: string;
  avatarUrl: string;
}

const products: Product[] = [
  {
    title: "Gestion de Asambleas",
    description: "Quorum en tiempo real, votacion trazable y cierre con evidencia lista para acta.",
    cta: "Ver producto",
    to: "/gestion-de-asambleas",
    icon: "⬢",
  },
  {
    title: "Gestion de Conjuntos",
    description: "Operacion integral de propiedad horizontal: pagos, comunicacion y control centralizado.",
    cta: "Ver producto",
    to: "/gestion-de-conjuntos",
    icon: "◉",
  },
];

const services: Service[] = [
  {
    title: "Paginas web personalizadas",
    description: "Sitios veloces, optimizados y hechos a la medida de cada negocio.",
  },
  {
    title: "Bots automatizados",
    description: "Bots para WhatsApp, web y operaciones internas que reducen tareas repetitivas.",
  },
  {
    title: "Aplicaciones a medida",
    description: "Software adaptado al flujo real de tu negocio y sus objetivos.",
  },
  {
    title: "Web apps moviles y de escritorio",
    description: "Experiencias unificadas para operar desde cualquier dispositivo.",
  },
  {
    title: "Automatizacion de procesos",
    description: "Eliminamos cuellos de botella y errores manuales en tus operaciones clave.",
  },
  {
    title: "Integraciones con APIs",
    description: "Conecta tus sistemas para que la informacion fluya sin friccion.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Idea",
    description: "Entendemos objetivos, publico y resultado esperado.",
  },
  {
    title: "Diseno",
    description: "Prototipamos experiencia, arquitectura y flujos de conversion.",
  },
  {
    title: "Desarrollo",
    description: "Construimos con tecnologias modernas, foco en rendimiento y escalabilidad.",
  },
  {
    title: "Implementacion",
    description: "Desplegamos, conectamos servicios y dejamos todo operando.",
  },
  {
    title: "Escalamiento",
    description: "Medimos, optimizamos y evolucionamos segun resultados reales.",
  },
];

const founders: Founder[] = [
  {
    name: "Nicolas Rodriguez",
    role: "Co-Founder | Product & Engineering",
    summary: "Lidera la estrategia tecnica y la construccion de productos con alto impacto.",
    profileUrl: "https://example.com/nicolas-rodriguez",
    avatarUrl: "https://i.pravatar.cc/320?img=12",
  },
  {
    name: "Isis Sanchez",
    role: "Co-Founder | Growth & Operations",
    summary: "Transforma necesidades de negocio en soluciones implementables y medibles.",
    profileUrl: "https://example.com/isis-sanchez",
    avatarUrl: "https://i.pravatar.cc/320?img=47",
  },
];

const NexisLanding = () => {
  useFadeUp();

  const [activeStep, setActiveStep] = useState(0);
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);

  const [automationTasks, setAutomationTasks] = useState(120);
  const [minutesPerTask, setMinutesPerTask] = useState(14);

  useEffect(() => {
    document.title = "Nexis | Soluciones Tecnologicas";
  }, []);

  const simulator = useMemo(() => {
    const hoursMonthly = (automationTasks * minutesPerTask) / 60;
    const productiveDays = hoursMonthly / 8;
    const yearlyHours = hoursMonthly * 12;

    return {
      hoursMonthly,
      productiveDays,
      yearlyHours,
    };
  }, [automationTasks, minutesPerTask]);

  const handleHeroMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setMouseX(x);
    setMouseY(y);
  };

  return (
    <main className="nexis-page">
      <header className="nexis-header">
        <div className="nexis-header-inner">
          <a href="#inicio" className="nexis-brand">NEXIS</a>

          <nav className="nexis-nav">
            <a href="#productos">Productos</a>
            <a href="#servicios">Servicios</a>
            <a href="#metodo">Como trabajamos</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a href="#contacto" className="nexis-header-cta">Hablar con Nexis</a>
        </div>
      </header>

      <section
        id="inicio"
        className="nexis-hero"
        onMouseMove={handleHeroMouseMove}
        style={{
          ["--glow-x" as string]: `${mouseX}%`,
          ["--glow-y" as string]: `${mouseY}%`,
        }}
      >
        <div className="nexis-grid-overlay" />
        <div className="nexis-hero-content fade-up">
          <p className="nexis-hero-chip">Tecnologia aplicada a resultados reales</p>
          <h1 className="nexis-hero-title">
            Construimos productos y automatizaciones que hacen crecer tu negocio.
          </h1>
          <p className="nexis-hero-description">
            Nexis disena y desarrolla soluciones tecnologicas modernas para personas, emprendedores y pymes.
            Unimos estrategia, diseno y desarrollo para transformar ideas en sistemas utiles y escalables.
          </p>

          <div className="nexis-hero-actions">
            <a href="#productos" className="nexis-btn nexis-btn-primary">Ver servicios</a>
            <a href="#contacto" className="nexis-btn nexis-btn-secondary">Contactar</a>
          </div>
        </div>

        <div className="nexis-hero-panel fade-up">
          <div className="nexis-hero-panel-label">Estado de plataformas</div>
          <div className="nexis-hero-metrics">
            <article>
              <h3>99.9%</h3>
              <p>Uptime</p>
            </article>
            <article>
              <h3>+40%</h3>
              <p>Mejora de flujo</p>
            </article>
            <article>
              <h3>24/7</h3>
              <p>Operacion digital</p>
            </article>
          </div>
        </div>
      </section>

      <section id="productos" className="nexis-section">
        <div className="nexis-section-head fade-up">
          <p className="nexis-kicker">Nuestros productos</p>
          <h2>Soluciones listas para operar hoy</h2>
          <p>Disenadas para resolver procesos reales, con arquitectura preparada para crecer.</p>
        </div>

        <div className="nexis-products-grid">
          {products.map((product) => (
            <article key={product.title} className="nexis-product-card fade-up">
              <div className="nexis-product-icon">{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <Link to={product.to} className="nexis-product-link">{product.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section id="servicios" className="nexis-section nexis-section-alt">
        <div className="nexis-section-head fade-up">
          <p className="nexis-kicker">Servicios</p>
          <h2>Capacidad tecnica para construir lo que tu negocio necesita</h2>
        </div>

        <div className="nexis-services-grid">
          {services.map((service) => (
            <article key={service.title} className="nexis-service-card fade-up">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="metodo" className="nexis-section">
        <div className="nexis-section-head fade-up">
          <p className="nexis-kicker">Como trabajamos</p>
          <h2>Un proceso claro, visual y orientado a impacto</h2>
        </div>

        <div className="nexis-process-track fade-up">
          {processSteps.map((step, index) => (
            <button
              key={step.title}
              className={`nexis-process-step ${activeStep === index ? "is-active" : ""}`}
              onMouseEnter={() => setActiveStep(index)}
              onFocus={() => setActiveStep(index)}
              onClick={() => setActiveStep(index)}
              type="button"
            >
              <span>{`0${index + 1}`}</span>
              <h3>{step.title}</h3>
            </button>
          ))}
        </div>

        <article className="nexis-process-detail fade-up">
          <h3>{processSteps[activeStep].title}</h3>
          <p>{processSteps[activeStep].description}</p>
        </article>
      </section>

      <section className="nexis-section nexis-section-alt">
        <div className="nexis-section-head fade-up">
          <p className="nexis-kicker">Seccion interactiva</p>
          <h2>Simulador de automatizacion</h2>
          <p>Ajusta los valores y calcula el tiempo que un bot puede liberar cada mes.</p>
        </div>

        <div className="nexis-simulator fade-up">
          <div className="nexis-simulator-controls">
            <label htmlFor="tasksRange">Tareas repetitivas al mes: {automationTasks}</label>
            <input
              id="tasksRange"
              type="range"
              min={20}
              max={500}
              value={automationTasks}
              onChange={(event) => setAutomationTasks(Number(event.target.value))}
            />

            <label htmlFor="minutesRange">Minutos por tarea: {minutesPerTask}</label>
            <input
              id="minutesRange"
              type="range"
              min={2}
              max={45}
              value={minutesPerTask}
              onChange={(event) => setMinutesPerTask(Number(event.target.value))}
            />
          </div>

          <div className="nexis-simulator-results">
            <article>
              <h3>{simulator.hoursMonthly.toFixed(1)} h</h3>
              <p>Horas recuperadas por mes</p>
            </article>
            <article>
              <h3>{simulator.productiveDays.toFixed(1)} dias</h3>
              <p>Tiempo productivo adicional</p>
            </article>
            <article>
              <h3>{simulator.yearlyHours.toFixed(0)} h</h3>
              <p>Horas recuperadas al ano</p>
            </article>
          </div>
        </div>
      </section>

      <section id="nosotros" className="nexis-section">
        <div className="nexis-section-head fade-up">
          <p className="nexis-kicker">Nosotros</p>
          <h2>Equipo fundador</h2>
        </div>

        <div className="nexis-founders-grid">
          {founders.map((founder) => (
            <article key={founder.name} className="nexis-founder-card fade-up">
              <img src={founder.avatarUrl} alt={founder.name} className="nexis-founder-avatar" />
              <h3>{founder.name}</h3>
              <p className="nexis-founder-role">{founder.role}</p>
              <p>{founder.summary}</p>
              <a href={founder.profileUrl} target="_blank" rel="noreferrer" className="nexis-founder-link">
                Ver perfil
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="nexis-section nexis-section-contact">
        <div className="nexis-section-head fade-up">
          <p className="nexis-kicker">Contacto</p>
          <h2>Convirtamos tu idea en una solucion real</h2>
        </div>

        <form className="nexis-contact-form fade-up">
          <label htmlFor="nameInput">Nombre</label>
          <input id="nameInput" type="text" placeholder="Tu nombre" />

          <label htmlFor="emailInput">Correo</label>
          <input id="emailInput" type="email" placeholder="tu@empresa.com" />

          <label htmlFor="messageInput">Cuentanos tu proyecto</label>
          <textarea id="messageInput" rows={4} placeholder="Que deseas construir o automatizar?" />

          <button type="submit" className="nexis-btn nexis-btn-primary">
            Enviar mensaje
          </button>
        </form>
      </section>

      <footer className="nexis-footer">
        <div className="nexis-footer-inner">
          <a className="nexis-brand" href="#inicio">NEXIS</a>

          <div className="nexis-footer-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          </div>

          <p>© 2026 Nexis. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
};

export default NexisLanding;
