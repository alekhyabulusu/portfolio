import FadeIn from './FadeIn';

const skillGroups = [
  {
    title: '💻 Programming & Framework',
    tags: ['Python', 'R', 'Bash', 'SQL', 'FastAPI', 'TensorFlow', 'PyTorch'],
  },
  {
    title: '💻 Developer Tools',
    tags: ['Jupyter Notebook', 'Google Colab', 'R Studio', 'Git', 'Github', 'VS Code', 'GoormIDE', 'OneCompiler'],
  },
  {
    title: '🤖 ML & DL',
    tags: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'SciPy', 'NumPy', 'Pandas', 'Gaussian Processes', 'MediaPipe'],
  },
  {
    title: '🧠 NLP & AI Engineering',
    tags: ['LangChain', 'RAG', 'ChromaDB', 'Hugging Face', 'NLTK', 'Transformers', 'LLMs', 'Meta Llama', 'OpenAI API', 'Pinecone', 'RAGAS', 'Prompt Engineering', 'Agentic AI'],
  },
  {
    title: '🗄️ Data Engineering & Databases',
    tags: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Vector Databases', 'BeautifulSoup', 'ETL', 'Data Pipelines', 'Streamlit', 'FastAPI', 'Flask'],
  },
  {
    title: '📊 Visualization & Analysis',
    tags: ['Matplotlib', 'Seaborn', 'Plotly', 'ggplot2', 'Tableau', 'Statistical Analysis', 'Hypothesis Testing'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <FadeIn className="section-header">
          <p className="section-label">Technical</p>
          <h2 className="section-title">Skills &amp; Tools</h2>
        </FadeIn>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <FadeIn key={group.title} className="skill-group">
              <p className="skill-group-title">{group.title}</p>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
