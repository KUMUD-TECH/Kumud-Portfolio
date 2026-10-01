"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div>
        <Link href="/">Kumud Verma</Link>
      </div>

      <div>
        <Link href="/about">About Me</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}