// Personal details shown across the site. Links set to null are simply not rendered.
export const profile = {
  name: 'Aziz Hizem',
  role: 'Final-year engineering student at [[INSAT]]',
  roleNote: null, // optional small line under the role, e.g. 'Engineering Degree, 2027'
  // Putting [[double brackets]] around text  gives it the gradient effect.
  // The big line under your name
  headline: 'I [[create and automate]] things to make life easier.',
  // The two short lines under it: same idea, two worlds (the first one shows on the left)
  pillars: [
    { label: 'Software', text: 'AI that does the heavy lifting, and cloud pipelines that build, test and deploy code by themselves.' },
    { label: 'Machines', text: 'Industrial computing & automation, where systems run on their own.' },
  ],
  availability: {
    label: 'Open to internships',
    detail: 'End-of-studies internship, 5–6 months, starting February 2027',
  },
  interests: ['Software Solutions', 'DevOps & Cloud', 'Artificial Intelligence', 'Computing & Automation'],
  links: {
    github: 'https://github.com/aziz-hizem',
    linkedin: 'https://www.linkedin.com/in/azizhizem/',
    email: 'azizhizem8818@gmail.com',
  },
}

export const skills = [
  {
    group: 'Cloud & Infrastructure',
    items: ['AWS (Lambda, S3, DynamoDB, API Gateway, CloudFront, ECR)', 'Azure (Container Apps, Container Registry, Azure SQL)', 'Terraform', 'Docker', 'Linux'],
  },
  {
    group: 'DevOps & CI/CD',
    items: ['Azure DevOps (Repos, Pipelines, Boards)', 'GitLab CI/CD', 'Infrastructure as code', 'SonarQube', 'Git'],
  },
  {
    group: 'AI & Machine Learning',
    items: [
      'LLM integration',
      'AWS Bedrock',
      'LangChain & LangGraph',
      'Llama 3 (Groq)',
      'RAG',
      'NLP',
      'Object detection (YOLO11, Ultralytics)',
      'Model fine-tuning',
      'OpenCV',
    ],
  },
  {
    group: 'Programming & APIs',
    // An item written as { name, featured: true } gets the highlighted style
    items: [{ name: 'Python (Pandas, NumPy, scikit-learn)', featured: true }, 'Java', 'C / C++', 'SQL', 'Bash', 'TypeScript', 'FastAPI', 'REST APIs', 'WebSockets', 'React', 'VS Code'],
  },
  {
    group: 'Embedded, IoT & Industry 4.0',
    items: ['Raspberry Pi 5', 'Arduino', 'IoT', 'Industry 4.0', 'PLC programming', 'RTOS', 'GPIO', 'Camera integration & streaming', 'Robotics'],
  },
  {
    group: 'Office & Collaboration',
    items: ['Jira', 'Confluence', 'Microsoft 365 (Word, Excel, PowerPoint, OneNote, Outlook, Teams)'],
  },
  {
    group: 'Languages',
    items: ['English (bilingual)', 'French (bilingual)', 'Arabic (native)'],
  },
]
