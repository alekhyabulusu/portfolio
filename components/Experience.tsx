import FadeIn from './FadeIn';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <FadeIn className="section-header">
          <p className="section-label">Professional</p>
          <h2 className="section-title">Experience</h2>
        </FadeIn>
        <FadeIn className="exp-card">
          <div className="exp-header">
            <div>
              <p className="exp-role">Data Science Research Intern</p>
              <p className="exp-company">UNP</p>
            </div>
            <div className="exp-meta">
              <span className="exp-date">Nov 2021 – Apr 2022</span>
              <p className="exp-loc">Hyderabad, India</p>
            </div>
          </div>
          <ul className="exp-list">
            <li>
              Engineered a predictive model to support clinicians in discharge decisions, reducing
              risk of premature discharge
            </li>
            <li>
              Analyzed post-operative records with Python and scikit-learn, uncovering top predictors
              of complications
            </li>
            <li>
              Achieved 83% accuracy using logistic regression with cross-validation and
              hyperparameter tuning
            </li>
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
