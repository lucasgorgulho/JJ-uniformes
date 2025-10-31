"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import SubMenu from "./SubMenu";

const menuItems = [
  { label: "JJ Uniformes", path: "/" },
  {
    label: "PRODUTOS",
    path: "/produtos",
    subItems: [
      { label: "...", path: "/" },
    ],
  },
  { label: "Sobre", path: "/" },
  { label: "Serviços", path: "/" },
  { label: "Contato", path: "/" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubMenu = (label: string) =>
    setActiveMenu(activeMenu === label ? null : label);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={toggleMenu}
        >
          <div
            className="absolute top-0 right-0 w-80 h-full bg-gradient-to-b from-[#3CB371]] to-[#518DC1] shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-white/20">
              <Image
                src="/Distribuidora.svg"
                alt="Baterias Fire"
                width={140}
                height={40}
                priority
              />
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <nav className="px-6 py-4 space-y-2 text-sm uppercase font-semibold">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between border-b border-white/10">
                    <Link
                      href={item.path}
                      className={`block py-4 w-full tracking-wide transition-all duration-200 ${
                        pathname === item.path
                          ? "bg-white/20 text-white border-l-4 border-yellow-300 pl-2"
                          : "text-red-100 hover:text-white hover:bg-white/10 pl-2"
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>

                    {item.subItems && (
                      <button
                        onClick={() => toggleSubMenu(item.label)}
                        className="text-white p-4 focus:outline-none"
                        aria-label={`Toggle submenu for ${item.label}`}
                      >
                        <FiChevronRight
                          className={`transition-transform duration-300 ${
                            activeMenu === item.label ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.subItems && activeMenu === item.label && (
                    <SubMenu items={item.subItems} onItemClick={toggleMenu} />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
