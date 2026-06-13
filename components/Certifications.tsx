import FadeIn from './FadeIn';

const certs = [
  { icon: '🐍', name: 'Python & Data Science', issuer: 'UNP' },
  { icon: '📊', name: 'Data Analysis with R', issuer: 'Google' },
  { icon: '💻', name: 'Python 101', issuer: 'IBM' },
  { icon: '🗣️', name: 'NLP', issuer: 'Udemy' },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <FadeIn className="section-header">
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certifications</h2>
        </FadeIn>
        <div className="certs-grid">
          {certs.map((cert) => (
            <FadeIn key={cert.name} className="cert-card">
              <div className="cert-icon">{cert.icon}</div>
              <p className="cert-name">{cert.name}</p>
              <p className="cert-issuer">{cert.issuer}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
