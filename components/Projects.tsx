import Image from 'next/image';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const projects = [
  {
    title: 'AURORA: Uncertainty-Aware GP Framework',
    description:
      'A region-aware Gaussian Process approximation method that identifies high-importance regions through uncertainty and density analysis. Achieves 41% average improvement in Expected Calibration Error (ECE) with 3-5x speedup over full exact GP inference.',
    tags: ['Gaussian Processes', 'SciPy', 'k-NN', 'Kernel Methods', 'Python'],
    image: 'https://uploads.onecompiler.io/4498vsmkh/44rq5azx7/aurora.jpeg',
    imageAlt: 'AURORA Project',
    link: 'https://github.com/alekhyabulusu/Aurora-GP',
  },
  {
    title: 'Course Companion: RAG QA System',
    description:
      'A RAG system that enables question answering over uploaded course material with semantic chunking, similarity search and smart query classification. Implemented 8 adaptive tutor personas via prompt engineering and evaluated system reliability using RAGAS, achieving 0.85 faithfulness and 0.82 answer relevance.',
    tags: ['LangChain', 'RAG', 'Llama 3.1', 'Streamlit', 'RAGAS'],
    image: 'https://uploads.onecompiler.io/4498vsmkh/44rq5azx7/course%20companion.png',
    imageAlt: 'Course Companion',
    link: 'https://github.com/alekhyabulusu/Course-companion',
  },
  {
    title: 'Salescope: Sales Analytics Dashboard',
    description:
      'Comprehensive statistical analysis of Walmart sales data with an interactive Streamlit dashboard for visualization and exploration. Analyzed 17+ attributes across retail data. Customer segmentation on 1,000+ transactions with the dashboard exploring $320K+ revenue.',
    tags: ['Streamlit', 'Pandas', 'Data Analytics', 'Python', 'Matplotlib'],
    image: 'https://uploads.onecompiler.io/4498vsmkh/44rq5azx7/salescope.png',
    imageAlt: 'Salescope',
    link: 'https://github.com/alekhyabulusu/Salescope',
  },
  {
    title: 'Exercise Form Assessment',
    description:
      'Solves the problem of identifying unsafe exercise form in unsupervised workout settings. Built an end-to-end pipeline processing squat videos achieving 88.7% accuracy on injury risk prediction. Discovered form error chains via association rule mining.',
    tags: ['MediaPipe', 'Random Forest', 'PCA', 'SciPy'],
    image: 'https://uploads.onecompiler.io/4498vsmkh/44rq5azx7/pose_detection.png',
    imageAlt: 'Exercise Form Assessment',
    link: 'https://github.com/alekhyabulusu/Pose-Extraction-and-Injury-Analytics',
  },
  {
    title: 'Speech-to-Speech Chatbot',
    description:
      'A voice-based conversational AI built from scratch that listens to spoken input, processes it using NLP, and responds with synthesized speech. This project implements an end-to-end speech-to-speech chatbot that enables hands-free conversational interaction.',
    tags: ['NLP', 'NLTK', 'BeautifulSoup', 'TensorFlow', 'PyTorch'],
    image: 'https://uploads.onecompiler.io/4498vsmkh/44rq5azx7/chatbot.png',
    imageAlt: 'Speech-to-Speech Chatbot',
    link: 'https://github.com/alekhyabulusu/chatbot',
  },
  {
    title: 'Heart Disease Prediction',
    description:
      'A machine learning model to predict the likelihood of heart disease in patients based on clinical health attributes, enabling early detection and preventive care. Data was analysed using Logistic Regression and the model achieved 84% accuracy.',
    tags: ['Jupyter Notebook', 'Logistic Regression', 'scikit-learn', 'ML', 'Seaborn'],
    image: 'https://uploads.onecompiler.io/4498vsmkh/44rq5azx7/heart_disease_prediction.png',
    imageAlt: 'Heart Disease Prediction',
    link: 'https://github.com/alekhyabulusu/heart-disease-prediction',
  },
  {
    title: 'Jail Mortality Analysis',
    description:
      'Analyzed 7,000+ individual jail death records merged with facility-level data across 12 years to uncover demographic disparities. Built logistic regression models and computed ADP-adjusted mortality rates across all 50 states.',
    tags: ['R', 'ggplot2', 'tidyverse', 'dplyr', 'purrr'],
    image: 'https://uploads.onecompiler.io/4498vsmkh/44rq5azx7/jail_mortality.png',
    imageAlt: 'Jail Mortality Analysis',
    link: 'https://github.com/alekhyabulusu/Jail-mortality-analysis',
  },
  {
    title: 'N-gram Language Model',
    description:
      'Built an N-gram language model supporting unigram through 5-gram configurations, with next-word prediction via probability sampling and custom corpus training. Deployed an interactive Streamlit interface enabling real-time text generation.',
    tags: ['Python', 'NLTK', 'Streamlit', 'Matplotlib', 'NLP'],
    image: 'https://uploads.onecompiler.io/4498vsmkh/44rq5azx7/n-gram.png',
    imageAlt: 'N-gram Language Model',
    link: 'https://github.com/alekhyabulusu/n-gram',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeader index="03" label="Portfolio" title="Featured Projects" />
        <div className="projects-grid">
          {projects.map((project) => (
            <FadeIn key={project.title} className="project-card">
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
