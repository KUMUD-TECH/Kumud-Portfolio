export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 px-6 py-12 md:px-12 lg:px-20">
      <div className="flex flex-col items-center">
        <a
          href="/about"
          className="rounded-full bg-[#FF6400] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#FFC200] hover:text-black hover:shadow-[0_0_25px_rgba(255,100,0,0.35)]"
        >
          Know More
        </a>

        <div className="mt-6 flex items-center gap-8">
          <a
            href="https://github.com/KUMUD-TECH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FF6400]"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kumud-verma-1sd9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FF6400]"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Kumud Verma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}