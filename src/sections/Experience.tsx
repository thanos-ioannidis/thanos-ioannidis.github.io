export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>

      <div className="experience">
        <div className="experience-item">
          <h3>
            Senior Frontend Engineer <span>@ Company Name</span>
          </h3>
          <p className="period">2021 — Present</p>
          <ul>
            <li>Led frontend architecture refactor</li>
            <li>Improved performance and bundle size</li>
            <li>Worked closely with product and backend teams</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>
            Frontend Engineer <span>@ Previous Company</span>
          </h3>
          <p className="period">2018 — 2021</p>
          <ul>
            <li>Developed reusable UI components</li>
            <li>Maintained large-scale React applications</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
