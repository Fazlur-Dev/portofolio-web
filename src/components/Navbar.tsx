"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    path: "/",
  },
  {
    label: "Projects",
    href: "/projects",
    path: "/projects",
  },
  {
    label: "Services",
    href: "/#services",
    path: null,
  },
  {
    label: "About",
    href: "/about",
    path: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

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
              key={item.label}
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
              className="active"
            >
              ID
            </button>

            <span>|</span>

            <button type="button">
              EN
            </button>
          </div>

          <Link
            href="/contact"
            className="navbar-cta"
          >
            Let&apos;s Talk

            <ArrowUpRight size={16} />
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar-menu-button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
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
            key={item.label}
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
            className="active"
          >
            ID
          </button>

          <span>|</span>

          <button type="button">
            EN
          </button>

        </div>

        <Link
          href="/contact"
          className="navbar-cta"
          onClick={closeMenu}
        >
          Let&apos;s Talk

          <ArrowUpRight size={16} />
        </Link>

      </div>
    </header>
  );
}