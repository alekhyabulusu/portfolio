import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import CountUp from './CountUp';
import { Target, FlaskConical } from './icons';

const stats = [
  { num: '3.7', lbl: 'Grad GPA · Northeastern' },
  { num: '8+', lbl: 'Featured projects' },
  { num: '41%', lbl: 'Lower calibration error · AURORA' },
  { num: '0.85', lbl: 'RAGAS faithfulness · Course Companion' },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHeader index="01" label="Introduction" title="About Me" />
        <div className="bento">
          <FadeIn className="about-card b-bg">
            <h3>
              <Target size={18} /> Background
            </h3>
            <p>
              Currently pursuing my MS in Data Science at Northeastern, building on a BS in the same
              field. I&apos;m passionate about building end-to-end solutions from exploratory
              analysis, ML models to LLM-powered applications using Python, LangChain and modern NLP
              frameworks.
            </p>
          </FadeIn>
          <FadeIn className="about-card b-focus">
            <h3>
              <FlaskConical size={18} /> Current Focus
            </h3>
            <p>
              Graduate student at Northeastern University developing a health and fitness app.
              Recently built a RAG-powered QA system for coursework with 8 different tutor personas
              using LangChain and Llama 3.1.
            </p>
          </FadeIn>
          {stats.map((s, i) => (
            <FadeIn key={s.num} className={`about-card b-stat b-stat-${i + 1}`}>
              <CountUp value={s.num} className="num" />
              <span className="lbl">{s.lbl}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
