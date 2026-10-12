"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowUpRight, LogOut } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { language, setLanguage } = useLanguage();

  const navItems = [
    {
      label: language === "id" ? "Beranda" : "Home",
      href: "/",
      path: "/",
    },
    {
      label: language === "id" ? "Proyek" : "Projects",
      href: "/projects",
      path: "/projects",
    },
    {
      label: language === "id" ? "Layanan" : "Services",
      href: "/#services",
      path: null,
    },
    {
      label: language === "id" ? "Tentang" : "About",
      href: "/about",
      path: "/about",
    },
    {
      label: language === "id" ? "Kontak" : "Contact",
      href: "/contact",
      path: "/contact",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path: string | null) => {
    if (!path) return false;

    if (path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  const changeLanguage = (newLanguage: "id" | "en") => {
    setLanguage(newLanguage);
  };

  const exitPortfolio = () => {
    closeMenu();
    // Navigasi ke Welcome tanpa menghapus riwayat Chrome.
    router.push("/welcome");
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">

        {/* Brand */}
        <Link
          href="/"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <div className="navbar-logo">
            FR
          </div>

          <div className="navbar-brand-text">
            <span className="navbar-brand-name">
              Fazlur Rahman
            </span>

            <span className="navbar-brand-role">
              SOFTWARE DEVELOPER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive(item.path)
                  ? "active"
                  : ""
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="navbar-actions">

          <div className="navbar-language">
            <button
              type="button"
              className={
                language === "id"
                  ? "active"
                  : ""
              }
              onClick={() => changeLanguage("id")}
              aria-pressed={language === "id"}
            >
              ID
            </button>

            <span>|</span>

            <button
              type="button"
              className={
                language === "en"
                  ? "active"
                  : ""
              }
              onClick={() => changeLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>

          <Link
            href="/contact"
            className="navbar-cta"
          >
            {language === "id"
              ? "Mari Bicara"
              : "Let's Talk"}

            <ArrowUpRight size={16} />
          </Link>
          
          <button
            type="button"
            className="navbar-exit-button"
            onClick={exitPortfolio}
            title={
              language === "id"
                ? "Keluar dari Portfolio"
                : "Exit Portfolio"
            }
            aria-label={
              language === "id"
                ? "Keluar dari Portfolio"
                : "Exit Portfolio"
            }
          >
            <LogOut size={18} strokeWidth={1.8} />
          </button>


        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar-menu-button"
          aria-label={
            menuOpen
              ? language === "id"
                ? "Tutup menu navigasi"
                : "Close navigation menu"
              : language === "id"
                ? "Buka menu navigasi"
                : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen(
              (current) => !current
            )
          }
        >
          {menuOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>

      </nav>

      {/* Mobile Navigation */}
      <div
        className={`navbar-mobile ${
          menuOpen ? "open" : ""
        }`}
      >

        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              isActive(item.path)
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}

        <div className="navbar-language">

          <button
            type="button"
            className={
              language === "id"
                ? "active"
                : ""
            }
            onClick={() => changeLanguage("id")}
            aria-pressed={language === "id"}
          >
            ID
          </button>

          <span>|</span>

          <button
            type="button"
            className={
              language === "en"
                ? "active"
                : ""
            }
            onClick={() => changeLanguage("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>

        </div>

        <Link
          href="/contact"
          className="navbar-cta"
          onClick={closeMenu}
        >
          {language === "id"
            ? "Mari Bicara"
            : "Let's Talk"}

          <ArrowUpRight size={16} />
        </Link>
        
        <button
          type="button"
          className="navbar-exit-button navbar-exit-mobile"
          onClick={exitPortfolio}
        >
          <LogOut size={17} strokeWidth={1.8} />

          <span>
            {language === "id"
              ? "Keluar dari Portfolio"
              : "Exit Portfolio"}
          </span>
        </button>



      </div>
    </header>
  );
}