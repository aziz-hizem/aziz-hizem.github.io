// Personal details shown across the site. Links set to null are simply not rendered.
export const profile = {
  name: 'Aziz Hizem',
  role: 'Final-year engineering student at [[INSAT]]',
  roleNote: 'Engineering Degree, 2027',
  // Putting [[double brackets]] around text  gives it the gradient effect.
  headline:
    'I [[automate]] things and make life easier. I study industrial computing & automation, where machines run on their own. I bring the same idea to [[software]]: AI that does the heavy lifting, and cloud pipelines that build, test and deploy code by themselves.',
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
    items: ['AWS (Lambda, S3, DynamoDB, API Gateway, CloudFront, ECR)', 'Azure (Container Apps, Container Registry, Azure SQL)', 'Terraform', 'Docker', 'Kubernetes', 'Linux'],
  },
  {
    group: 'DevOps & CI/CD',
    items: ['Azure DevOps (Repos, Pipelines, Boards)', 'GitLab CI/CD', 'Jenkins', 'Infrastructure as code', 'SonarQube', 'Git'],
  },
  {
    group: 'AI & Machine Learning',
    items: [
      'LLM integration (AWS Bedrock, LangChain, LangGraph)',
      'Llama 3 (Groq)',
      'RAG',
      'Text-to-SQL',
      'NLP',
      'Prompt engineering',
      'Object detection (YOLO11, Ultralytics)',
      'Model fine-tuning',
      'PyTorch',
      'OpenCV',
    ],
  },
  {
    group: 'Programming & APIs',
    items: ['Python (Pandas, NumPy, scikit-learn)', 'Java', 'C / C++', 'SQL', 'Bash', 'TypeScript', 'FastAPI', 'REST APIs', 'WebSockets', 'React'],
  },
  {
    group: 'Embedded & Hardware',
    items: ['Raspberry Pi 5', 'Arduino', 'GPIO', 'Servo actuators', 'Camera integration & streaming', 'PLC programming', 'RTOS', 'Serial communication'],
  },
  {
    group: 'Office & Collaboration',
    items: ['Jira', 'Confluence', 'Microsoft 365 (Word, Excel, PowerPoint, OneNote, Outlook, Teams)'],
  },
  {
    group: 'Languages',
    items: ['English (bilingual)', 'French (bilingual)', 'Arabic (native)', 'German (basic)'],
  },
]
