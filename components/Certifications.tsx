import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import { Code, BarChart3, Terminal, MessageCircle } from './icons';

const certs = [
  { icon: <Code size={26} />, name: 'Python & Data Science', issuer: 'UNP' },
  { icon: <BarChart3 size={26} />, name: 'Data Analysis with R', issuer: 'Google' },
  { icon: <Terminal size={26} />, name: 'Python 101', issuer: 'IBM' },
  { icon: <MessageCircle size={26} />, name: 'NLP', issuer: 'Udemy' },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <SectionHeader index="05" label="Credentials" title="Certifications" />
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
