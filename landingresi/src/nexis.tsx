import { Link } from "react-router-dom";
import { useEffect } from "react";

const Nexis = () => {
  useEffect(() => {
    document.title = "Nexis";
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold tracking-tight">Nexis</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Página principal de la aplicación. Aquí se presentarán todos los servicios
          de Nexis y el acceso a cada módulo.
        </p>

        <div className="mt-10 rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Módulos disponibles</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>
              Gestión de Conjuntos: landing dedicada para administración residencial.
            </li>
          </ul>

          <Link
            to="/gestion-de-conjuntos"
            className="inline-block mt-6 px-5 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors"
          >
            Ir a Gestión de Conjuntos
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Nexis;
