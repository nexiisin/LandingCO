import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const items: NavItem[] = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Roles", href: "#roles" },
  { label: "Precios", href: "#pricing" },
  { label: "Asambleas", href: "#asambleas" },
];

export default function Navbar() {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="w-full flex justify-center mt-6">
      <nav className="relative bg-white/70 backdrop-blur-md rounded-full px-2 py-2 shadow-md">
        {/* highlight */}
        <div
          className="absolute top-2 bottom-2 left-2 bg-black rounded-full transition-all duration-300"
          style={{
            width: `${100 / items.length}%`,
            transform: `translateX(${active * 100}%)`,
          }}
        />

        <ul className="relative flex gap-2">
          {items.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setActive(index)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  active === index ? "text-white" : "text-gray-700"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}