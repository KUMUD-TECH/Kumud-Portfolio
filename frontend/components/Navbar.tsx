"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "About Me", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
      <Link href="/" className="text-xl font-bold tracking-tight text-white">
        Kumud Verma</Link>

      <div className="flex items-center gap-6 md:gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className= {`relative text-sm transition-colors duration-200 ${
                isActive 
                ? "font-semibold text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
              {isActive && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-white" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}