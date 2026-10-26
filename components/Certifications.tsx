import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import { Bot, BarChart3, Terminal, MessageCircle } from './icons';

const certs = [
  { icon: <Bot size={26} />, name: 'Model Context Protocol Advanced Topics', issuer: 'Anthropic' },
  { icon: <BarChart3 size={26} />, name: 'Data Analysis with R Programming', issuer: 'Google' },
  { icon: <Terminal size={26} />, name: 'Python 101 for Data Science', issuer: 'IBM' },
  { icon: <MessageCircle size={26} />, name: 'Natural Language Processing', issuer: 'Udemy' },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <SectionHeader index="06" label="Credentials" title="Certifications" />
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
