export default function ContactPage() {
  return (
    <main>
      {/* Contact Header */}
      <section>
        <h1>Let's Connect</h1>

        <p>
          Have a project idea, collaboration opportunity, or just want to
          talk about technology? Feel free to reach out.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2>Get in Touch</h2>

        <p>
          I'm open to discussing software development, full-stack projects,
          AI applications, and interesting technical ideas.
        </p>

        <div>
          <a href="mailto:your-email@example.com">
            Email Me
          </a>

          <a
            href="https://github.com/KUMUD-TECH"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h2>Send Me a Message</h2>

        <form>
          <div>
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
            />
          </div>

          <div>
            <label htmlFor="subject">Subject</label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What would you like to discuss?"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              rows={6}
              required
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}