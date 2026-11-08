
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-navbar">
      <Link href="/" className="site-logo">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          width="30"
          height="30"
        >
          <path d="m16 18 6-6-6-6M8 6l-6 6 6 6m6-14-4 20" />
        </svg>
        <span>DevPortfolio</span>
      </Link>

      <nav className="site-nav-links">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              pathname === item.href ? "active" : ""
            }
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
