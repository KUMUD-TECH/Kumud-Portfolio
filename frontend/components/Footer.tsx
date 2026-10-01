export default function Footer() {
  return (
    <footer>
      <div>
        <a href="/about">
                Know More
         </a>

        <a
          href="https://github.com/KUMUD-TECH"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kumud-verma-1sd9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <p>© {new Date().getFullYear()} Kumud Verma. All rights reserved.</p>
    </footer>
  );
}