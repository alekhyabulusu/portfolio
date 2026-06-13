import FadeIn from './FadeIn';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <FadeIn className="section-header">
          <p className="section-label">Introduction</p>
          <h2 className="section-title">About Me</h2>
        </FadeIn>
        <div className="about-grid">
          <FadeIn className="about-card">
            <h3>🎯 Background</h3>
            <p>
              Currently pursuing my MS in Data Science at Northeastern, building on a BS in the same
              field. I&apos;m passionate about building end-to-end solutions from exploratory
              analysis, ML models to LLM-powered applications using Python, LangChain and modern NLP
              frameworks.
            </p>
          </FadeIn>
          <FadeIn className="about-card">
            <h3>🔬 Current Focus</h3>
            <p>
              Graduate student at Northeastern University developing a health and fitness app.
              Recently built a RAG-powered QA system for coursework with 8 different tutor personas
              using LangChain and Llama 3.1.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
