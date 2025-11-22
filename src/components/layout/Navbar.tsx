"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LoginButton } from "@/features/auth/components/LoginButton";
import { cn } from "@/lib/utils";

/**
 * Navbar de FinQuest
 * Basado en la estructura de Criptec con estilos FinQuest
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar el background del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Links de navegación
  const navLinks = [
    { href: "#features", label: "Características" },
    { href: "#mundos", label: "Mundos" },
    { href: "#how-it-works", label: "Cómo Funciona" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md dark:bg-[var(--surface)]/95"
          : "bg-transparent"
      )}
    >
      <Container maxWidth="7xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              {/* Placeholder para tu logo - reemplaza con tu imagen */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <span className="text-xl font-bold text-[var(--foreground)]">
                  FinQuest
                </span>
              </div>
            </Link>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <LoginButton />
          </div>

          {/* Botón Menú Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Menú Mobile */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 overflow-hidden",
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="bg-white/95 dark:bg-[var(--surface)]/95 backdrop-blur-lg border-t border-[var(--border)] shadow-lg">
          <Container maxWidth="7xl">
            <nav className="py-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 rounded-lg transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {/* CTAs Mobile */}
                <li className="pt-4 border-t border-[var(--border)] space-y-3">
                  <div className="w-full">
                    <LoginButton />
                  </div>
                </li>
              </ul>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
