import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import { FlaskConical } from './icons';

const publications = [
  {
    status: 'Preprint · arXiv',
    title:
      'Predictive Variance Decides: Region-Aware Gaussian Processes Should Adapt the Noise, Not the Approximation',
    authors: ['Alekhya Bulusu', 'Kameswara Sai Srikar Manda'],
    venue: 'Northeastern University',
    date: '2026',
    summary:
      'Region-aware Gaussian Process methods try to spend exact inference only where the data is hard and use cheap approximations like Random Fourier Features or Nyström elsewhere. This paper revisits that idea and argues that predictive variance is the right criterion for region-awareness, and that it should drive how the noise is modelled rather than which approximation is used.',
    correction:
      'Supersedes our 2025 AURORA report, whose headline calibration gain came from a units bug; corrected, AURORA underperforms the exact GP it approximates.',
    tags: ['Gaussian Processes', 'Uncertainty Quantification', 'Noise Modelling', 'Kernel Methods'],
    link: 'https://github.com/alekhyabulusu/Aurora-GP',
  },
];

export default function Publications() {
  return (
    <section id="publications">
      <div className="container">
        <SectionHeader index="04" label="Research" title="Publications" />
        {publications.map((pub) => (
          <FadeIn key={pub.title} className="node-card pub-card">
            <div className="node-head">
              <div>
                <span className="node-type">
                  <FlaskConical size={13} />
                  {pub.status}
                </span>
                <p className="exp-role">{pub.title}</p>
                <p className="pub-authors">
                  {pub.authors.map((a, i) => (
                    <span key={a}>
                      {i > 0 && ', '}
                      {a === 'Alekhya Bulusu' ? <strong>{a}</strong> : a}
                    </span>
                  ))}
                </p>
              </div>
              <div className="node-meta">
                <span className="exp-date">{pub.date}</span>
                <p className="exp-loc">{pub.venue}</p>
              </div>
            </div>
            <p className="project-desc">{pub.summary}</p>
            <p className="pub-contrib">
              <span>Correction:</span> {pub.correction}
            </p>
            <div className="project-tags">
              {pub.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <a href={pub.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View code on GitHub · arXiv link coming soon →
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
