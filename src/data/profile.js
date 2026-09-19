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
  interests: ['DevOps & Cloud', 'AI & Computer Vision', 'Software', 'Hardware & Automation'],
  links: {
    github: 'https://github.com/aziz-hizem',
    linkedin: 'https://www.linkedin.com/in/azizhizem/',
    email: 'azizhizem8818@gmail.com',
  },
  // Resume downloads. Put the PDFs in public/resume/ with exactly these names.
  resume: [
    { label: 'English', href: '/resume/Aziz_Hizem_Resume_EN.pdf' },
    { label: 'French', href: '/resume/Aziz_Hizem_Resume_FR.pdf' },
  ],
}

export const skills = [
  {
    group: 'DevOps & Cloud',
    items: ['Azure DevOps', 'Azure Pipelines', 'GitHub Actions', 'Docker', 'Terraform', 'SonarQube', 'Gitleaks', 'Linux', 'Git'],
  },
  {
    group: 'AI & Computer Vision',
    items: ['OpenCV', 'YOLO / Ultralytics', 'dlib', 'NEAT neuroevolution', 'LLM APIs (Groq, Llama 3)', 'Prompt design', 'Text-to-SQL', 'RAG'],
  },
  {
    group: 'Software',
    items: ['Python', 'FastAPI', 'TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Electron', 'C# / .NET', 'SQL / SQLite', 'REST APIs'],
  },
  {
    group: 'Hardware',
    items: ['Raspberry Pi', 'Arduino', 'GPIO, LEDs & servos', 'Serial communication', 'Camera streaming'],
  },
]
