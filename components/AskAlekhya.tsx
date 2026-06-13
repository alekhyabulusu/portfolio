'use client';
import { useEffect, useRef, useState } from 'react';

type Msg = { role: 'user' | 'bot'; text: string };

const KB: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['open', 'available', 'hiring', 'co-op', 'coop', 'internship', 'intern', 'opportunity', 'opportunities', 'looking', 'recruit', 'job', 'hire'],
    answer:
      "Yes — Alekhya is actively open to co-op and internship roles in data science and ML engineering. The quickest way to reach her is email (alekhyabulusu09@yahoo.com) or LinkedIn (linkedin.com/in/alekhyabulusu).",
  },
  {
    keywords: ['rag', 'langchain', 'retrieval', 'course companion', 'companion', 'ragas', 'tutor', 'qa system'],
    answer:
      "Alekhya has deep RAG experience. Her Course Companion is a full RAG QA system over course material using LangChain + Llama 3.1 — with semantic chunking, query classification, and 8 adaptive tutor personas. She evaluated it with RAGAS at 0.85 faithfulness and 0.82 answer relevance.",
  },
  {
    keywords: ['aurora', 'gaussian', 'gp', 'uncertainty', 'calibration', 'kernel'],
    answer:
      "AURORA is her uncertainty-aware Gaussian Process framework. It identifies high-importance regions via uncertainty and density analysis, achieving a 41% average improvement in Expected Calibration Error with a 3–5x speedup over full exact GP inference.",
  },
  {
    keywords: ['salescope', 'sales', 'dashboard', 'walmart', 'analytics'],
    answer:
      "Salescope is an interactive Streamlit dashboard analyzing Walmart sales — 17+ attributes, customer segmentation across 1,000+ transactions, exploring $320K+ in revenue.",
  },
  {
    keywords: ['exercise', 'form', 'pose', 'squat', 'injury', 'mediapipe', 'fitness', 'workout'],
    answer:
      "Her Exercise Form Assessment project flags unsafe workout form. It processes squat videos with MediaPipe + Random Forest, hitting 88.7% accuracy on injury-risk prediction and surfacing form-error chains via association rule mining.",
  },
  {
    keywords: ['chatbot', 'speech', 'voice', 'conversational'],
    answer:
      "She built a from-scratch speech-to-speech chatbot: it listens to spoken input, processes it with NLP, and replies with synthesized speech for hands-free conversation.",
  },
  {
    keywords: ['heart', 'disease', 'logistic', 'clinical', 'medical'],
    answer:
      "Her Heart Disease Prediction model uses logistic regression on clinical attributes to flag risk early, reaching 84% accuracy.",
  },
  {
    keywords: ['project', 'projects', 'work', 'built', 'portfolio', 'made'],
    answer:
      "Alekhya has 8 featured projects across ML, NLP, and analytics — highlights: AURORA (Gaussian Processes), Course Companion (RAG QA), Salescope (analytics dashboard), Exercise Form Assessment (88.7% accuracy), and a speech-to-speech chatbot. Ask me about any one of them!",
  },
  {
    keywords: ['skill', 'skills', 'tech', 'stack', 'language', 'languages', 'tool', 'tools', 'python', 'know', 'technology', 'technologies'],
    answer:
      "Her core stack: Python, SQL, R; PyTorch, TensorFlow, scikit-learn; LangChain, RAG, Hugging Face and LLMs for NLP/AI engineering; PostgreSQL, MongoDB and vector DBs; plus Streamlit, FastAPI and Flask for shipping.",
  },
  {
    keywords: ['education', 'school', 'university', 'northeastern', 'degree', 'gpa', 'study', 'master', 'masters', 'graduate', 'grad'],
    answer:
      "Alekhya is pursuing an MS in Data Science at Northeastern University, Boston (GPA 3.7, graduating May 2027), after a BS in Data Science (GPA 9.39/10). Coursework: ML & Pattern Recognition, LLMs, Deep Learning, and Data Mining.",
  },
  {
    keywords: ['experience', 'unp', 'clinician', 'discharge', 'research', 'work history', 'background'],
    answer:
      "She was a Data Science Research Intern at UNP (Nov 2021–Apr 2022), building a predictive model for clinical discharge decisions — 83% accuracy using logistic regression with cross-validation and hyperparameter tuning.",
  },
  {
    keywords: ['contact', 'email', 'reach', 'linkedin', 'github', 'connect', 'get in touch', 'phone', 'message'],
    answer:
      "Reach Alekhya at alekhyabulusu09@yahoo.com, on LinkedIn (linkedin.com/in/alekhyabulusu), or GitHub (github.com/alekhyabulusu). She'd love to hear from you!",
  },
  {
    keywords: ['resume', 'cv'],
    answer:
      "Her resume is linked at the top of the page via the “View Resume” button — or just email her at alekhyabulusu09@yahoo.com.",
  },
  {
    keywords: ['who', 'about her', 'herself', 'tell me about', 'bio'],
    answer:
      "Alekhya Bulusu is a Data Scientist & ML Engineer doing her MS at Northeastern. She specializes in RAG architectures, NLP, and scalable ML pipelines — building everything from Gaussian Process frameworks to LLM-powered apps.",
  },
  {
    keywords: ['hello', 'hey there', 'hi there', 'greetings'],
    answer:
      "Hi! I'm Alekhya's assistant. Ask me about her projects, skills, experience — or whether she's open to co-ops.",
  },
  {
    keywords: ['thank', 'thanks', 'thx'],
    answer: 'Anytime! Reach her directly at alekhyabulusu09@yahoo.com.',
  },
];

