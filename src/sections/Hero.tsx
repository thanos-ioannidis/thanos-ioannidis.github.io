export default function Hero() {
  return (
    <section className="hero">
      <p className="intro">Hi, my name is</p>

      <h1>
        Thanos Ioannidis.
        <br />
        <span>Senior Frontend Engineer.</span>
      </h1>

      <p className="summary">
        I build scalable, production-grade web applications
        with React, TypeScript and modern UI architecture.
      </p>

      <div className="actions">
        <a href="#experience" className="btn primary">
          View Experience
        </a>
        <a href="/resume.pdf" className="btn">
          Download Resume
        </a>
      </div>
    </section>
  );
}
