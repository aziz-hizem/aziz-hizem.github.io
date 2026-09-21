// Personal details shown across the site. Links set to null are simply not rendered.
export const profile = {
  name: 'Aziz Hizem',
  role: 'Final-year engineering student at [[INSAT]]',
  roleNote: 'National Engineer Diploma, 2027',
  // Putting [[double brackets]] around text  gives it the gradient effect.
  headline:
    '[[These projects are where my curiosity landed.]] DevOps, AI, software that solves a problem or makes something easier, and the hardware and automation I study.',
  availability: {
    label: 'Open to internships',
    detail: 'End-of-studies internship, 5–6 months, starting February 2027',
  },
  interests: ['DevOps & Cloud', 'AI & Computer Vision', 'Software Solutions', 'Hardware & Automation'],
  links: {
    github: 'https://github.com/aziz-hizem',
    linkedin: 'https://www.linkedin.com/in/azizhizem/',
    email: 'azizhizem8818@gmail.com',
  },
  // CV downloads. Put the PDFs in public/cv/ with exactly these names.
  cv: [
    { label: 'English', href: '/cv/Aziz_Hizem_CV_EN.pdf' },
    { label: 'French', href: '/cv/Aziz_Hizem_CV_FR.pdf' },
  ],
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
    group: 'AI & Computer Vision',
    items: ['LLM integration (AWS Bedrock, LangGraph)', 'Prompt engineering', 'Object detection (YOLO11)', 'Computer vision (OpenCV)', 'Text-to-SQL', 'RAG'],
  },
  {
    group: 'Programming & APIs',
    items: ['Python', 'Java', 'C', 'SQL', 'FastAPI', 'REST APIs', 'WebSockets', 'TypeScript', 'React'],
  },
  {
    group: 'Hardware',
    items: ['Raspberry Pi', 'Arduino', 'GPIO, LEDs & servos', 'Serial communication', 'Camera streaming'],
  },
  {
    group: 'Languages',
    items: ['English (bilingual)', 'French (bilingual)', 'Arabic (native)', 'German (basic)'],
  },
]
