import "../styles/landing.css";

const Landing = () => {
  return (
    <div className="bg-white text-slate-900 antialiased">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-theme">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              ResiManage
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#roles" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Roles
            </a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Precios
            </a>
          </div>

          <a className="inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-theme text-white bg-primary hover:bg-primary-dark transition-all shadow-sm">
            Iniciar Sesión
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Simplifica la vida en tu{" "}
              <span className="text-primary">comunidad</span>
            </h1>

            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-xl">
              La plataforma todo-en-uno para administradores, residentes y vigilantes.
              Gestiona pagos, documentos y comunicación en un solo lugar de forma
              transparente y eficiente.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-white font-bold rounded-theme hover:bg-primary-dark transition-all shadow-lg text-lg">
                Empieza Ahora
              </button>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-theme hover:bg-slate-50 transition-all text-lg">
                Ver Demo
              </button>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-2"></div>
            <img
              className="relative rounded-3xl shadow-2xl object-cover w-full aspect-[4/3]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF-H6ae3H_3IRB3xsmMBoiEeIzclt4v0H1DEzEroibLqqyJkGI1A-_matTGsRQuIhI2qj2WDtHhREtMQILMco8iWIqhiizn2FfmvTr7PjwCRJppOIXtoPyMdHRQVWcEEHOTlKTsUIl9X4clC-OhU4oR80axxNC-uotpfDdJoF6s6cI_8HqSxVHaUVCRiQD5uJBdG4-vxF8BCrElrxNwRZYMOg6lTT5XiD_LBU1A0aYIBjsDubAiOZCZNYTByIwiDvPlj6z55E_MuM"
              alt="Administradora usando tablet"
            />
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="py-24 bg-slate-50" id="roles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Soluciones para cada integrante
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Herramientas diseñadas específicamente para optimizar las tareas diarias de todo el ecosistema residencial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Administradores */}
            <div className="bg-white p-8 rounded-theme shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Administradores</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span> Automatización de cobros y pagos.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span> Gestión documental digital centralizada.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span> Canal de comunicación directo y masivo.
                </li>
              </ul>
            </div>

            {/* Residentes */}
            <div className="bg-white p-8 rounded-theme shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Residentes</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span> Pago de cuotas online 24/7.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span> Descarga de paz y salvos al instante.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span> Reserva de zonas comunes desde la App.
                </li>
              </ul>
            </div>

            {/* Celadores */}
            <div className="bg-white p-8 rounded-theme shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Celadores</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span> Registro digital de visitantes y placas.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span> Notificación de llegada de paquetes.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span> Botón de pánico y alertas de seguridad.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

            <div>
              <h4 className="text-xl font-bold mb-2">Ahorro de tiempo</h4>
              <p className="text-slate-600">
                Elimina procesos manuales y reduce la carga administrativa hasta en un 60%.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">Transparencia financiera</h4>
              <p className="text-slate-600">
                Reportes claros y accesibles para todos los residentes, generando confianza.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">Comunicación inmediata</h4>
              <p className="text-slate-600">
                Anuncios en tiempo real mediante notificaciones push y correo electrónico.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-slate-900 text-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-10 text-slate-900 border-4 border-primary shadow-2xl relative">

              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Plan Integral</h3>
                <p className="text-slate-500 mb-8">
                  Todo lo que necesitas para gestionar tu conjunto.
                </p>

                <div className="flex items-baseline justify-center gap-1 mb-8">
                  <span className="text-4xl font-extrabold">$299.000</span>
                  <span className="text-slate-500">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">Residentes ilimitados</li>
                <li className="flex items-center gap-3">Módulo de Portería incluido</li>
                <li className="flex items-center gap-3">Soporte técnico 24/7</li>
                <li className="flex items-center gap-3">Pasarela de pagos segura</li>
              </ul>

              <button className="w-full py-4 bg-primary text-white font-bold rounded-theme hover:bg-primary-dark transition-all">
                Obtener Plan
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center text-slate-500 text-xs">
            © 2023 ResiManage. Todos los derechos reservados.
          </div>

        </div>
      </footer>
      
    </div>
  );
};

export default Landing;