const FALLBACK =
  "Good question! I can tell you about Alekhya's projects (AURORA, Course Companion, Salescope…), her skills, education, experience, or how to get in touch. Try one of the suggestions below.";

const SUGGESTIONS = [
  'Is she open to co-ops?',
  'Tell me about AURORA',
  "What's her RAG experience?",
  "What's her tech stack?",
  'How do I contact her?',
];

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function answerFor(q: string): string {
  const s = ` ${q.toLowerCase()} `;
  let best = { score: 0, answer: FALLBACK };
  for (const e of KB) {
    let score = 0;
    for (const k of e.keywords) {
      const hit = k.includes(' ')
        ? s.includes(k)
        : new RegExp(`\\b${escapeRe(k)}\\b`).test(s);
      if (hit) score += k.length;
    }
    if (score > best.score) best = { score, answer: e.answer };
  }
  return best.answer;
}

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4Z" />
    </svg>
  );
}

export default function AskAlekhya() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'bot',
      text: "Hi! I'm Alekhya's assistant. Ask me about her projects, skills, experience — or whether she's open to co-ops.",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing, open]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q || typing) return;
    setMessages((m) => [...m, { role: 'user', text: q }]);
    setInput('');
    setTyping(true);
    const ans = answerFor(q);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: 'bot', text: ans }]);
    }, 650);
  };

  return (
    <>
      <button
        className={`aa-fab${open ? ' open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close assistant' : "Ask Alekhya's assistant"}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
      {open && (
        <div className="aa-panel" role="dialog" aria-label="Ask Alekhya assistant">
          <div className="aa-head">
            <div className="aa-avatar">AB</div>
            <div>
              <p className="aa-title">Ask Alekhya</p>
              <p className="aa-sub">
                <span className="aa-dot" /> AI assistant · usually instant
              </p>
            </div>
          </div>
          <div className="aa-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`aa-msg aa-${m.role}`}>
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="aa-msg aa-bot aa-typing">
                <span />
                <span />
                <span />
              </div>
            )}
            {messages.length <= 1 && !typing && (
              <div className="aa-suggest">
                {SUGGESTIONS.map((s) => (
                  <button key={s} className="aa-chip" onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
          <form
            className="aa-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              className="aa-input"
              placeholder="Ask about her work…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Message"
            />
            <button type="submit" className="aa-send" aria-label="Send message">
              <SendIcon />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
