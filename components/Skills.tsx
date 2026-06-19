import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import { Code, Terminal, Cpu, Bot, Database, BarChart3 } from './icons';

const skillGroups = [
  {
    icon: <Bot size={16} />,
    title: 'NLP & AI Engineering',
    tags: ['NLTK', 'Hugging Face', 'Transformers', 'LangChain', 'LangGraph', 'LLMs', 'RAG', 'Meta Llama', 'OpenAI API', 'ChromaDB', 'Pinecone', 'RAGAS', 'Prompt Engineering', 'LlamaIndex', 'Agentic AI', 'LoRA', 'vLLM', 'spaCy'],
  },
  {
    icon: <Terminal size={16} />,
    title: 'Developer Tools & Web Dev',
    tags: ['Jupyter Notebook', 'Google Colab', 'R Studio', 'Git', 'Github', 'VS Code', 'GoormIDE', 'OneCompiler', 'Claude Code', 'Cursor', 'HTML', 'React.js', 'Node.js', 'Vercel', 'CI/CD', 'LaTeX', 'Markdown'],
  },
  {
    icon: <Database size={16} />,
    title: 'Data Engineering & Databases',
    tags: ['Data Pipelines', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Vector Databases', 'BeautifulSoup', 'Streamlit', 'FastAPI', 'Flask', 'DuckDB', 'ETL', 'Weaviate'],
  },
  {
    icon: <Cpu size={16} />,
    title: 'ML & Deep Learning',
    tags: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'Gaussian Processes', 'SciPy', 'MediaPipe', 'XGBoost'],
  },
  {
    icon: <BarChart3 size={16} />,
    title: 'Visualization & Analysis',
    tags: ['Matplotlib', 'Seaborn', 'Plotly', 'ggplot2', 'Tableau', 'Statistical Analysis', 'Hypothesis Testing', 'A/B Testing', 'Regression Analysis', 'Folium'],
  },
  {
    icon: <Code size={16} />,
    title: 'Programming & Frameworks',
    tags: ['Python', 'R', 'Bash', 'SQL', 'CUDA', 'FastAPI', 'TensorFlow', 'PyTorch'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeader index="02" label="Technical" title="Skills & Tools" />
        <div className="skills-bento">
          {skillGroups.map((group) => (
            <FadeIn key={group.title} className="skill-group">
              <p className="skill-group-title">
                {group.icon}
                {group.title}
              </p>
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
