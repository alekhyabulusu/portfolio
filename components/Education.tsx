import FadeIn from './FadeIn';

const education = [
  {
    degree: 'Master of Science in Data Science',
    school: 'Northeastern University, Boston, MA',
    details: 'CGPA: 3.7/4 • Algorithms, ML & Pattern Recognition, LLMs, Deep Learning, Data Mining',
    date: 'May 2027',
  },
  {
    degree: 'Bachelor of Science in Data Science',
    school: "Aurora's Degree & PG College, Hyderabad",
    details: 'CGPA: 9.39/10 • Statistics, Machine Learning, Programming Fundamentals, Data Analysis',
    date: 'Sept 2023',
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <FadeIn className="section-header">
          <p className="section-label">Academic</p>
          <h2 className="section-title">Education</h2>
        </FadeIn>
        <div className="edu-list">
          {education.map((edu) => (
            <FadeIn key={edu.degree} className="edu-item">
              <div>
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-school">{edu.school}</p>
                <p className="edu-details">{edu.details}</p>
              </div>
              <span className="edu-date">{edu.date}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
