import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import { Briefcase, GraduationCap } from './icons';

type Node = {
  kind: 'Experience' | 'Education';
  anchor?: string;
  title: string;
  org: string;
  date: string;
  loc?: string;
  bullets?: string[];
  details?: string;
};

const timeline: Node[] = [
  {
    kind: 'Experience',
    title: 'AI/ML Engineer Intern',
    org: 'IpserLab',
    date: 'June 2026 – Aug 2026',
    bullets: [
      'Implementing OCR pipeline to extract grocery items from scanned receipts, automating inventory updates and expiration tracking',
      'Building recommendation system for meal suggestions based on available ingredients, dietary preferences, and nutritional goals',
      'Architecting full-stack application with React + TypeScript frontend and FastAPI backend, integrating ML pipelines for real-time suggestions',
    ],
  },
  {
    kind: 'Experience',
    title: 'Data Science Research Intern',
    org: 'UNP',
    date: 'Nov 2021 – Apr 2022',
    loc: 'Hyderabad, India',
    bullets: [
      'Engineered a predictive model to support clinicians in discharge decisions, reducing risk of premature discharge',
      'Analyzed post-operative records with Python and scikit-learn, uncovering top predictors of complications',
      'Achieved 83% accuracy using logistic regression with cross-validation and hyperparameter tuning',
    ],
  },
  {
    kind: 'Education',
    anchor: 'education',
    title: 'Master of Science in Data Science',
    org: 'Northeastern University, Boston, MA',
    date: 'May 2027',
    details: 'CGPA: 3.7/4 • Algorithms, ML & Pattern Recognition, LLMs, Deep Learning, Data Mining',
  },
  {
    kind: 'Education',
    title: 'Bachelor of Science in Data Science',
    org: "Aurora's Degree & PG College, Hyderabad",
    date: 'Sept 2023',
    details: 'CGPA: 9.39/10 • Statistics, Machine Learning, Programming Fundamentals, Data Analysis',
  },
];

export default function Journey() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHeader index="04" label="Background" title="Experience & Education" />
        <div className="timeline">
          {timeline.map((node, i) => (
            <FadeIn
              key={node.title}
              id={node.anchor}
              className="timeline-item"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className={`timeline-dot timeline-dot-${node.kind.toLowerCase()}`} />
              <div className="node-card">
                <div className="node-head">
                  <div>
                    <span className="node-type">
                      {node.kind === 'Experience' ? <Briefcase size={13} /> : <GraduationCap size={13} />}
                      {node.kind}
                    </span>
                    <p className="exp-role">{node.title}</p>
                    <p className="exp-company">{node.org}</p>
                  </div>
                  <div className="node-meta">
                    <span className="exp-date">{node.date}</span>
                    {node.loc && <p className="exp-loc">{node.loc}</p>}
                  </div>
                </div>
                {node.bullets && (
                  <ul className="exp-list">
                    {node.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {node.details && <p className="edu-details">{node.details}</p>}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
