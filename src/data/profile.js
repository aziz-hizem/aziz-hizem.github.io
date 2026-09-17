// Personal details shown across the site. Links set to null are simply not rendered.
export const profile = {
  name: 'Aziz Hizem',
  role: 'Final-year software engineering student at INSAT',
  headline: 'I build delivery pipelines, computer vision systems and the software around them.',
  availability: {
    label: 'Open to internships',
    detail: 'End-of-studies internship, 5–6 months, starting February 2027',
  },
  interests: ['DevOps & Cloud', 'AI & Computer Vision', 'Software Engineering'],
  links: {
    github: 'https://github.com/aziz-hizem',
    linkedin: 'https://www.linkedin.com/in/azizhizem/',
    email: 'azizhizem8818@gmail.com',
    cv: null, // e.g. '/Aziz_Hizem_CV.pdf' once the file is added to public/
  },
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
