"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Facebook, MessageCircle, Twitter, Github, Youtube } from "lucide-react";

/**
 * Footer de FinQuest
 * Basado en el footer de Criptec con estilos FinQuest
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/about", label: "Acerca de" },
    { href: "/privacy", label: "Privacidad" },
    { href: "/terms", label: "Términos" },
    { href: "/contact", label: "Contacto" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/",
      label: "Facebook",
      icon: Facebook,
    },
    {
      href: "https://discord.gg/",
      label: "Discord",
      icon: MessageCircle,
    },
    {
      href: "https://x.com/",
      label: "Twitter/X",
      icon: Twitter,
    },
    {
      href: "https://github.com/",
      label: "GitHub",
      icon: Github,
    },
    {
      href: "https://www.youtube.com/",
      label: "YouTube",
      icon: Youtube,
    },
  ];

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)]">
      <Container maxWidth="7xl">
        <div className="py-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/FinPath.png"
                alt="FinPath Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

            {/* Footer Links */}
            <nav>
              <ul className="flex flex-wrap items-center justify-center gap-6">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Divider */}
          <hr className="border-[var(--border)] my-6" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-sm text-[var(--foreground)]/70">
              © {currentYear}{" "}
              <Link
                href="/"
                className="hover:text-[var(--primary)] transition-colors"
              >
                FinPath
              </Link>
              . Todos los derechos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
